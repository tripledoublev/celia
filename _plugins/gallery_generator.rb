require 'yaml'

class GalleryGenerator < Jekyll::Generator
  safe true

  def generate(site)
    if site.collections['projects']
      site.collections['projects'].docs.each do |project|
        if project.data['gallery_folder']
          gallery_folder = File.join(site.source, project.data['gallery_folder'])
          pdf_folder = File.join(gallery_folder, 'pdf') # Look for a 'pdf' subfolder
          captions_file = File.join(gallery_folder, 'captions.yml') # Look for captions.yml

          
          # Load captions if the YAML file exists
          captions = {}
          if File.exist?(captions_file)
            captions = YAML.load_file(captions_file) || {}
          end

          if Dir.exist?(gallery_folder)
            images = Dir.entries(gallery_folder).select { |f| f.match?(/\.(jpg|jpeg|png|webp)$/i) && f != 'header.webp' }
            project.data['gallery'] = images.map do |image|
              file_name = File.basename(image, File.extname(image))
              is_pdf_preview = image.downcase == 'pdf.webp'

              pdf_src = nil
              if is_pdf_preview
                # Look for any PDF file in the pdf folder
                pdf_files = Dir.glob(File.join(pdf_folder, "*.pdf"))
                if pdf_files.any?
                  pdf_filename = File.basename(pdf_files.first)
                  pdf_src = File.join(site.baseurl, project.data['gallery_folder'], 'pdf', pdf_filename)
                end
              end

              {
                'src' => File.join(site.baseurl, project.data['gallery_folder'], image),
                'caption' => captions[file_name] || file_name.gsub('_', ' ').capitalize, 
                'type' => is_pdf_preview ? 'pdf' : 'image',
                'pdf_src' => pdf_src  # Store the PDF link
              }
            end
          end
        end
      end
    end
  end
end
