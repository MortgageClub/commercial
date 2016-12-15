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

ActiveRecord::Schema.define(version: 20161215101402) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "addresses", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "street_address"
    t.string   "street_address2"
    t.string   "city"
    t.string   "zip"
    t.string   "state"
    t.string   "unit_number"
    t.string   "full_text"
    t.string   "addressable_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.uuid     "addressable_id"
  end

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

  create_table "loan_faqs", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "question"
    t.text     "answer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loans", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.decimal  "down_payment"
    t.decimal  "amount"
    t.boolean  "is_under_contract"
    t.datetime "closing_date"
    t.text     "notes"
    t.uuid     "borrower_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "purpose"
    t.string   "status"
    t.string   "note"
    t.index ["borrower_id"], name: "index_loans_on_borrower_id", using: :btree
  end

  create_table "properties", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.decimal  "purchase_price",  precision: 13, scale: 2
    t.string   "property_type"
    t.string   "title"
    t.decimal  "land_size",       precision: 10, scale: 2
    t.integer  "building_size"
    t.integer  "number_of_units"
    t.integer  "year_build"
    t.integer  "occup"
    t.uuid     "loan_id"
    t.datetime "created_at",                               null: false
    t.datetime "updated_at",                               null: false
    t.index ["loan_id"], name: "index_properties_on_loan_id", using: :btree
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
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["subjectable_type", "subjectable_id"], name: "index_users_on_subjectable_type_and_subjectable_id", using: :btree
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

  add_foreign_key "agents", "loans"
  add_foreign_key "bussinesses", "users"
  add_foreign_key "checklists", "loans"
  add_foreign_key "closings", "loans"
  add_foreign_key "documents", "document_types"
  add_foreign_key "guarantors", "loans"
  add_foreign_key "loans", "borrowers"
  add_foreign_key "properties", "loans"
end
