#encoding: utf-8
class ArticlesController < ApplicationController
  before_filter :authenticate, :except => [:index, :show, :show_process]
  
  def show_process
    @article = Article.where(:alias => params[:alias]).first
    
    @title = @article.name

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @article }
    end
    
  end
  
  def index 
    @title = "Портфолио"

    if params[:alias]
      @article = Article.where(:alias => params[:alias]).first
    else
      @articles = Article.order("created_at DESC").all
    end

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.xml
  def show
    @article = Article.where(:alias => params[:alias]).first
    
    @other_articles = Article.order("created_at DESC").all
    
    @title = @article.name

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @article }
    end
  end

  # GET /articles/new
  # GET /articles/new.xml
  def new
    @article = Article.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @article }
    end
  end

  # GET /articles/1/edit
  def edit
    @article = Article.where(:alias => params[:alias]).first
  end

  # POST /articles
  # POST /articles.xml
  def create
    @article = Article.new(params[:article])

    respond_to do |format|
      if @article.save
        format.html { redirect_to(work_path(@article.alias), :notice => 'Article was successfully created.') }
        format.xml  { render :xml => @article, :status => :created, :location => @article }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @article.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /articles/1
  # PUT /articles/1.xml
  def update
    @article = Article.find(params[:id])

    respond_to do |format|
      if @article.update_attributes(params[:article])
        format.html { redirect_to(work_path(@article.alias), :notice => 'Article was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @article.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.xml
  def destroy
    @article = Article.where(:alias => params[:alias]).first
    @article.destroy

    respond_to do |format|
      format.html { redirect_to(portfolio_path) }
      format.xml  { head :ok }
    end
  end
  
 
  
   private

    def authenticate
      deny_access unless current_user
    end
    
    def deny_access
    redirect_to root_path, :notice => "Fuck off"
    end
end
