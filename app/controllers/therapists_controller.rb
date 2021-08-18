class TherapistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    before_action :authenticate, only: [:index]


    def index
        therapists = Therapist.all
        render json: therapists
    end 


private
    def record_not_found
        render json: {error: "Therapist not found"}, status: :not_found
    end 


end
