require 'httparty'

class InstagramService
  def initialize()
    @auth = "1b6fa53b9b444913ac0d139756de9925"
  end

  def search_for_tags(query)
    url = "https://api.instagram.com/v1/tags/#{query.first}/media/recent.json?client_id=#{@auth}&count=10"
    r = HTTParty.get(url)
    return InstagramService.format_json(JSON.parse(r.body)['data'])
  end
  
  private


  def self.format_json(response)
    formatted_response = []
    response.each do |gram| 
      link = gram['link']
      url = "http://api.instagram.com/oembed?url=#{link}"
      r = HTTParty.get(url)
      formatted_response.push({:link => r['html'], :type => "Instagram"})
    end
    return formatted_response
  end
  
end