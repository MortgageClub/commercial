class Checklist < ApplicationRecord
  belongs_to :loan
  has_one :document

  enum checklist_type: {
    upload: "upload",
    check_email: "check_email"
  }

  enum status: {
    pending: "pending",
    done: "done"
  }
end
