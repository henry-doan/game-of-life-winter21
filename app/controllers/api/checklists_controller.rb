class Api::ChecklistsController < ApplicationController
  before_action :set_task
  before_action :set_checklist, only: [:show, :update, :destroy]
  
  def index
    render json: @task.checklists
  end

  def show
    render json: @checklist
  end

  def create 
    @checklist = @task.checklists.new(checklist_params)
    if @checklist.save
      render json: @checklist
    else 
      render json: { errors: @checklist.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @checklist.update(checklist_params)
      render json: @checklist
    else
      render json: { errors: @checklist.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @checklist.destroy
    render json: { message: "Checklist deleted."}
  end

  private
  def checklist_params
    params.require(:checklist).permit(:name, :complete)
  end
  
  def set_task
    @task = Task.find(params[:task_id])
  end

  def set_checklist
    @checklist = @task.checklists.find(params[:id])
  end
end
