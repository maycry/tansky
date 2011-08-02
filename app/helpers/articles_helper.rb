module ArticlesHelper
  def get_narticles(artnumber = 5)
    Article.find_all_by_onmain(true, :order => 'created_at DESC', :limit => artnumber )
  end
end
