module ApplicationHelper
  def menu(item_name)
    current_url = request.url
    url_parts = current_url.split("/");
    parts_count = url_parts.size
    
    return if url_parts[3] != 'portfolio'
    
    if parts_count == 4
      return "<li><span>#{item_name}</span></li>".html_safe
    elsif parts_count == 5
      return "<li>#{link_to item_name, portfolio_path, :class => "active"}<span>#{@article.name}</span></li>".html_safe
    else
      return "<li>#{link_to item_name, portfolio_path}</li>".html_safe
    end
  end
  
end
