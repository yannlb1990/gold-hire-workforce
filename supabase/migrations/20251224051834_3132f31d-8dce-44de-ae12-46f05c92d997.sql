-- Create resumes storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false);

-- RLS: Anyone can upload resumes (for public form submissions)
CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'resumes');

-- RLS: Admins can read all resumes
CREATE POLICY "Admins can read resumes"
ON storage.objects FOR SELECT
USING (bucket_id = 'resumes' AND has_role(auth.uid(), 'admin'::app_role));

-- Add resume_url column to leads_workers
ALTER TABLE leads_workers ADD COLUMN resume_url TEXT;