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
        imageWidth = JPEG.new(image).width/3
        imageHeight = JPEG.new(image).height/3
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

class JPEG
  attr_reader :width, :height, :bits

  def initialize(file)
    if file.kind_of? IO
      examine(file)
    else
      File.open(file, 'rb') { |io| examine(io) }
    end
  end

private
  def examine(io)
    raise 'malformed JPEG' unless io.getc == 0xFF && io.getc == 0xD8

    class << io
      def readint; (readchar << 8) + readchar; end
      def readframe; read(readint - 2); end
      def readsof; [readint, readchar, readint, readint, readchar]; end
      def next
        c = readchar while c != 0xFF
        c = readchar while c == 0xFF
        c
      end
    end

    while marker = io.next
      case marker
        when 0xC0..0xC3, 0xC5..0xC7, 0xC9..0xCB, 0xCD..0xCF
          length, @bits, @height, @width, components = io.readsof
          raise 'malformed JPEG' unless length == 8 + components * 3
        when 0xD9, 0xDA:  break
        when 0xFE:        @comment = io.readframe
        when 0xE1:        io.readframe
        else              io.readframe
      end
    end
  end
end
