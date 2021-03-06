class BandsController < ApplicationController
    
    def index
        @bands = Band.all
        render :index
    end

    def new
        @band = Band.new
        render :new
    end

    def create
        @band = Band.new(band_params)
        debugger
        if @band.save
            redirect_to band_url(@band.id)
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end

    def show
        @band = Band.find(params[:id])
        render :show
    end

    def destroy
        @band = Band.find(params[:id])
        @band.destroy
        redirect_to bands_url
    end

    def update
        @band = Band.find(params[:id])
        debugger
        if @band.update(band_params)
            redirect_to band_url(@band.id)
        else
            flash.now[:errors] = @band.errors.full_messages
        end
    end

    def edit
        @band = Band.find_by(id: params[:id])
        render :edit
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
