# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_20_191930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "crypto_watchlists", force: :cascade do |t|
    t.integer "crypto_id", null: false
    t.integer "watchlist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["crypto_id"], name: "index_crypto_watchlists_on_crypto_id", unique: true
    t.index ["watchlist_id"], name: "index_crypto_watchlists_on_watchlist_id", unique: true
  end

  create_table "cryptos", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "symbol"
  end

  create_table "histories", force: :cascade do |t|
    t.integer "crypto_id", null: false
    t.float "price", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["crypto_id"], name: "index_histories_on_crypto_id", unique: true
  end

  create_table "trade_histories", force: :cascade do |t|
    t.integer "crypto_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "crypto_sym", null: false
    t.float "buy_price"
    t.float "sell_price"
    t.integer "user_id"
    t.index ["user_id"], name: "index_trade_histories_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.float "portfolio_value", null: false
    t.float "buy_power", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname", unique: true
    t.index ["lname"], name: "index_users_on_lname", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "watchlist_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "crypto_sym"
    t.index ["crypto_sym"], name: "index_watchlist_items_on_crypto_sym"
    t.index ["user_id"], name: "index_watchlist_items_on_user_id"
  end

end
