class LogsController < ApplicationController
  def index
    render json: Log.all
  end

  def show
    render json: Log.find(params[:id])
  end

  def create
    log = Log.new(minutes: params[:minutes],
                  notes: params[:notes],
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
                    minutes: params[:minutes],
                    notes: params[:notes])
    render json: {status: "log update successful", log: log}
  end
end
