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
  end
