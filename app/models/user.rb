class User < ApplicationRecord
    has_many :appointments
    has_many :therapist, through: :appointments

    has_many :reviews
    has_many :therapist, through: :reviews

    has_many :tweets
    has_one_attached :avatar
    
    has_many :messages
    has_many :chats
#todo the below will allow us to the the following two things
    #password "123" => password_digest "erret44rrffvd24rrfet3"
    #user.authenticate("123")
    has_secure_password

#todo the below will allow us to validate data
#todousername
    validates :username, presence: true, uniqueness: { case_sensitive: false}

#todo password
    validates :password, length: { minimum: 3}
    validates :password, presence: true

#todo name
validates_length_of :first_name, :last_name, maximum: 50, minimum: 3
validates :first_name, :last_name, presence: true, uniqueness: { case_sensitive: false}

#todo birthday
# 1986-06-17
validates :birthday, presence: true

# inclusion: { in: 1900..Date.today.year },
# format: { 
#   with: /(19|20)\d{2}/i, 
#   message: "you have to be 18 years old or older"
# }

#todo email
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

end
