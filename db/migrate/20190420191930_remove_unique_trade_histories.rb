class RemoveUniqueTradeHistories < ActiveRecord::Migration[5.2]
  def change
    remove_column :trade_histories, :user_id
    add_column :trade_histories, :user_id, :integer
    add_index :trade_histories, :user_id
  end
end
