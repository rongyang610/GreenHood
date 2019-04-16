class Api::TradeHistoriesController < ApplicationController
  def index
    @trade_histories = User.find()
  end

  def create
    
  end

  private
  def trade_histories_params
    params.require(:trade_history).permit(:user_id, :crypto_sym, :crypto_amount, :buy_price, :sell_price)
  end
end