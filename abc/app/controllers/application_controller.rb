class ApplicationController < ActionController::API

  def index
    render file: "#{Rails.root}/public/index.html"
  end

end
