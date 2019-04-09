class FixWatchlist < ActiveRecord::Migration[5.2]
  def change
    remove_index :watchlists, :user_id
    add_index :watchlists, :user_id
  end
end
