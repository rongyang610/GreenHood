class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        @user.buy_power = 5000.00
        @user.portfolio_value = 0
        if @user.save
            WatchlistItem.create({
                user_id: @user.id, 
                crypto_sym: Crypto.find_by(symbol: 'BTC').symbol
            })
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        if (@user) && (current_user.id == @user.id) && (@user.update(buying_power: params[:buyingPower]))
           render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 406
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :fname, :lname, :password)
    end
end