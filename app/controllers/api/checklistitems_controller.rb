class Api::ChecklistitemsController < ApplicationController
  before_action :set_checklist
  before_action :set_checklistitem, only: [:show, :update, :destroy]
  
  def index
    render json: @checklist.checklistitems
  end

  def show
    render json: @checklistitem
  end

  def create 
    @checklistitem = @checklist.checklistitems.new(checklistitem_params)
    if @checklistitem.save
      render json: @checklistitem
    else 
      render json: { errors: @checklistitem.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @checklistitem.update(checklistitem_params)
      render json: @checklistitem
    else
      render json: { errors: @checklistitem.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @checklistitem.destroy
    render json: { message: "Checklist Item deleted."}
  end

  private
  def checklistitem_params
    params.require(:checklistitem).permit(:name)
  end
  
  def set_checklist
    @checklist = Checklist.find(params[:checklist_id])
  end

  def set_checklistitem
    @checklistitem = @checklist.checklistitems.find(params[:id])
  end
end

