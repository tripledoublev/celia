class GalleryGenerator < Jekyll::Generator
    safe true
  
    def generate(site)
      if site.collections['projects']
        site.collections['projects'].docs.each do |project|
          if project.data['gallery_folder']
            gallery_folder = File.join(site.source, project.data['gallery_folder'])
            if Dir.exist?(gallery_folder)
              images = Dir.entries(gallery_folder).select { |f| f.match?(/\.(jpg|jpeg|png|webp)$/i) }
              project.data['gallery'] = images.map do |image|
                {
                  'src' => File.join(site.baseurl, project.data['gallery_folder'], image),
                  'caption' => File.basename(image, File.extname(image)).gsub('_', ' ').capitalize
                }
              end
            end
          end
        end
      end
    end
  end