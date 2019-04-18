class Api::TradeHistoriesController < ApplicationController
  def index
    @trade_histories = User.find()
  end

  def create
    @trade_history = TradeHistory.new(trade_histories_params)
    @trade_history.user_id = current_user.id
    if @trade_history.save!
      render 'api/trade_histories/show'
    else
      render json: @trade_history.errors.full_messages
    end
  end

  private
  def trade_histories_params
    params.require(:trade_history).permit(:user_id, :crypto_sym, :crypto_amount, :buy_price, :sell_price)
  end
end