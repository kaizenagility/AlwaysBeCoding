class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    log = User.new(name: params[:name],
                  email: params[:email],
                  bio: params[:bio],
                  picture: params[:picture])
    if user.valid?
      user.save
      render json: {status: "create successful", user: user}
    else
      render json: {status: "something went wrong"}
    end
  end

  def destroy
    User.destroy(params[:id])
    render json: {status: "delete successful"}
  end

  def update
    user = User.update(name: params[:name],
                  email: params[:email],
                  bio: params[:bio],
                  picture: params[:picture])
    render json: {status: "user update successful", user: user}
  end
end
