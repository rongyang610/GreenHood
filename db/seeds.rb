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
demoUser = User.create!(fname:'Demo', lname: 'Demo', username: 'demo', email: 'demo@gmail.com', password: 'password', portfolio_value: 0.00, buy_power: 5000.00, created_at:'2019-04-01T08:58:34.797Z' )
demoUserT01 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 1, sell_price: 0, created_at: '2019-04-01T08:58:34.797Z' )
demoUserT02 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 4752.05, sell_price: 0, created_at: '2019-04-02T08:58:34.797Z' )
demoUserT03 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 0, sell_price: 5013.04, created_at: '2019-04-03T08:58:34.797Z' )
demoUserT04 = TradeHistory.create!(user_id: 1, crypto_amount: 2, crypto_sym: 'BTC', buy_price: 10099.52, sell_price: 0, created_at: '2019-04-04T12:58:34.797Z' )
demoUserT05 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 155.55, sell_price: 0, created_at: '2019-04-04T08:58:34.797Z' )
demoUserT06 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 86.60, sell_price: 0, created_at: '2019-04-05T08:58:34.797Z' )
demoUserT07 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 0, sell_price: 90.37, created_at: '2019-04-07T08:58:34.797Z' )
demoUserT08 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 5269.97, sell_price: 0, created_at: '2019-04-08T08:58:34.797Z' )
demoUserT09 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 87.37, sell_price: 0, created_at: '2019-04-09T08:58:34.797Z' )
demoUserT10 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 0, sell_price: 90.20, created_at: '2019-04-10T08:58:34.797Z' )
demoUserT11 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 5241.44, sell_price: 0, created_at: '2019-04-11T08:58:34.797Z' )
demoUserT12 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 0, sell_price: 5071.07, created_at: '2019-04-13T08:58:34.797Z' )
demoUserT13 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 163.83, sell_price: 0, created_at: '2019-04-14T08:58:34.797Z' )
demoUserT14 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 164.88, sell_price: 0, created_at: '2019-04-14T08:58:34.797Z' )
demoUserT15 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 0, sell_price: 168.42, created_at: '2019-04-14T08:58:34.797Z' )
demoUserT16 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 83.52, sell_price: 0, created_at: '2019-04-15T08:58:34.797Z' )
demoUserT17 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 78.68, sell_price: 0, created_at: '2019-04-16T08:58:34.797Z' )
demoUserT18 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 79.66, sell_price: 0, created_at: '2019-04-17T08:58:34.797Z' )
demoUserT19 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 79.65, sell_price: 0, created_at: '2019-04-17T08:58:34.797Z' )
demoUserT21 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'LTC', buy_price: 79.51, sell_price: 0, created_at: '2019-04-17T08:58:34.797Z' )
demoUserT22 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 167.62, sell_price: 0, created_at: '2019-04-17T08:58:34.797Z' )
demoUserT23 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 0, sell_price: 171.89, created_at: '2019-04-17T08:58:34.797Z' )
demoUserT24 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 0, sell_price: 5209.04, created_at: '2019-04-18T08:58:34.797Z' )
demoUserT25 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 0, sell_price: 174.93, created_at: '2019-04-18T08:58:34.797Z' )
demoUserT26 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'BTC', buy_price: 0, sell_price: 5276.46, created_at: '2019-04-18T08:58:34.797Z' )
demoUserT27 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 172.69, sell_price: 0, created_at: '2019-04-19T08:58:34.797Z' )
demoUserT28 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 173.41, sell_price: 0, created_at: '2019-04-19T08:58:34.797Z' )
demoUserT29 = TradeHistory.create!(user_id: 1, crypto_amount: 1, crypto_sym: 'ETH', buy_price: 174.42, sell_price: 0, created_at: '2019-04-20T08:58:34.797Z' )
# demoWatchlist = WatchlistItem.create!(user_id: 1, crypto_sym: 'BTC')