json.set! @watchlist_item.crypto_sym do 
  json.extract! @watchlist_item, :id, :user_id, :crypto_sym
end