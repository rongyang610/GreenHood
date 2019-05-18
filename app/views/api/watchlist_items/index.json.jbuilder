@watchlist_items.each do |watchlist_item|
  json.set! watchlist_item.crypto_sym do
    json.set! watchlist_item.crypto_sym do
      json.extract! watchlist_item, :id, :user_id, :crypto_sym
      json.set! :USD, 0
    end
  end
end