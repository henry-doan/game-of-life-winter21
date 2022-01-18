class Api::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]
  
    def index
      render json: current_user.task
    end
  
    def show
      render json: @task
    end
  
    def create 
      @task = current_user.tasks.new(task_params)
      if @task.save
        render json: @task
      else 
        render json: { errors: @task.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @task.update(task_params)
        render json: @task
      else
        render json: { errors: @task.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @task.destroy
      render json: { message: "Task deleted."}
    end
  
    private
    def task_params
      params.require(:task).permit(:title, :comment, :add_sub, :diff_levels, :tags, :frequency)
    end
  
    def set_task
      @task = current_user.tasks.find(params[:id])
    end
  end




