require "soundcloud"

class SoundcloudService
  def initialize()
    unless Rails.env.production?
      j = JSON.parse( IO.read(Rails.root.join('auth.json')))
      @auth = j['soundcloud_auth']
    else
      @auth = ENV['SOUNDCLOUD_AUTH']
    end
  end

  def search_for_tags(query)
    r = HTTParty.get("https://api.soundcloud.com/tracks.json?consumer_key=#{@auth}&q=#{query.first}&limit=5")
    return get_oembed(JSON.parse(r.body))
  end

  private

  def get_oembed(sounds)
    embeds = []
    c = Soundcloud.new(:client_id => @auth)
    sounds.each do |sound|
      embed_info = c.get('/oembed', :url => sound['permalink_url'])
      embeds.append embed_info['html']
    end
    puts embeds
    return SoundcloudService.format_json(embeds)
  end

  def self.format_json(data)
    json_data = []
    data.each { |e| json_data.append({:link => e, :type => 'Soundcloud'}) }
    return json_data
  end
end