require 'rails_helper'
require "#{Rails.root.join('app', 'services', 'SoundcloudService.rb')}"

describe TwitterService do
  let (:sc_service) { SoundcloudService.new }

  context "#search_for_tags" do
    it "should respond successfully" do
      json = sc_service.search_for_tags(["edm"])
      puts json
      expect(json).to be_kind_of Array
    end
  end
end