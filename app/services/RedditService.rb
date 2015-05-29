require "redditkit"

class RedditService
	def initialize()
		client = RedditKit::Client.new 'vistasearch', 'vistasearch' 
		client.signed_in? # => true
	end

	def search_for_tags(query)
		paginated_response = RedditKit.search(query)
		return paginated_response
			#paginated_response is an array of links
	end	
end

# url = https://github.com/samsymons/RedditKit.rb