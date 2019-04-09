@watchlist_items.each do |item|
  json.set! item.id do 
    json.extract! item, :id. :user_id, :crypto_id
  end
end