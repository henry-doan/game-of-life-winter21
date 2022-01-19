class Api::ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show,]

  def index
    render json: current_user.activities
  end

  def show
    render json: @activity
  end

  private
  def activity_params
    params.require(:activity).permit(:activity_type, :title)
  end

  def set_activity
    @activity = current_user.activities.find(params[:id])
  end
end
