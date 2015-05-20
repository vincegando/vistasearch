require "soundcloud"

class SoundcloudService
  def initialize()
    unless Rails.env.production?
      j = JSON.parse( IO.read(Rails.root.join('auth.json')))
      @auth = j['soundcloud_auth']
      @client = Soundcloud.new(:client_id => @auth)
    else
      @auth = ENV['SOUNDCLOUD_AUTH']
      @client = Soundcloud.new(:client_id => @auth)
    end
  end

  def search_for_tags(query)
    r = HTTParty.get("https://api.soundcloud.com/tracks.json?consumer_key=#{@auth}&q=#{query.first}&limit=20")
    return get_oembed(JSON.parse(r.body))
  end

  private

  def get_oembed(sounds)
    embeds = []
    sounds.each do |sound|
      embed_info = @client.get('/oembed', :url => sound['permalink_url'])
      embeds.append embed_info['html']
    end
    puts embeds
    return SoundcloudService.format_json(embeds)
  end

  def self.format_json(data)
    json_data = []
    data.each { |e| {:link => e, :type => 'Soundcloud'} }
    return json_data
  end
end