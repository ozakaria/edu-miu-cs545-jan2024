-- Insert Role entries
INSERT INTO role (id, role) VALUES
                                (1, 'OWNER'),
                                (2, 'CUSTOMER'),
                                (3, 'ADMIN');

-- Insert Customer entries
INSERT INTO customer (id, first_name, last_name, email, password, role_id, status, date_of_registration) VALUES
                                                                                                             (100, 'Osama', 'Alawneh', 'osama@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 09:45:00'),
                                                                                                             (200, 'Jane', 'Doe', 'janedoe@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 10:15:00'),
                                                                                                             (300, 'Bob', 'Smith', 'bobsmith@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 10:30:30'),
                                                                                                             (400, 'Alice', 'Johnson', 'alicejohnson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 11:00:00'),
                                                                                                             (500, 'Mike', 'Williams', 'mikewilliams@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 11:30:00'),
                                                                                                             (600, 'Emily', 'Davis', 'emilydavis@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 12:00:00'),
                                                                                                             (700, 'David', 'Brown', 'davidbrown@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 12:30:00'),
                                                                                                             (800, 'Sarah', 'Miller', 'sarahmiller@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 13:00:00'),
                                                                                                             (900, 'Mark', 'Wilson', 'markwilson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 13:30:00'),
                                                                                                             (1000   , 'Karen', 'Moore', 'karenmoore@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 14:00:00'),
                                                                                                             (1100   , 'Tom', 'Taylor', 'tomtaylor@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 14:30:00'),
                                                                                                             (1200   , 'Olivia', 'Anderson', 'oliviaanderson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 15:00:00'),
                                                                                                             (1300   , 'Chris', 'Thomas', 'christhomas@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 15:30:00'),
                                                                                                             (1400   , 'Samantha', 'Jackson', 'samanthajackson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 16:00:00'),
                                                                                                             (1500   , 'George', 'White', 'georgewhite@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 16:30:00'),
                                                                                                             (1600   , 'Ella', 'Harris', 'ellaharris@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 17:00:00'),
                                                                                                             (1700   , 'Anthony', 'Martin', 'anthonymartin@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 17:30:00'),
                                                                                                             (1800   , 'Madison', 'Thompson', 'madisonthompson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 18:00:00'),
                                                                                                             (1900   , 'Ryan', 'Garcia', 'ryangarcia@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 18:30:00'),
                                                                                                             (2000   , 'Julia', 'Davis', 'juliadavis@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 19:00:00'),
                                                                                                             (2100   , 'Justin', 'Rodriguez', 'justinrodriguez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 19:30:00'),
                                                                                                             (2200   , 'Lauren', 'Perez', 'laurenperez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 20:00:00'),
                                                                                                             (2300   , 'Joshua', 'Turner', 'joshuaturner@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 20:30:00'),
                                                                                                             (2400   , 'Ashley', 'Campbell', 'ashleycampbell@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 21:00:00'),
                                                                                                             (2500   , 'Brandon', 'Parker', 'brandonparker@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 2, 'ACTIVE', '2023-04-25 21:30:00');

-- Insert Owner entries
INSERT INTO owner (id, first_name, last_name, email, password, role_id, status, date_of_registration) VALUES
                                                                                                          (2600, 'Michael', 'Brown', 'brown@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 10:00:00'),
                                                                                                          (2700, 'Jennifer', 'Johnson', 'getage5944@pixiil.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 10:30:00'),
                                                                                                          (2800, 'William', 'Lee', 'williamlee@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 11:00:00'),
                                                                                                          (2900, 'Sophia', 'Harris', 'sophiaharris@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 11:30:00'),
                                                                                                          (3000, 'Daniel', 'Jackson', 'danieljackson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 12:00:00'),
                                                                                                          (3100, 'Grace', 'Moore', 'gracemoore@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 12:30:00'),
                                                                                                          (3200, 'Joseph', 'Clark', 'josephclark@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 13:00:00'),
                                                                                                          (3300, 'Olivia', 'Hall', 'oliviahall@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 13:30:00'),
                                                                                                          (3400, 'James', 'Gonzalez', 'jamesgonzalez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 14:00:00'),
                                                                                                          (3500, 'Emma', 'Garcia', 'emmagarcia@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 14:30:00'),
                                                                                                          (3600, 'Benjamin', 'Rodriguez', 'benjaminrodriguez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 15:00:00'),
                                                                                                          (3700, 'Ava', 'Wilson', 'avawilson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 15:30:00'),
                                                                                                          (3800, 'David', 'Smith', 'davidsmith@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 16:00:00'),
                                                                                                          (3900, 'Mia', 'Taylor', 'miataylor@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 16:30:00'),
                                                                                                          (4000, 'Christopher', 'Anderson', 'christopheranderson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 17:00:00'),
                                                                                                          (4100, 'Harper', 'Johnson', 'harperjohnson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2023-04-26 17:30:00'),
                                                                                                          (4200, 'Andrew', 'Martinez', 'andrewmartinez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-01 09:30:00'),
                                                                                                          (4300, 'Evelyn', 'Clark', 'evelynclark@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-02 14:45:00'),
                                                                                                          (4400, 'Matthew', 'White', 'matthewwhite@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-03 17:15:00'),
                                                                                                          (4500, 'Addison', 'Hernandez', 'addisonhernandez@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-04 10:20:00'),
                                                                                                          (4600, 'Amelia', 'Lee', 'ameliale@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-05 12:30:00'),
                                                                                                          (4700, 'Lucas', 'Thomas', 'lucasthomas@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-06 15:45:00'),
                                                                                                          (4800, 'Chloe', 'Robinson', 'chloerobinson@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-07 11:00:00'),
                                                                                                          (4900, 'Henry', 'Harris', 'henryharris@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-08 09:15:00'),
                                                                                                          (5000, 'Elizabeth', 'Turner', 'elizabethturner@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 1, 'ACTIVE', '2022-03-09 13:30:00');


--Insert dummy data for Admin
INSERT INTO admin (id, first_name, last_name, email, password, role_id, status, date_of_registration) VALUES
                                                                                       (105, 'Jack', 'Blue', 'admin@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 3, 'ACTIVE', '2022-03-08 09:15:00'),
                                                                                       (110, 'Kate', 'Brown', 'katebrown@gmail.com', '$2a$04$x56W5.0jQSi0DPTQ3uoZIudRz2tjwa0rfCUXrC4VNzSLojAm5eLrG', 3, 'ACTIVE', '2022-03-09 13:30:00');
-- Insert dummy data for Address
INSERT INTO Address (id, street, city, state, zipcode)
VALUES (1000, '1234 Elm St', 'San Francisco', 'CA', '94107'),
       (2000, '5678 Oak St', 'Los Angeles', 'CA', '90001'),
       (3000, '9101 Maple St', 'New York', 'NY', '10001'),
       (4000, '2345 Cedar St', 'Chicago', 'IL', '60601'),
       (5000, '6789 Birch St', 'Houston', 'TX', '77001'),
       (6000, '1111 Pine St', 'Philadelphia', 'PA', '19101'),
       (7000, '2222 Willow St', 'Phoenix', 'AZ', '85001'),
       (8000, '3333 Cedar St', 'San Francisco', 'CA', '94107'),
       (9000, '4444 Oak St', 'Los Angeles', 'CA', '90001'),
       (10000, '5555 Maple St', 'New York', 'NY', '10001'),
       (11000, '6666 Cedar St', 'Chicago', 'IL', '60601'),
       (12000, '7777 Birch St', 'Houston', 'TX', '77001'),
       (13000, '8888 Pine St', 'Philadelphia', 'PA', '19101'),
       (14000, '9999 Willow St', 'Phoenix', 'AZ', '85001'),
       (15000, '1010 Cedar St', 'San Francisco', 'CA', '94107');


-- Insert dummy data for PropertyDetails
INSERT INTO property_details (id, pet, cooling, heater, deposit)
VALUES (600, true, 'Central AC', 'Gas', 2000.00),
       (700, false, 'Window AC', 'Electric', 1000.00),
       (800, true, 'Central AC', 'Gas', 2500.00),
       (900, false, 'Wall Unit AC', 'Electric', 1500.00),
       (1000, true, 'Central AC', 'Gas', 3000.00),
       (1100, false, 'Window AC', 'Electric', 1200.00),
       (1200, true, 'Central AC', 'Gas', 2800.00),
       (1300, false, 'Wall Unit AC', 'Electric', 1800.00),
       (1400, true, 'Central AC', 'Gas', 2300.00),
       (1500, false, 'Window AC', 'Electric', 900.00),
       (1600, true, 'Central AC', 'Gas', 2600.00),
       (1700, false, 'Wall Unit AC', 'Electric', 1600.00),
       (1800, true, 'Central AC', 'Gas', 2400.00),
       (1900, false, 'Window AC', 'Electric', 1100.00),
       (2000, true, 'Central AC', 'Gas', 2700.00);

-- Insert dummy data for Property
INSERT INTO property (id, property_type, price, bedrooms, bathrooms, property_status, lot_size, built_year, address_id, listing_type, property_details_id, owner_id)
VALUES (2600, 'HOUSE', 150000, 3, 2, 'AVAILABLE', 1200, '2008-01-01', 1000, 'SALE', 600, 2600),
       (2700, 'APARTMENT', 1000, 1, 1, 'RENTED', 600, '2015-01-01', 2000, 'RENT', 700, 2700),
       (2800, 'CONDO', 180000, 2, 2, 'SOLD', 900, '2010-01-01', 3000, 'SALE', 800, 2800),
       (2900, 'TOWNHOUSE', 130000, 2, 2, 'AVAILABLE', 1000, '2012-01-01', 4000, 'RENT', 900, 2900),
       (3000, 'HOUSE', 300000, 4, 3, 'SOLD', 1800, '2005-01-01', 5000, 'SALE', 1000, 3000),
       (3100, 'APARTMENT', 1100, 1, 1, 'RENTED', 700, '2018-01-01', 6000, 'RENT', 1100, 3100),
       (3200, 'CONDO', 250000, 2, 2, 'PENDING', 1000, '2016-01-01', 7000, 'SALE', 1200, 3200),
       (3300, 'TOWNHOUSE', 140000, 2, 2, 'AVAILABLE', 900, '2010-01-01', 8000, 'RENT', 1300, 3300),
       (3400, 'HOUSE', 180000, 3, 2, 'SOLD', 1200, '2015-01-01', 9000, 'SALE', 1400, 3400),
       (3500, 'APARTMENT', 900, 1, 1, 'RENTED', 600, '2012-01-01', 10000, 'RENT', 1500, 3500),
       (3600, 'CONDO', 200000, 2, 2, 'CONTINGENT', 1000, '2008-01-01', 11000, 'SALE', 1600, 3600),
       (3700, 'TOWNHOUSE', 120000, 2, 2, 'AVAILABLE', 800, '2005-01-01', 12000, 'RENT', 1700, 3700),
       (3800, 'HOUSE', 280000, 4, 3, 'SOLD', 1600, '2010-01-01', 13000, 'SALE', 1800, 3800),
       (3900, 'APARTMENT', 950, 1, 1, 'RENTED', 650, '2015-01-01', 14000, 'RENT', 1900, 3900),
       (4000, 'CONDO', 220000, 2, 2, 'PENDING', 1100, '2012-01-01', 15000, 'SALE', 2000, 4000);

-- Insert dummy data for owner_properties
INSERT INTO owner_properties (owner_id, properties_id)
VALUES (2600, 2600),
       (2700, 2700),
       (2800, 2800),
       (2900, 2900),
       (3000, 3000),
       (3100, 3100),
       (3200, 3200),
       (3300, 3300),
       (3400, 3400),
       (3500, 3500),
       (3600, 3600),
       (3700, 3700),
       (3800, 3800),
       (3900, 3900),
       (4000, 4000);



INSERT INTO offer (id, price, status, submitted_at, customer_id, property_id, owner_id)
VALUES (100, 300000, 'WAITING', '2023-04-27T10:09:30', 100, 2600, 2600),
       (200, 250000, 'WAITING', '2023-04-27T10:09:30', 100, 2800, 2800),
       (300, 300000, 'WAITING', '2023-04-27T10:09:30', 100, 3000, 3000),
       (400, 200000, 'WAITING', '2023-04-27T10:09:30', 100, 3100, 3100),
       (500, 400000, 'WAITING', '2023-04-27T10:09:30', 100, 3200, 3200),
       (600, 320000, 'WAITING', '2023-04-27T10:09:30', 200, 2600, 2600),
       (700, 350000, 'WAITING', '2023-04-27T10:09:30', 200, 2800, 2800);

INSERT INTO photos (id, link, property_id)
VALUES (1000, 'http://localhost:8080/api/images/1.webp', 2600),
       (2000, 'http://localhost:8080/api/images/2.webp', 2700),
       (3000, 'http://localhost:8080/api/images/3.webp', 2800),
       (4000, 'http://localhost:8080/api/images/4.webp', 2900),
       (5000, 'http://localhost:8080/api/images/2.webp', 3000),
       (6000, 'http://localhost:8080/api/images/5.webp', 3100),
       (7000, 'http://localhost:8080/api/images/6.webp', 3200),
       (8000, 'http://localhost:8080/api/images/3.webp', 3300),
       (9000, 'http://localhost:8080/api/images/1.webp', 3400),
       (10000, 'http://localhost:8080/api/images/6.webp', 3500),
       (11000, 'http://localhost:8080/api/images/2.webp', 3600),
       (12000, 'http://localhost:8080/api/images/5-2.webp', 3700),
       (13000, 'http://localhost:8080/api/images/4.webp', 3800),
       (14000, 'http://localhost:8080/api/images/3.webp', 3900),
       (15000, 'http://localhost:8080/api/images/2.webp', 4000);

