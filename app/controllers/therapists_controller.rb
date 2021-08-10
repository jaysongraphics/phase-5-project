class TherapistsController < ApplicationController


    def index
        therapists = Therapists.all
        render json: therapists
    end 


end
