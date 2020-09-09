class UserMailer < ApplicationMailer
    default from 'ninetyninecatslover@example.com'

    def welcome_email(user)
        @user = user
        @url = "http://localhost3000/session/new"
        mail(to: user.email, subject: 'Welcome to 99 Cats!')
    end

    
end
