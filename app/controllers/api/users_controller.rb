class Api::UsersController < ApplicationController
  before_action :authenticate_user!

    def update
      user = User.find(params[:id])
      user.name = params[:name] ? params[:name] : user.name 
      user.email = params[:email] ? params[:email] : user.email
      user.image = params[:image] ? params[:image] : user.image
      user.points = params[:points] ? params[:points] : user.points
      user.levels = params[:levels] ? params[:levels] : user.levels
    end

    def update_points
      incomming_points = params[:points]
      current_user.points = incomming_points
      if current_user.save 
        render json: current_user
      else
        render json: { errors: current_user.errors }, status: :unproccessable_entity 
      end
    end
  end
