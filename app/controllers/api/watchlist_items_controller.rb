class Api::WatchlistItemsController < ApplicationController

  def index
    @watchlist_items = WatchlistItem.where(user_id: params[:user_id])
    render 'api/watchlist_items/index'
  end
  
  def create
    @watchlist_item = WatchlistItem.new(watchlist_item_params)
    if @watchlist_item.save
      render 'api/watchlist_items/show'
    else
      render json: @watchlist_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @watchlist_item = WatchlistItem.find_by( id: params[:id])
    @watchlist_item.destroy
    render 'api/watchlist_items/show'
  end

  private
  def watchlist_item_params
      params.require(:watchlistItem).permit(:user_id, :crypto_sym)
  end
end