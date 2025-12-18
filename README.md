# Simple Event Registration System

A **Simple Event Registration System** that allows users to register for events efficiently. This project is built using `Node.js`, `Express`, `Dotenv` ,`MongoDB`, `Nodemon`, and `Mongoose`.

---

## System Overview

The system enables users to register for events while storing all registration data in a `MongoDB database`. Admins or developers can manage registrations through RESTful API endpoints.

### Flow of the System

1. **User Access**
   - Users open the system via a web browser.
   - The system provides forms to input registration details like fullName, date, location, duration, and event information.

2. **Registration Submission**
   - User submits the registration form.
   - The form data is sent to the backend via an `HTTP POST request`.

3. **Backend Processing**
   - Express.js server receives the request.
   - Mongoose validates and stores the data in the `MongoDB database`.
   - A response is sent back confirming successful registration.

4. **Database Storage**
   - Registrations are stored in the `registrations` collection in MongoDB.
   - Each registration contains fields such as:
     - `eventid`
     - `date`
     - `location`
     - `fullName`
     - `duration`
     - `eventname`

5. **Admin/Developer Access**
   - The system exposes API routes to:
     - View all registrations
     - Update or delete a registration
   - This enables easy management of events and participants.

---

## Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – Web framework for building APIs
- **MongoDB** – NoSQL database for storing registrations
- **Mongoose** – Object modeling for MongoDB
- **dotenv** – Environment variable management
- **Nodemon** – For automatic server restarts during development

## Project Structure

```bash
SIMPLE-EVENT-REGISTRATION/
├── config/          # Database connection configuration
├── controllers/     # Business logic and route handlers
├── models/          # Mongoose models
├── routes/          # API route definitions
├── server.js        # Main server entry point
├── package.json     # Node.js dependencies
└── .env             # Environment variables


