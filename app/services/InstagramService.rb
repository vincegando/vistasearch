require 'httparty'

class InstagramService
  def initialize()
    @auth = "1b6fa53b9b444913ac0d139756de9925"
  end

  def search_for_tags(query)
    url = "https://api.instagram.com/v1/tags/#{query.first}/media/recent.json?client_id=#{@auth}"
    r = HTTParty.get(url)
    return InstagramService.format_json(JSON.parse(r.body)['data'])
  end
  
  private

  def self.format_json(response)
    formatted_response = []
    response.each { |gram| formatted_response.push({ :user => gram['user']['username'], :image_url => gram['images']['standard_resolution']['url'], type: "Instagram" }) }
    return formatted_response
  end
  
end