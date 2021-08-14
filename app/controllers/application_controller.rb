class ApplicationController < ActionController::API
  include ActionController::Cookies


    def authenticate
        @current_user = AuthorizeRequest.new(request.headers).user
        if @current_user.nil?
          render json: { errors: ["Not Authorized"] }, status: :unauthorized

        end
    end
end
