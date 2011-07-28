#encoding: utf-8
class PagesController < ApplicationController
  def home
    @title = "Дизайнер"
  end

  def about
    @title = "ab"
  end

end
