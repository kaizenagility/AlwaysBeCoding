
class LogsController < ApplicationController
  def index
    @category_id = params[:category_id]
    render json: Log.where(category_id: @category_id)
  end

  # def index
  #   render json: Log.all
  # end

  def show
    render json: Log.find(params[:id])
  end

  def create
    log = Log.new(time: params[:time],
                  notes: params[:notes],
                  link: params[:link],
                  category_id: params[:category_id],
                  user_id: params[:user_id])
    log.save
    render json: {status: "log successful", log: log}
  end

  def destroy
    Log.destroy(params[:id])
    render json: {status: "delete successful"}
  end

  def update
    log = Log.update(params[:id],
                  time: params[:time],
                  notes: params[:notes],
                  link: params[:link],
                  category_id: params[:category_id],
                  user_id: params[:user_id])
    render json: {status: "log update successful", log: log}
  end
end
