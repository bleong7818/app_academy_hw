class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password_digest, presence: {message: 'Password can\'t be blank'}
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :username, :session_token, uniqueness: true
    before_validation :ensure_session_token


    attr_reader :password


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

    end

    def self.generate_session_token
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def self.reset_session_token

    end

    def self.ensure_session_token

    end

    def password=(password)

    end

end
