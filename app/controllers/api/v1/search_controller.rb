require "TwitterService"
require "InstagramService"
require "SoundcloudService"

class Api::V1::SearchController < Api::BaseController
  def index
    @response = []
    @limits = params[:filter]
    @limits = ["Twitter", "Instagram"] if @limits.first == "SocialMediaType.All"
    @limits = [@limits] unless @limits.is_a?(Array)
    #convert to array
    @classes = []
    @limits.each { |class_name| @classes.push(class_for_name(class_name)) }

    @classes.each { |search_service| @response.push(search_service.search_for_tags(params[:q])) }
    render :index
  end

  private

  def class_for_name(class_name)
    if class_name == "Twitter" or class_name == "SocialMediaType.Twitter"
      TwitterService.new
    elsif class_name == "Instagram" or class_name == "SocialMediaType.Instagram"
      InstagramService.new
    elsif class_name == "Soundcloud" or class_name == "SocialMediaType.Soundcloud"
      SoundcloudService.new
    end
  end
end
