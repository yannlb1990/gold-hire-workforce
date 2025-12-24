-- Add documents_url column to leads_employers table
ALTER TABLE public.leads_employers ADD COLUMN IF NOT EXISTS documents_url text;

-- Create client-documents storage bucket for employer document uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('client-documents', 'client-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for client-documents - allow public upload
CREATE POLICY "Allow public upload to client-documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'client-documents');

-- Create storage policy for client-documents - allow public read
CREATE POLICY "Allow public read from client-documents" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'client-documents');