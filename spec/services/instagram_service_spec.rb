require 'rails_helper'
require "#{Rails.root.join('app', 'services', 'InstagramService.rb')}"

describe InstagramService do
  let(:instagram_service) { InstagramService.new }

  context "#search_for_tags" do
    it "should respond successfully" do
      json = instagram_service.search_for_tags(["surf"])
      expect(json).to be_kind_of Array
    end

    it "should not contain duplicates" do
      json = instagram_service.search_for_tags(["surf"])
      embeds = Array.new(json.length) { |i| json[i][:link] }
      expect(embeds.uniq.length == embeds.length).to be true
    end
  end
end