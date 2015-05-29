require 'rails_helper'

RSpec.describe HomeController, :type => :controller do
  describe "GET #index" do
    before do
      get :index
    end
    it "responds successfully" do
      expect(response).to be_success
    end

    it "renders index template" do
      expect(response).to render_template("index")
    end
  end
end
