class UsersController < ApplicationController
  require 'open-uri'

  def index
  end

  def new
  end

  def create
    @user = User.new
    @user.firstname = params[:firstname]
    @user.surname = params[:lastname]
    @user.email = params[:email]
    @user.password = params[:password]
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/users'
    else
      redirect_to '/'
    end
  end

  def show
  end

  def search
  end

  def url
    @url = params[:url]
    parse_page = Nokogiri::HTML(open(@url))

    @header = parse_page.css('h1').text
    @content = parse_page.css('p').text
  end

end
