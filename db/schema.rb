# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_03_025941) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "activity_type"
    t.string "title"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "checklistitems", force: :cascade do |t|
    t.string "name"
    t.boolean "complete"
    t.bigint "checklist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["checklist_id"], name: "index_checklistitems_on_checklist_id"
  end

  create_table "checklists", force: :cascade do |t|
    t.string "name"
    t.boolean "complete"
    t.bigint "task_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_checklists_on_task_id"
  end

  create_table "habits", force: :cascade do |t|
    t.string "title"
    t.string "notes"
    t.boolean "add_option"
    t.string "dif_level"
    t.string "tags"
    t.string "frequency"
    t.string "desc"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "sub_option"
    t.index ["user_id"], name: "index_habits_on_user_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.string "award"
    t.integer "points"
    t.string "image"
    t.boolean "achieved"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "tags"
    t.text "notes"
    t.index ["user_id"], name: "index_rewards_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.datetime "due"
    t.text "comment"
    t.string "image"
    t.bigint "reward_id"
    t.boolean "complete"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "add_option"
    t.string "diff_levels"
    t.string "tags"
    t.string "frequency"
    t.boolean "sub_option"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.integer "points", default: 0
    t.string "levels"
    t.integer "easy", default: 5
    t.integer "medium", default: 10
    t.integer "difficult", default: 15
    t.string "note"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "activities", "users"
  add_foreign_key "checklistitems", "checklists"
  add_foreign_key "checklists", "tasks"
  add_foreign_key "habits", "users"
  add_foreign_key "rewards", "users"
  add_foreign_key "tasks", "users"
end
