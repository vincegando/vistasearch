require 'rails_helper'
require "#{Rails.root.join('app', 'services', 'TwitterService.rb')}"

describe TwitterService do
  let (:twitter_service) { TwitterService.new }

  context "#search_for_tags" do
    it "should respond successfully" do
      json = twitter_service.search_for_tags(["surf"])
      expect(json).to be_kind_of Array
    end

    it "should not contain duplicates" do
      json = twitter_service.search_for_tags(["surf"])
      tweets = Array.new(json.length) { |i| json[i][:id] }
      expect(tweets.uniq.length == tweets.length).to be true
    end
  end
end