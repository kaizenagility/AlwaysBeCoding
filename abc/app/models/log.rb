class Log < ApplicationRecord
  belongs_to :category
  belongs_to :user, through: :category
end
