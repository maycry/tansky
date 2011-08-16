class FixBoutyTypeColumnName < ActiveRecord::Migration
  def self.up
     rename_column :bouties, :type, :bouty_type
  end

  def self.down
  end
end
