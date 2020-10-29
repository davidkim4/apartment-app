# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = [
    {
      email: "dkim4016@gmail.com",
      password: "1411512414",
      password_confirmation: "1411512414",
    }
  ]
  user.each do |attribute|
    User.create attribute
  end
  
  apartments = [
    {
        id: 1,
        street: "1111 One St",
        city: "Monstadt",
        state: "Germany",
        manager: "Jean",
        email: "jean@ms.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes",
        user_id: 1
    },
    {
        id: 2,
        street: "2222 Two St",
        city: "Liyue",
        state: "China",
        manager: "Zhongli",
        email: "zhongli@ly.com",
        price: "2000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no",
        user_id: 2
    },
    {
        id: 3,
        street: "3333 Three St",
        city: "Inazuma",
        state: "Japan",
        manager: "Ayaka",
        email: "ayaka@iz.com",
        price: "3000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no",
        user_id: 3
    }
  ]
  
  test_user = User.first
  
  apartments.each do |attribute|
    test_user.apartments.create attribute
    puts apartment: "#{attribute}"
  end