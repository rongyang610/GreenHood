# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Crypto.destroy_all
User.destroy_all
WatchlistItem.destroy_all
crypto = Crypto.create!(symbol: 'BTC', name: 'Bitcoin')
demoUser = User.create!(fname:'Demo', lname: 'Demo', username: 'demo', email: 'demo@gmail.com', password: 'password', portfolio_value: 0.00, buy_power: 5000.00 )
# demoWatchlist = WatchlistItem.create!(user_id: 1, crypto_sym: 'BTC')