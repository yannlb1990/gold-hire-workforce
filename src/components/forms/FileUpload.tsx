import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FileUploadProps {
  bucket: "resumes" | "client-documents";
  onUploadComplete: (url: string) => void;
  accept?: string;
  maxSizeMB?: number;
  label?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function FileUpload({
  bucket,
  onUploadComplete,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  maxSizeMB = 10,
  label = "Upload Document",
  className = "",
  variant = "light",
}: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`File size must be less than ${maxSizeMB}MB`);
      return;
    }

    setIsUploading(true);

    try {
      // Create unique file name
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      setUploadedFile({ name: file.name, url: publicUrl });
      onUploadComplete(publicUrl);
      toast.success("File uploaded successfully");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = () => {
    setUploadedFile(null);
    onUploadComplete("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isDark = variant === "dark";
  const borderColor = isDark ? "border-steel-blue/30" : "border-border";
  const bgColor = isDark ? "bg-navy-light/50" : "bg-secondary/50";
  const textColor = isDark ? "text-concrete" : "text-foreground";
  const mutedColor = isDark ? "text-concrete/60" : "text-muted-foreground";

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        id={`file-upload-${bucket}`}
      />

      {uploadedFile ? (
        <div className={`flex items-center gap-3 p-4 rounded-2xl border ${borderColor} ${bgColor}`}>
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium truncate ${textColor}`}>{uploadedFile.name}</p>
            <p className={`text-xs ${mutedColor}`}>Uploaded successfully</p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="shrink-0"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <label
          htmlFor={`file-upload-${bucket}`}
          className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-dashed ${borderColor} ${bgColor} cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-primary/5`}
        >
          {isUploading ? (
            <>
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className={`text-sm ${mutedColor}`}>Uploading...</span>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <span className={`text-sm font-medium ${textColor}`}>{label}</span>
                <p className={`text-xs ${mutedColor} mt-1`}>
                  PDF, DOC, DOCX, JPG, PNG (max {maxSizeMB}MB)
                </p>
              </div>
            </>
          )}
        </label>
      )}
    </div>
  );
}
