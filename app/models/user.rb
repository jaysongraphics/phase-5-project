class User < ApplicationRecord
    has_many :appointments
    has_many :therapist, through: :appointments


    #todo the below will allow us to the the following two things
    #password "123" => password_digest "erret44rrffvd24rrfet3"
    #user.authenticate("123")
    has_secure_password

    #todo the below will allow us to validate data
    #todousername
    validates :username, presence: true, uniqueness: { case_sensitive: false}

    #todo name

    #todo img

    # validates_length_of :first_name, :last_name, maximum: 150
   #todo birthday
   validates :birthday, presence: true


    #todo email
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP


    #todo password
    validates :password, length: { minimum: 3}
    validates :password, presence: true
end
