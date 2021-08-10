
puts "🌋 Clearing old data..."
User.destroy_all
User.reset_pk_sequence
Appointment.destroy_all
Appointment.reset_pk_sequence
# Review.destroy_all
# Review.reset_pk_sequence
# Tweet.destroy_all
# Tweet.reset_pk_sequence
Therapist.destroy_all
Therapist.reset_pk_sequence


#users 
puts "🙇 Seeding Users..."
10.times do 
    User.create(image: Faker::Avatar.unique.image, 
        name: Faker::Name.unique.name, 
        birthday: Faker::Date.birthday(min_age: 18, max_age: 45) , 
        username: Faker::App.unique.name, 
        email: Faker::Internet.unique.email, 
        password: "test"
    )
end 
# Faker::Avatar.unique.image 
# #=> "https://robohash.org/sitsequiquia.png?size=300x300&set=set1"
# Faker::Avatar.image(slug: "my-own-slug", size: "50x50") #=> "https://robohash.org/my-own-slug.png?size=50x50&set=set1"
# Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg") 
# #=> "https://robohash.org/my-own-slug.jpg?size=50x50&set=set1"

# t.string :name
# Faker::Name.name      
# #=> "Christophe Bartell"
# t.date :birthday
# Faker::Date.birthday(min_age: 18, max_age: 65) 
# #=> "Mar, 28 Mar 1986"
# t.string :userName

# t.string :email
# Faker::Internet.email 
# #=> "kirsten.greenholt@corkeryfisher.info"
# t.string :password
#therapists

puts "👩‍⚕️Seeding Therapists..."
# Faker::PhoneNumber.cell_phone #=> "(186)285-7925"

Therapist.create(image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", name: Faker::Name.name_with_middle , age: 43, speciality: 'Psychologist', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", name: Faker::Name.name_with_middle , age: 49, speciality: 'Family and marriage counselor', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", name: Faker::Name.name_with_middle , age: 42, speciality: 'Addiction counselor', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", name: Faker::Name.name_with_middle , age: 38, speciality: 'Psychoanalyst', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80", name: Faker::Name.name_with_middle , age: 37, speciality: 'Psychotherapist', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80", name: Faker::Name.name_with_middle , age: 35, speciality: 'Psychologist', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80", name: Faker::Name.name_with_middle , age: 34, speciality: 'Psychologist', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", name: Faker::Name.name_with_middle , age: 36, speciality: 'Family and marriage counselor', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", name: Faker::Name.name_with_middle , age: 41, speciality: 'Addiction counselor', phone_number: Faker::PhoneNumber.cell_phone)

Therapist.create(image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", name: Faker::Name.name_with_middle , age: 40, speciality: 'Psychotherapist', phone_number: Faker::PhoneNumber.cell_phone)
#appointments
puts "📅 Seeding Appointments..."
# Appointment.create(
#     appointment_date: Faker::Date.between(from: '2021-01-23', to: '2022-12-31'), 
#     appointment_time: "8:30 A.M", 
#     location: Faker::Address.unique.street_address, 
#     user_id: User.ids.sample, 
#     therapist_id: Therapist.ids.sample
# )


# 10.times do
#     Appointment.create(appointment_date: ("%d:/%m:/%Y:"), appointment_time:("%d:/%m:/%Y: %H:%M:%S:"), location: Faker::Address.unique.street_address, user_id: User.ids.sample, therapist_id: Therapist.ids.sample)
# end 

# Appointment.create(appointment_date: "%d:/%m:/%Y:", appointment_time: "%d:/%m:/%Y: %H:%M:%S:", location: Faker::Address.unique.street_address, user_id: User.ids.sample, therapist_id: Therapist.ids.sample)

10.times do
    Appointment.create(
        appointment_date: Faker::Date.between(from: '2021-01-23', to: '2022-12-31'), 
        appointment_time: Faker::Time.backward(period: :morning, format: :short), 
        location: Faker::Address.unique.street_address, 
        user_id: User.ids.sample, 
        therapist_id: Therapist.ids.sample
    )
end 




# Appointment.create(appointment_date: Faker::Date.between(from: '2021-01-23', to: '2022-12-31'), appointment_time: Faker::Time.backward(period: :morning, format: :short), location: Faker::Address.unique.street_address, user_id: User.ids.sample, therapist_id: Therapist.ids.sample)

# Appointment.create(appointment_date: "dfsdf", appointment_time: "fd", location: Faker::Address.unique.street_address, user_id: User.ids.sample, therapist_id: Therapist.ids.sample)

#     # Faker::Date.between(from: '2014-09-23', to: '2014-09-25') 
#     #=> #<Date: 2014-09-24>
# # t.string :location
# # Faker::Address.full_address 
# # #=> "282 Kevin Brook, Imogeneborough, CA 58517"
# # t.string :location
# # Faker::Address.street_address
# # #=> "282 Kevin Brook"
# # Faker::Address.unique.street_address
# end 

#Reviews
puts "✍️ Seeding Reviews..."
# 10.times do
#     Review.create(review: 'hello let me go in', user_id: User.ids.sampale, therapist_id: Therapist.ids.sample
#     )
# end 

#Tweets
# puts "🐦 Seeding Tweets..."
# 10.times do
#     Tweet.create(tweet: 'this is a test', user_id: User.ids.sample)
# end 




# t.string :image
# t.string :name
# Faker::Name.name_with_middle  
# #=> "Daphne Swift"
# t.integer :age
# t.string :speciality



puts "🙌 Seeding Complete!"
