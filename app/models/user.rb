class User < ApplicationRecord
    has_many :appointments
    has_many :therapist, through: :appointments


    #todo the below will allow us to the the following two things
    #password "123" => password_digest "erret44rrffvd24rrfet3"
    #user.authenticate("123")
    has_secure_password

    #todo the below will allow us to validate data
    validates :username, presence: true, uniqueness: { case_sensitive: false}
    validates :password_digest, length: { minimum: 3}
    # validates :password_digest, presence: true, uniqueness: true
end
