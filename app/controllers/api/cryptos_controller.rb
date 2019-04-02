
class Api::CryptosConroller < ApplicationController
  def show
    @crypto = Crypto.find(params[:id])
  end

  def create
  end

  def index
    @cryptos = Crypto.all
  end
end