#encoding: utf-8
class ExperimentsController < ApplicationController
  def index
    @images = Dir.glob("public/images/experiments/*")
    draw_images
  end
  
  protected
  
    def draw_images
      x=rand(5)
      y=0
      @images_stack = ""
      
      @images.each do |image|
        dim = FastImage.size(image);
        imageWidth = dim[0]/3
        imageHeight = dim[1]/3
        image.slice!("public/")
        if x<50
          @images_stack += "<img src=#{image} style='width:#{imageWidth}px; height:#{imageHeight}px; left:#{x}%; top:#{y}px'>"
        else
          @images_stack += "<img src=#{image} style='width:#{imageWidth}px; height:#{imageHeight}px; right:#{(100-x)<0 ? rand(5) : 100-x}%; top:#{y}px'>"
        end
        
        if x>90
          x=rand(5)
          y+=250+rand(50)
        else
          x+=rand(5)+25
          x+=rand(5)+20 if ((35..60) === x)
          y+=50-rand(100)
        end
      end
    end
end