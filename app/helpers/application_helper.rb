#encoding: utf-8
module ApplicationHelper
  def menu(item_name, item_alias)
    current_url = request.url
    url_parts = current_url.split("/")
    url_parts.slice!(0..2);
    parts_count = url_parts.size
    
    if url_parts[0] == item_alias.delete("/")
      return "<li><span>#{item_name}</span></li>".html_safe  if parts_count == 1
      return "<li>#{link_to item_name, item_alias, :class => "active"}<span>#{@article.name}</span></li>".html_safe if parts_count == 2
      return "<li>#{link_to item_name, item_alias, :class => "active"}#{link_to @article.name, work_path(@article.alias), :class => "active", :style => "letter-spacing:0"}<span>Процесс</span></li>".html_safe if parts_count == 3
    else
      return "<li>#{link_to item_name, item_alias}</li>".html_safe
    end
  end
  
end
