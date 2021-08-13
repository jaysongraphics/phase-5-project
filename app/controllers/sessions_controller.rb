# class SessionsController < ApplicationController
#     before_action :authenticate, only: [:me, :update]

#     # # post/signin
#     # def create
#     #     user = User.find_by(username: params[:username])
#     #     if user && user.authenticate(params[:password])
#     #         token = JWT.encode({user_id: user.id}, 'my_secret', 'HS256')
#     #         # session[:user_id] = user.id
#     #         render json: {user: UserSerializer.new(user), token: token}
#     #     else
#     #         render json: {"error": "invalid username or password"}, status: :not_found
#     #     end
#     # end 


#     # def show
#     #     user = User.find_by(id: params[:user_id])
#     #     if user
#     #       render json: user
#     #     else
#     #       render json: { error: "Not authorized" }, status: :unauthorized
#     #     end
#     # end

#     # # delete /logout
#     # def destroy
#     #     session.delete :user_id
#     #     head :no_content
#     # end 

# # test

#     # POST /signin
#     def signin
#         user = User.find_by(username: params[:username])
#         if user && user.authenticate(params[:password])
#             token = JWT.encode.encode({ user_id: user.id })
#             render json: { user: UserSerializer.new(user), token: token }
#         else
#             render json: { errors: ["Invalid username or password"] }, status: :unauthorized
#         end
#     end

#     # POST /signup
#     def signup
#         newUser = User.create(user_params)
#         if newUser.valid?
#             token = JWT.encode.encode({ user_id: newUser.id })
#             render json: { user: UserSerializer.new(newUser), token: token }, status: :created
#         else
#             render json: { errors: newUser.errors.full_messages }, status: :unprocessable_entity
#         end
#     end

#     # GET /me
#     def me
#      render json: @current_user
#     end

#     # PATCH /me
#     def update
#         @current_user.update(bio: params[:bio], image: params[:image])
#         render json: @current_user
#     end

#         private 

#         def record_not_found
#             render json: {error: "User not found"}, status: :not_found
#         end 

#         def user_params
#             params.permit(:image, :first_name, :last_name, :username, :email, :password)
#         end 


# end 