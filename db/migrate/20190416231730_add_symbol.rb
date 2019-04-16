class AddSymbol < ActiveRecord::Migration[5.2]
  def change
    add_column :trade_histories, :crypto_sym, :string, null: false
    remove_column :trade_histories, :buy_price
    remove_column :trade_histories, :sell_price
    add_column :trade_histories, :buy_price, :float
    add_column :trade_histories, :sell_price, :float
  end
end
