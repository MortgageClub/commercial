# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170123032032) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "admins", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "agents", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.uuid     "loan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loan_id"], name: "index_agents_on_loan_id", using: :btree
  end

  create_table "assigned_loan_members", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "loan_id"
    t.uuid     "loan_member_id"
    t.uuid     "loan_member_title_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.index ["loan_id"], name: "index_assigned_loan_members_on_loan_id", using: :btree
    t.index ["loan_member_id"], name: "index_assigned_loan_members_on_loan_member_id", using: :btree
    t.index ["loan_member_title_id"], name: "index_assigned_loan_members_on_loan_member_title_id", using: :btree
  end

  create_table "blogs", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.string   "category"
    t.string   "short_description"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "slug"
    t.datetime "published_date"
    t.uuid     "user_id"
    t.index ["slug"], name: "index_blogs_on_slug", unique: true, using: :btree
    t.index ["user_id"], name: "index_blogs_on_user_id", using: :btree
  end

  create_table "borrowers", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "mobile_phone"
    t.string   "phone"
    t.string   "ext"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.integer  "credit_score"
    t.decimal  "net_worth",    precision: 13, scale: 2
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
  end

  create_table "bussinesses", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "name"
    t.integer  "years"
    t.string   "ein"
    t.string   "industry"
    t.string   "state"
    t.integer  "number_of_employees"
    t.string   "entity_type"
    t.string   "principal"
    t.string   "nature"
    t.uuid     "user_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["user_id"], name: "index_bussinesses_on_user_id", using: :btree
  end

  create_table "checklists", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "loan_id"
    t.string   "checklist_type"
    t.datetime "due_date"
    t.string   "name"
    t.string   "information"
    t.string   "status"
    t.string   "document_description"
    t.uuid     "document_type_id"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.index ["loan_id"], name: "index_checklists_on_loan_id", using: :btree
  end

  create_table "closings", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "loan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loan_id"], name: "index_closings_on_loan_id", using: :btree
  end

  create_table "comments", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "blog_id"
    t.string   "name"
    t.string   "email"
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["blog_id"], name: "index_comments_on_blog_id", using: :btree
  end

  create_table "document_types", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "category"
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "attachment_file_name"
    t.string   "attachment_content_type"
    t.integer  "attachment_file_size"
    t.datetime "attachment_updated_at"
    t.uuid     "document_type_id"
    t.uuid     "documentable_id"
    t.string   "documentable_type"
    t.string   "description"
    t.string   "original_filename"
    t.uuid     "checklist_id"
    t.string   "token"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["document_type_id"], name: "index_documents_on_document_type_id", using: :btree
  end

  create_table "guarantors", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "loan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loan_id"], name: "index_guarantors_on_loan_id", using: :btree
  end

  create_table "invited_referrals", force: :cascade do |t|
    t.uuid     "user_id"
    t.string   "email",                                     default: ""
    t.string   "name",                                      default: ""
    t.datetime "joined_at"
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
    t.string   "phone"
    t.decimal  "bonus",            precision: 13, scale: 2
    t.decimal  "origination_fees", precision: 13, scale: 2
    t.index ["user_id"], name: "index_invited_referrals_on_user_id", using: :btree
  end

  create_table "loan_faqs", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "question"
    t.text     "answer"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "order_number"
  end

  create_table "loan_member_titles", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loan_members", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "phone_number"
    t.string   "individual_bre"
    t.string   "company_name"
    t.string   "company_address"
    t.string   "company_phone_number"
    t.string   "company_bre"
    t.text     "email_signature"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "loans", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.decimal  "amount"
    t.uuid     "borrower_id"
    t.datetime "created_at",                                    null: false
    t.datetime "updated_at",                                    null: false
    t.string   "purpose"
    t.string   "status"
    t.string   "note"
    t.decimal  "ltv",                  precision: 13, scale: 5
    t.integer  "interest_rate_spread"
    t.string   "interest_rate_index"
    t.integer  "fixed_rate_period"
    t.integer  "term"
    t.integer  "amortization"
    t.string   "prepayment_premium"
    t.decimal  "origination_fees",     precision: 13, scale: 2
    t.decimal  "processing_fees",      precision: 13, scale: 2
    t.decimal  "underwritting_fees",   precision: 13, scale: 2
    t.decimal  "appraisal_fees",       precision: 13, scale: 2
    t.decimal  "phase_1_fees",         precision: 13, scale: 2
    t.decimal  "site_visit_expense",   precision: 13, scale: 2
    t.decimal  "legal_expense",        precision: 13, scale: 2
    t.decimal  "survey_fees",          precision: 13, scale: 2
    t.decimal  "net_operating_income", precision: 13, scale: 2
    t.decimal  "dcsr",                 precision: 13, scale: 2
    t.string   "blackline_note"
    t.string   "headline_1"
    t.string   "headline_2"
    t.boolean  "is_showed_guide"
    t.string   "prepared_loan_token"
    t.index ["borrower_id"], name: "index_loans_on_borrower_id", using: :btree
  end

  create_table "properties", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.decimal  "purchase_price",     precision: 13, scale: 2
    t.string   "property_type"
    t.string   "title"
    t.decimal  "land_size",          precision: 10, scale: 2
    t.integer  "building_size"
    t.integer  "number_of_units"
    t.integer  "year_build"
    t.integer  "occup"
    t.uuid     "loan_id"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.string   "full_address"
    t.decimal  "estimated_value",    precision: 13, scale: 2
    t.decimal  "appraised_value",    precision: 13, scale: 2
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["loan_id"], name: "index_properties_on_loan_id", using: :btree
  end

  create_table "quotes", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid     "loan_id"
    t.string   "status"
    t.string   "name"
    t.string   "lender"
    t.decimal  "interest_rate",     precision: 13, scale: 5
    t.decimal  "ltv",               precision: 13, scale: 5
    t.integer  "year_term"
    t.integer  "year_amortization"
    t.decimal  "payment",           precision: 13, scale: 2
    t.decimal  "loan_amount",       precision: 13, scale: 2
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "headline"
    t.index ["loan_id"], name: "index_quotes_on_loan_id", using: :btree
  end

  create_table "rates", force: :cascade do |t|
    t.string   "table_name"
    t.string   "rate_type"
    t.decimal  "today",         precision: 13, scale: 5
    t.decimal  "yesterday",     precision: 13, scale: 5
    t.decimal  "one_week_ago",  precision: 13, scale: 5
    t.decimal  "one_month_ago", precision: 13, scale: 5
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
  end

  create_table "sent_emails", force: :cascade do |t|
    t.string   "token"
    t.string   "receiver"
    t.uuid     "user_id"
    t.uuid     "loan_id"
    t.string   "subject"
    t.text     "content"
    t.datetime "opened_at"
    t.datetime "clicked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "provider",               default: "email", null: false
    t.string   "uid",                    default: "",      null: false
    t.string   "encrypted_password",     default: "",      null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,       null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "name"
    t.string   "nickname"
    t.string   "image"
    t.string   "email"
    t.json     "tokens"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name"
    t.string   "last_name"
    t.uuid     "subjectable_id"
    t.string   "subjectable_type"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "referral_code"
    t.string   "referred_code"
    t.string   "author_bio"
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["subjectable_type", "subjectable_id"], name: "index_users_on_subjectable_type_and_subjectable_id", using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

  add_foreign_key "agents", "loans"
  add_foreign_key "assigned_loan_members", "loan_member_titles"
  add_foreign_key "assigned_loan_members", "loan_members"
  add_foreign_key "assigned_loan_members", "loans"
  add_foreign_key "blogs", "users"
  add_foreign_key "bussinesses", "users"
  add_foreign_key "checklists", "loans"
  add_foreign_key "closings", "loans"
  add_foreign_key "comments", "blogs"
  add_foreign_key "documents", "document_types"
  add_foreign_key "guarantors", "loans"
  add_foreign_key "invited_referrals", "users"
  add_foreign_key "loans", "borrowers"
  add_foreign_key "properties", "loans"
  add_foreign_key "quotes", "loans"
end
