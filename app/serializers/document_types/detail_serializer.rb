module DocumentTypes
  class DetailSerializer < BaseSerializer
    attributes :name, :category

    def category
      object.category.titleize
    end
  end
end
