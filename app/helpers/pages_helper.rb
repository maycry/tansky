module PagesHelper
  def get_class(article_number, article_count)
    case article_number
      when 0 
	      "center"
      when 1 
	      "left"
      when article_count-1 
	      "right"
      else "out"
    end 
  end
end
