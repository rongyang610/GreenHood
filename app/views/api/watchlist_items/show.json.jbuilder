json.set! @watchlist_item.id do 
  json.extract @watchlist_item, :id, :user_id, :crypto_id
end