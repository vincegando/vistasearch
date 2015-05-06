class TwitterService
  def initialize()
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "6OWnoWaipCATFAenHaPQk0HZn"
      config.consumer_secret     = "23BQDLRRirZM2SWaB3gbwtj2gwWqol1vMfj75DShCGpjteM71P"
      config.access_token        = "2795234383-zpqIh5nNLlKnitaAj5gktWHtqHDdw0Nwv8mrZuh"
      config.access_token_secret = "l5Zn2Mb9rlAiR963sR0uTCxKMHQlRF8PNLGZ9JVnysDYr"
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
