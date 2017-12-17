# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.create(name: "Kizzle", email: "kai@youaremyjoy.org", bio: "Testing", picture: "Testing")
User.create(name: "Brian", email: "brian@youaremyjoy.org", bio: "Testing", picture: "Testing")
Category.delete_all
Category.create(name: "Coding", user_id: 7)
Category.create(name: "Art", user_id: 7)
Log.delete_all
Log.create(minutes: 60, notes: "Testing", category_id: 1, user_id: 7)
Log.create(minutes: 100, notes: "Testing 2", category_id: 1, user_id: 7)
