class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :surname
      t.string :email
      t.string :password_digest
      t.string :bgcolor
      t.string :textcolor
      t.string :fontsize
      t.string :wordspacing
      t.string :paragraphspacing
      t.boolean :highlights

      t.timestamps null: false
    end
  end
end
