puts "🌋 Clearing old data..."
User.destroy_all
User.reset_pk_sequence
Appointment.destroy_all
Appointment.reset_pk_sequence
Review.destroy_all
Review.reset_pk_sequence
Tweet.destroy_all
Tweet.reset_pk_sequence
Therapist.destroy_all
Therapist.reset_pk_sequence

#users 
puts "🙇 Seeding Users..."
10.times do 
    User.create(image: Faker::Avatar.unique.image, 
        first_name: Faker::Name.unique.first_name, 
        last_name: Faker::Name.unique.last_name, 
        birthday: Faker::Date.birthday(min_age: 18, max_age: 45), 
        username: Faker::App.unique.name, 
        email: Faker::Internet.unique.email, 
        password: "test"
    )
end 

#therapist 
puts "👩‍⚕️Seeding Therapists..."
Therapist.create(
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 43, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 49, 
    speciality: 'Family and marriage counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 42, 
    speciality: 'Addiction counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 38, 
    speciality: 'Psychoanalyst', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 37, 
    speciality: 'Psychotherapist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 35, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1606738132449-e3590ddb6793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 34, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 36, 
    speciality: 'Family and marriage counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 41, 
    speciality: 'Addiction counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1619380061814-58f03707f082?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 40, 
    speciality: 'Psychotherapist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 28, 
    speciality: 'Addiction counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 45, 
    speciality: 'Psychoanalyst', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 32, 
    speciality: 'Psychotherapist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 44, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 33, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1609436132311-e4b0c9370469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 37, 
    speciality: 'Family and marriage counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 39, 
    speciality: 'Addiction counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 40, 
    speciality: 'Psychotherapist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 43, 
    speciality: 'Psychologist', 
    phone_number: Faker::PhoneNumber.cell_phone
)

Therapist.create(
    image: "https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80", 
    name: Faker::Name.name_with_middle, 
    age: 40, 
    speciality: 'Family and marriage counselor', 
    phone_number: Faker::PhoneNumber.cell_phone
)

# appointments
puts "📅 Seeding Appointments..."
10.times do
    Appointment.create(
        appointment_date: Faker::Date.between(from: '2021-01-23', to: '2022-12-31'), 
        appointment_time: Faker::Time.backward(period: :morning, format: :short), 
        location: Faker::Address.unique.street_address, 
        user_id: User.ids.sample, 
        therapist_id: Therapist.ids.sample
    )
end 


# reviews
puts "✍️ Seeding Reviews..."
    Review.create(
        review: 'He was attentive, thorough and answered all my questions without rushing. It was a great first visit and I would definitely recommend him highly', 
        user_id: User.ids.sample, 
        therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'The entire staff is friendly and knowledgeable, and Dr.Bhatt was Excellent, he took his time to go over all my concerns and was very informative.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'knowledgable and professional. Everyone was friendly and helpful. Good feeling when you find an A+ Team! Highly recommend!', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'very encouraging, and has provided me with a very good understanding of my medical problems. Looking forward to my visits.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'super positive, nurturing, open minded and friendly. Helped me with addiction and with processing my past. I accomplished a lot of positive changes with her guidance!', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'I feel very confident in his skills to help me sort through lifelong issues.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'has been seeing my children for anxiety related issues. They both love her. I see a difference in the both of them in just a few short months.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'was very understanding and a great listener. I only had 1 session but I can tell he is a very caring, professional individual with knowledge to share.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'Excellent ! Very personable. My daughter loves seeing her and feels she is very helpful!', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'Incredibly professional, warm and easy to talk to.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

Review.create(
    review: 'Extremely communicative, thoughtful curious and human bedside manner.', 
    user_id: User.ids.sample, 
    therapist_id: Therapist.ids.sample
)

# tweets
puts "🐦 Seeding Tweets..."
20.times do
    Tweet.create(
        tweet: 'In this situation, it is okay to feel sad or angry', 
        user_id: User.ids.sample
    )
end 

20.times do
    Tweet.create(
        tweet: 'Everything is temporary.', 
        user_id: User.ids.sample
    )
end 

puts "🙌 Seeding Complete!"


















# 
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


# t.string :image
# t.string :name
# Faker::Name.name_with_middle  
# #=> "Daphne Swift"
# t.integer :age
# t.string :speciality



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

# Faker::PhoneNumber.cell_phone #=> "(186)285-7925"
