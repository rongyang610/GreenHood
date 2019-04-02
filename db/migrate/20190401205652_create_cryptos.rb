class CreateCryptos < ActiveRecord::Migration[5.2]
  def change
    create_table :cryptos do |t|
      t.string :name, null: false
      t.string :name, null: false
      t.timestamps
    end

    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.integer :crypto_id, null: false
      t.timestamps
    end

    create_table :crypto_watchlists do |t|
      t.integer :crypto_id, null: false
      t.integer :watchlist_id, null: false
      t.timestamps
    end

    create_table :histories do |t|
      t.integer :crypto_id, null: false
      t.float :price, null: false
      t.date :date, null:false
      t.timestamps
    end

    create_table :trade_histories do |t|
      t.integer :user_id, null: false
      t.integer :crypto_id, null: false
      t.float :buy_price, null: false
      t.float :sell_price, null: false
      t.integer :crypto_amount, null: false
      t.timestamps
    end

    add_index :watchlists, :user_id, unique:true
    add_index :watchlists, :crypto_id, unique:true
    add_index :crypto_watchlists, :crypto_id, unique:true
    add_index :crypto_watchlists, :watchlist_id, unique:true
    add_index :histories, :crypto_id, unique:true
    add_index :trade_histories, :user_id, unique:true
    add_index :trade_histories, :crypto_id, unique:true
  end
end
