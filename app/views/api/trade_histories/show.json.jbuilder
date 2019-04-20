json.set! @trade_history.id do
  json.extract! @trade_history, :id, :user_id, :crypto_amount, :crypto_sym, :buy_price, :sell_price, :created_at
end