class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews
    end 

    def create
        rev = Review.create(sub_params)
        # byebug
        if rev.valid?
            render json: rev, status: :created
        else
            render json: {errors: rev.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # def destroy
    #     subs = Subscription.find_by(id: params[:id])
    #     subs.destroy
    # end

    private

    def sub_params
        params.permit(:user_id, :review, :therapist_id)
    end
end
