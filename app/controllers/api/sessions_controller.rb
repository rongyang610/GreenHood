class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        if currentUser
            logout!
            render json: {}
        else
            render json: ["No user is logged in"], status: 404
        end
    end
end