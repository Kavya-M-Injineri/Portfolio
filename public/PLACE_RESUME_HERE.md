# Resume Setup Instructions

To enable resume viewing and downloading on your portfolio website:

1. **Place your resume PDF in this `/public` folder**
2. **Name it exactly:** `Kavya_Mahantesh_Injineri_Resume.pdf`

The resume will be accessible at:
- **View Resume button** → Opens an embedded PDF viewer in the Resume section
- **Download Resume button** → Downloads the PDF file directly to your computer

## Important Notes

- The file must be named exactly as shown above (case-sensitive)
- Supported format: PDF only
- Recommended file size: Under 5MB for optimal loading
- The PDF will display in an embedded viewer (600px height) when "View Resume" is clicked

## How It Works

Once you've placed your resume PDF in this `/public` folder with the correct filename:
1. The "View Resume" button will display your resume in an embedded iframe viewer
2. The "Download Resume" button in the Hero section and Resume section will download the PDF
3. Both features will work automatically without any code changes

## Testing

After placing your resume:
1. Click "View Resume" in the Hero section to scroll to the Resume section
2. Click the blue "View Resume" button in the Resume section to see the embedded PDF
3. Click "Download Resume" to download the file

If the PDF doesn't appear, check that:
- The filename is exactly `Kavya_Mahantesh_Injineri_Resume.pdf`
- The file is in the `/public` folder
- Your browser allows PDF viewing in iframes