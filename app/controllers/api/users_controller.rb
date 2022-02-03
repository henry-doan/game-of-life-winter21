class Api::UsersController < ApplicationController
  before_action :authenticate_user!

    def update
      user = User.find(params[:id])
      user.name = params[:name] ? params[:name] : user.name 
      user.email = params[:email] ? params[:email] : user.email
      user.image = params[:image] ? params[:image] : user.image
      user.note = params[:note] ? params[:note] : user.note
      # user.points = params[:points] ? params[:points] : user.points
      # user.levels = params[:levels] ? params[:levels] : user.levels
      if user.save 
        render json: user 
      else 
        render json: { errors: user.errors }, status: :unprocessable_entity
      end
    end

    def update_points
      incoming_points = params[:points]
      current_user.points = incoming_points
      if current_user.save 
        render json: current_user
      else
        render json: { errors: current_user.errors }, status: :unprocessable_entity 
      end
    end
  end
