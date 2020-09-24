class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  validates :description, presence: true
  validates :ingredient_id, uniqueness: { scope: :cocktail_id, message: 'This ingredient has already been added to the cocktail' }

  delegate :name, to: :ingredient, prefix: true
  
end
