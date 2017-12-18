class CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def show
    render json: Category.find(params[:id])
  end

  def create
    category = Category.new(name: params[:name],
                  user_id: params[:user_id])
    category.save
    render json: {status: "new category successful", category: category}
  end

  def destroy
    Category.destroy(params[:id])
    render json: {status: "delete successful"}
  end

  def update
    category = Category.update(id: params[:id],
                    name: params[:name],
                    user_id: params[:user_id])
    render json: {status: "category update successful", category: category}
  end
end
