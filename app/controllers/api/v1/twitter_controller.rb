class Api::V1::TwitterController < Api::BaseController
  def index
    @query = params[:q]
    
  end
end
