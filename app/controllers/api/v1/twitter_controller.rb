class Api::V1::TwitterController < Api::BaseController
  def index
    #@query = params[:q]

    # Insert hashtag
    #@query.map { |term| term.insert(0, '#')  }
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = "6OWnoWaipCATFAenHaPQk0HZn"
      config.consumer_secret     = "23BQDLRRirZM2SWaB3gbwtj2gwWqol1vMfj75DShCGpjteM71P"
      config.access_token        = "2795234383-zpqIh5nNLlKnitaAj5gktWHtqHDdw0Nwv8mrZuh"
      config.access_token_secret = "l5Zn2Mb9rlAiR963sR0uTCxKMHQlRF8PNLGZ9JVnysDYr"
    end

    @tweets = client.search("#{@query.join(' ')}", result_type: "recent").take(10)
  end

end
