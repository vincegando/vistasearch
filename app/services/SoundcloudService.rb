class SoundcloudService
  def initialize()
    unless Rails.env.production?
      j = JSON.parse( IO.read(Rails.root.join('auth.json')))
      @auth = j['soundcloud_auth']
    else
      @auth = ENV['soundcloud_auth']
    end
  end

  def search_for_tags(query)
    r = HTTParty.get("https://api.soundcloud.com/tracks.json?consumer_key=#{@auth}&q=#{query.first}&limit=5")
    return get_oembed(JSON.parse(r.body))
  end

  private

  def get_oembed(sounds)
    embeds = []
    sounds.each do |sound|
      r = HTTParty.get("http://soundcloud.com/oembed?format=json&url=#{sound['permalink_url']}")
      begin
        embed_info = JSON.parse(r.body)
        embeds.append embed_info['html']
      rescue Exception => e
        # Do nothing if response request is invalid
      end
    end
    return SoundcloudService.format_json(embeds)
  end

  def self.format_json(data)
    json_data = []
    data.each { |e| json_data.append({:link => e, :type => 'Soundcloud'}) }
    return json_data
  end
end