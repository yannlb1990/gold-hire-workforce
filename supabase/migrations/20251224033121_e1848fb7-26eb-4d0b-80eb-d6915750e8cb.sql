-- Create lead status enums
CREATE TYPE public.employer_lead_status AS ENUM ('new', 'contacted', 'quoted', 'filled', 'lost');
CREATE TYPE public.worker_lead_status AS ENUM ('new', 'contacted', 'placed', 'inactive');
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create employer leads table
CREATE TABLE public.leads_employers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- UTM tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  -- Lead data
  location TEXT NOT NULL,
  trade TEXT NOT NULL,
  qty INTEGER DEFAULT 1,
  start_date DATE,
  start_asap BOOLEAN DEFAULT false,
  duration TEXT,
  -- Contact info
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  -- Optional details
  address TEXT,
  site_hours TEXT,
  ppe_requirements TEXT,
  induction_requirements TEXT,
  parking_notes TEXT,
  budget_range TEXT,
  notes TEXT,
  -- Status tracking
  status employer_lead_status DEFAULT 'new',
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create worker leads table
CREATE TABLE public.leads_workers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- UTM tracking
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  -- Lead data
  locations TEXT[],
  trade TEXT,
  tickets TEXT[],
  availability TEXT,
  experience TEXT,
  -- Contact info
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  notes TEXT,
  -- Status tracking
  status worker_lead_status DEFAULT 'new',
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create user roles table for admin access
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on all tables
ALTER TABLE public.leads_employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads_workers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents infinite recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for leads_employers

-- Allow public inserts (form submissions)
CREATE POLICY "Anyone can submit employer leads"
ON public.leads_employers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view employer leads
CREATE POLICY "Admins can view all employer leads"
ON public.leads_employers
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update employer leads
CREATE POLICY "Admins can update employer leads"
ON public.leads_employers
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for leads_workers

-- Allow public inserts (form submissions)
CREATE POLICY "Anyone can submit worker leads"
ON public.leads_workers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only admins can view worker leads
CREATE POLICY "Admins can view all worker leads"
ON public.leads_workers
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update worker leads
CREATE POLICY "Admins can update worker leads"
ON public.leads_workers
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_roles

-- Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER update_leads_employers_updated_at
  BEFORE UPDATE ON public.leads_employers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_leads_workers_updated_at
  BEFORE UPDATE ON public.leads_workers
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for common queries
CREATE INDEX idx_leads_employers_status ON public.leads_employers(status);
CREATE INDEX idx_leads_employers_location ON public.leads_employers(location);
CREATE INDEX idx_leads_employers_trade ON public.leads_employers(trade);
CREATE INDEX idx_leads_employers_created_at ON public.leads_employers(created_at DESC);

CREATE INDEX idx_leads_workers_status ON public.leads_workers(status);
CREATE INDEX idx_leads_workers_trade ON public.leads_workers(trade);
CREATE INDEX idx_leads_workers_created_at ON public.leads_workers(created_at DESC);