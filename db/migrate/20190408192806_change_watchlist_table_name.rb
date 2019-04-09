class ChangeWatchlistTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :watchlists, :watchlist_items
  end
end
