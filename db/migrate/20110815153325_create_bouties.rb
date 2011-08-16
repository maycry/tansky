class CreateBouties < ActiveRecord::Migration
  def self.up
    create_table :bouties do |t|
      t.string :name
      t.string :pic
      t.text :description
      t.string :link
      t.string :type

      t.timestamps
    end
  end

  def self.down
    drop_table :bouties
  end
end
