class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials_username(
            params[:user][:email],
            params[:user][:password]) || User.find_by_credentials_email(
                params[:user][:email],
                params[:user][:password])
        if @user
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