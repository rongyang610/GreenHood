class User < ApplicationRecord
    #prefig
    validates :password_digest, :fname, :lname, :portfolio_value, :buy_power, presence: true
    validates :email, :username, :session_token, uniqueness: true, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save
        self.session_token
    end

    def self.find_by_credentials_username(username, password)
        user = User.where('lower(username) = ?', username.downcase).first
        user && user.is_password?(password) ? user : nil
    end

    def self.find_by_credentials_email(email, password)
        user = User.where('lower(email) = ?', email.downcase).first
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end
    
end