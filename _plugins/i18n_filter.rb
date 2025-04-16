module Jekyll
  module I18nFilter
    # Return the localized string for the given key
    def t(key, lang = nil)
      lang ||= @context.registers[:page]['lang'] || site_default_lang
      translations = @context.registers[:site].data['translations']
      
      # Key format should be 'section.key'
      section, subkey = key.split('.')
      if translations[section] && translations[section][lang] && translations[section][lang][subkey]
        translations[section][lang][subkey]
      elsif translations[section] && translations[section][site_default_lang] && translations[section][site_default_lang][subkey]
        # Fallback to default language
        translations[section][site_default_lang][subkey]
      else
        "[Translation missing: #{key}]"
      end
    end
    
    # Get the alternative URL for the current page in another language
    def alternate_url(lang)
      page = @context.registers[:page]
      site = @context.registers[:site]
      
      current_lang = page['lang']
      current_url = page['url']
      
      # Handle root URLs
      if current_url == '/'
        return lang == site_default_lang ? '/' : "/#{lang}/"
      end
      
      # Handle subpages
      if current_url.start_with?("/#{current_lang}/")
        # Replace current language with target language
        return current_url.sub("/#{current_lang}/", "/#{lang}/")
      elsif current_url.match?(/^\/[^\/]+\/$/)
        # This is likely a top-level page without a language prefix
        page_name = current_url.sub('/', '').sub('/', '')
        
        # Check if an equivalent page exists in the target language
        target_page = site.pages.find { |p| p['lang'] == lang && p['identifier'] == page['identifier'] }
        return target_page ? target_page.url : "/#{lang}/"
      end
      
      # Default fallback to the language homepage
      return lang == site_default_lang ? '/' : "/#{lang}/"
    end
    
    private
    
    def site_default_lang
      @site_default_lang ||= begin
        languages = @context.registers[:site].data['languages']
        default_lang = languages.find { |code, config| config['default'] }
        default_lang ? default_lang[0] : 'fr'
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::I18nFilter) 