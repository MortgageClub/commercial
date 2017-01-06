class AddIsShowedGuideToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :is_showed_guide, :boolean
  end
end
