# BEST DEALERS CAR DEALERSHIP WEBSITE
This website is a MERN(MongoDB, EcpressJS, ReactJS, NodeJS) full-stack web application designed to provide a full experience for both the user and the administration of a car dealership.

## Features
### Frontend
- Browsing different cars from a list of cars.
- Selling car section where user submit car details, documents and image demonstrations and book for a car review.
- Browsing each and every car separately and getting car full details.
- Posting and manipulating Dealers who are registered to use this website for marketing their cars.
- using the following api endpoints to get data from backend:
   - `/api/v1/cars`
   - `/api/v1/soldCars`
   - `/api/v1/dealers`
 
## Backend

This API provides endpoints for managing products and user registration. It is built using Node.js,Express.js and Mongodb with Mongoose.

## Cars

### Get All Cars
- **URL:** `/api/v1/cars`
- **Method:** `GET`
- **Description:** Retrieve a list of all cars.
- **Response:** JSON array of cars and success status.

### Get Car by ID
- **URL:** `/api/v1/cars/:id`
- **Method:** `GET`
- **Description:** Retrieve a car by its unique ID.
- **Parameters:** `:id` (car ID)
- **Response:** JSON object representing the car.

### Cars
- **URL:** `/api/v1/users/cars`
- **Method:** `POST`
- **Description:** Post a new car (Admin only).
- **Request Body:** JSON object with car details .
- **Response:** JSON object indicating successful registration and car details.

### Update a car
- **URL:** `/api/v1/cars/:id`
- **Method:** `PATCH`
- **Description:** Update an existing car by ID.
- **Parameters:** `:id` (car ID)
- **Request Body:** JSON object with updated car details.
- **Response:** JSON object of the updated car.

### Delete a car
- **URL:** `/api/v1/cars/:id`
- **Method:** `DELETE`
- **Description:** Delete a car by its unique ID.
- **Parameters:** `:id` (car ID)
- **Response:** JSON object confirming the deletion.

**Sellers and dealers apis follow the same pattern as demonstrated above**


