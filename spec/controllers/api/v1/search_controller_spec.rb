require 'rails_helper'

RSpec.describe Api::V1::SearchController, :type => :controller do
  render_views
  let(:json){ JSON.parse(response.body) }

  describe "GET #search" do
    it "renders the index template" do
      get :index, format: :json, q: ["surf"], filter: ["SocialMediaType.Twitter"]
      expect(response).to render_template("index")
    end

    it "responds with status code 200" do
      get :index, format: :json, q: ["surf"], filter: ["SocialMediaType.Twitter"]
      expect(response).to be_success
    end

    it "filters twitter correctly" do
      get :index, format: :json, q: ["surf"], filter: ["SocialMediaType.Twitter"]
      json["posts"].each { |tweet| expect(tweet["type"]).to eq("Twitter")  }
    end

    it "filters instagram correctly" do
      get :index, format: :json, q: ["surf"], filter: ["SocialMediaType.Instagram"]
      json["posts"].each { |gram| expect(gram["type"]).to eq("Instagram") }
    end

    it "deals with no filter correctly" do
      get :index, format: :json, q: ["surf"], filter: "SocialMediaType.All"
      flag = true
      json["posts"].each { |posts| flag = (posts["type"] == "Twitter" or posts["type"] == "Instagram" or posts["type"] == "Soundcloud") }
      expect(flag).to be true
    end
  end
end
