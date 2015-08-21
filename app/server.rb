require "sinatra/base"
require "sinatra/cookies"

class Thermostat < Sinatra::Base

  helpers Sinatra::Cookies

  get '/' do
    erb :index
  end

  get '/setcookie/city/:city' do
    cookies[:city] = params[:city]
    erb :city 
  end

  get '/cookies/city' do
    erb :city
  end

  get '/setcookie/temp/:temp' do
    cookies[:temp] = params[:temp]
    erb :temp
  end

  get '/cookies/temp' do
    erb :temp
  end

  get '/setcookie/esm/:esm' do
    cookies[:esm] = params[:esm]
    erb :esm
  end

  get '/cookies/esm' do
    erb :esm
  end

  # start the server if ruby file executed directly
  run! if app_file == $PROGRAM_NAME
end

