require "TwitterService"
require "InstagramService"

class Api::V1::SearchController < Api::BaseController
  def index
    @response = []
    @limits = params[:filter]
    #convert to array
    @classes = []
    @limits.each { |class_name| @classes.push(class_for_name(class_name)) }
    @classes.each { |search_service| @response.push(search_service.search_for_tags(params[:q])) }
    render :index
  end

  private

  def twitter(q)
    yield(TwitterService.new.search_for_tags(q))
  end

  def class_for_name(class_name)
    if class_name == "Twitter"
      return TwitterService.new
    elsif class_name == "Instagram"
      return InstagramService.new
    end
  end
end
