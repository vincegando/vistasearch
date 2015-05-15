class TwitterService
  def initialize()
    @client = Twitter::REST::Client.new do |config|
      if Rails.env.production?
        config.consumer_key        = ENV["twitter_consumer_key"]
        config.consumer_secret     = ENV["twitter_consumer_secret"]
        config.access_token        = ENV["twitter_access_token"]
        config.access_token_secret = ENV["twitter_access_token_secret"]
      else
        auth_json = JSON.parse(IO.read(Rails.root.join('auth.json')))
        config.consumer_key        = auth_json["twitter_consumer_key"]
        config.consumer_secret     = auth_json["twitter_consumer_secret"]
        config.access_token        = auth_json["twitter_access_token"]
        config.access_token_secret = auth_json["twitter_access_token_secret"]
      end
    end
  end

  def search_for_tags(query)
    query.map { |term| term.insert(0,'#')  }
    response = @client.search("#{query.join(' ')}", result_type: "recent").take(10)
    query.map { |term| term[0] = '' }
    return TwitterService.format_json(response)
  end

  private

  def self.format_json(tweets)
    formatted_tweets = []
    tweets.each { |tweet| formatted_tweets.push({ :id => tweet.id.to_s, :user => tweet.user.screen_name, :type => "Twitter"  }) }
    rm_dup = formatted_tweets.uniq
    return rm_dup
  end

end
