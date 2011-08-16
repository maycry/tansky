#encoding: utf-8
class BoutiesController < ApplicationController
  before_filter :authenticate, :except => [:index]
  # GET /bouties
  # GET /bouties.xml
  def index
    @bouties_use = Bouty.find_all_by_bouty_type("use");
    @bouties_read = Bouty.find_all_by_bouty_type("read");

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @bouties }
    end
  end

  # GET /bouties/1
  # GET /bouties/1.xml
  def show
    @bouty = Bouty.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @bouty }
    end
  end

  # GET /bouties/new
  # GET /bouties/new.xml
  def new
    @bouty = Bouty.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @bouty }
    end
  end

  # GET /bouties/1/edit
  def edit
    @bouty = Bouty.find(params[:id])
  end

  # POST /bouties
  # POST /bouties.xml
  def create
    @bouty = Bouty.new(params[:bouty])

    respond_to do |format|
      if @bouty.save
        format.html { redirect_to(@bouty, :notice => 'Bouty was successfully created.') }
        format.xml  { render :xml => @bouty, :status => :created, :location => @bouty }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @bouty.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /bouties/1
  # PUT /bouties/1.xml
  def update
    @bouty = Bouty.find(params[:id])

    respond_to do |format|
      if @bouty.update_attributes(params[:bouty])
        format.html { redirect_to(@bouty, :notice => 'Bouty was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @bouty.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /bouties/1
  # DELETE /bouties/1.xml
  def destroy
    @bouty = Bouty.find(params[:id])
    @bouty.destroy

    respond_to do |format|
      format.html { redirect_to(bouties_url) }
      format.xml  { head :ok }
    end
  end
end
