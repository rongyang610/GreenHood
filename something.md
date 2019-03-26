{
    entities:{
        cryptos: {
            1: {
                id: 1,
                watchlist_id:[1,2,3,4,5,7],
                name: "Bitcoin",
                symbol: "BTC",
                price: 3976.94,
                change: "-$45.09",
                perc_change: "-1.12%"
            },
            2: {
                id: 2,
                watchlist_id:[2],            
                name: "Ethereum Classic",
                symbol: "ETC",
                price: 4.80,
                change: "+$0.20"
                perc_change: "+4.34%"
            }
        },
        watchlists: {
            1: {
                id: 1,
                user_id: 1
            },
            2: {
                id: 2,
                user_id: 4
            }
            3: {
                id: 3,
                user_id: 3
            },
        },
        trades: {
            1:{
                id: 1,
                user_id: 1,
                crypto_id: 1,
                buy_price_per_crypto: 3977.60,
                sell_price_per_crypto: null,
                crypto_amount: 0.34123418
            },
            2:{
                id: 2,
                user_id: 1,
                crypto_id: 1,
                buy_price_per_crypto: 4001.33,
                sell_price_per_crypto: null,
                crypto_amount: 0.54234589
            },
            3:{
                id: 3,
                user_id: 1,
                crypto_id: 1,
                buy_price_per_crypto: null,
                sell_price_per_crypto: 4223.99,
                crypto_amount: 0.88358007
            }
        },
        users: {
            1: {
                id: 1,
                fname: "JJ",
                lname: "Yang",
                email: "jjisthebest@thebest.com"
            }
            2: {
                id: 2,
                fname: "George",
                lname: "Liu",
                email: "georgeisntthebest@theworst.com"
            }
        }
    },
    ui: {
        loading: true/false
    },
    errors: {
        login: ["Incorrect email or password"],
        crypto_buy_button: ["Insufficient funds"],
        crypto_sell_button: ["Insufficient amount of coins"]
    },
    session: { currentUserId: 2 }
}

