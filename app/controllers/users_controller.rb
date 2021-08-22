class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authenticate, only: [:me, :update, :index]

    def index
        users = User.all
        render json: users
    end 

    # POST /signin
    def signin
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            token = JWT.encode({user_id: user.id}, 'secret', 'HS256')
            render json: {user: UserSerializer.new(user), token: token}
        else
            render json: {"error": "invalid username or password"}, status: :not_found
        end
    end 

    # POST /signup
    
    def signup
        newUser = User.create(user_params)
        if newUser.valid?
            token = JWT.encode({ user_id: newUser.id }, 'secret', 'HS256')
            render json: { user: UserSerializer.new(newUser), token: token }, status: :created
        else
            render json: { errors: newUser.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /me
     def me
        render json: @online_user
      end
    
      # PATCH /me
    def update
        byebug
        @online_user.update(
            image: params[:image], 
            first_name: params[:first_name], 
            last_name: params[:last_name], 
            birthday: params[:birthday], 
            username: params[:username], 
            email: params[:username] 
        )
        render json: @online_user
      end
    
private 
    def record_not_found
         render json: {error: "User not found"}, status: :not_found
    end 

    def user_params
        params.permit(:image, :avatar, :first_name, :last_name, :birthday, :username, :email, :password)
    end 

end