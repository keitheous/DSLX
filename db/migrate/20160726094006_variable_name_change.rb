class VariableNameChange < ActiveRecord::Migration
  def change
    remove_column :users, :fontsize, :string
    add_column :users, :fonttype, :string
    remove_column :users, :textcolor, :string
    add_column :users, :fontcolor, :string
    remove_column :users, :paragraphspacing, :string
    add_column :users, :linespace, :string
    remove_column :users, :wordspacing, :string
    add_column :users, :textspace, :string
    remove_column :users, :highlights, :boolean
    add_column :users, :fontsize, :string
  end
end
