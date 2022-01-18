class Api::HabitsController < ApplicationController
  before_action :set_habit, only: [:show, :update, :destroy]

  def index
    render json: current_user.habit
  end

  def show
    render json: @habit
  end

  def create 
    @habit = current_user.habits.new(habit_params)
    if @habit.save
      render json: @habit
    else 
      render json: { errors: @habit.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @habit.update(habit_params)
      render json: @habit
    else
      render json: { errors: @habit.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @habit.destroy
    render json: { message: "Habit deleted."}
  end

  private
  def habit_params
    params.require(:habit).permit(:title, :notes, :add_sub, :dif_level, :tags, :frequency, :desc)
  end

  def set_habit
    @habit = current_user.habits.find(params[:id])
  end
end
