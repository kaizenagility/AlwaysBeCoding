class Category < ApplicationRecord
  has_many :logs
  belongs_to :user
end
