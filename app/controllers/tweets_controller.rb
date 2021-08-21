class TweetsController < ApplicationController
    before_action :authenticate, only: [:create, :destroy, :index]

    def index
        tweets = Tweet.all
        render json: tweets
    end 

    def create
        tweet = Tweet.create(sub_params)
        # byebug
        if tweet.valid?
            render json: tweet, status: :created
        else
            render json: {errors: tweet.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        # byebug
        tweet = Tweet.find_by(id: params[:id])
        tweet.destroy
        render json: tweet, status: :ok
    end


private
    def sub_params
        params.permit(:tweet, :user_id)
    end

    
end

