class Api::ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show,]

  def index
    render json: current_user.activities
  end

  def show
    render json: @activity
  end

  def create 
    @activity = current_user.activities.new(activity_params)
    if @activity.save
      render json: @activity
    else 
      render json: { errors: @activity.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @activity.update(activity_params)
      render json: @activity
    else
      render json: { errors: @activity.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @activity.destroy
    render json: { message: "activity deleted."}
  end

  private
  def activity_params
    params.require(:activity).permit(:activity_type, :title)
  end

  def set_activity
    @activity = current_user.activities.find(params[:id])
  end
end
