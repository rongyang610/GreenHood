class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials_username(
            params[:user][:email],
            params[:user][:password]) || User.find_by_credentials_email(
                params[:user][:email],
                params[:user][:password])
        if @user
            @ownedCoins = Hash.new(0)
            @user.trade_histories.each do |trade|
                if trade.buy_price != 0
                    @ownedCoins[trade.crypto_sym] += trade.crypto_amount
                elsif trade.sell_price != 0
                    @ownedCoins[trade.crypto_sym] -= trade.crypto_amount
                end
            end
            login!(@user)
            render 'api/users/show'
        else
            render json: [' Unable to log in with provided credentials.'], status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ["No user is logged in"], status: 404
        end
    end
end