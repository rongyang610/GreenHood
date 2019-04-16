class RemoveCryptoIdFromWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :watchlist_items, :crypto_id
    add_column :watchlist_items, :crypto_sym, :string
    add_index :watchlist_items, :crypto_sym
  end
end
