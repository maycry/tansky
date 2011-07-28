class PagesController < ApplicationController
  def home
    @title = "Танский Юрий — веб-дизайнер"
  end

  def about
    @title = "Обо мне"
  end

end
