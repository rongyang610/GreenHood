@trade_histories.each do |trade|
  json.set! trade_histories.id do
  json.extract! trade, :id, :user_id, :crypto_amount, :crypto_sym, :buy_price, :sell_price, :created_at
end