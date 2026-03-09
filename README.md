# Contact Manager

## Project Description
Contact Manager is a backend application used to store and manage contact information such as name, email, and phone number. This project is built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations (Create, Read, Update, Delete) on contacts.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Nodemon

## Features
- Add a new contact
- View all contacts
- Update contact details
- Delete a contact
- REST API support

## Project Structure
contact-manager
│
├── models
│   └── Contact.js
│
├── routes
│   └── contactRoutes.js
│
├── server.js
├── package.json
└── README.md

## Installation

1. Clone the repository
git clone https://github.com/your-username/contact-manager.git

2. Go to project folder
cd contact-manager

3. Install dependencies
npm install

## Running the Project

Run the server using:

npm run dev

Server will run on:

http://localhost:5000

## MongoDB Connection

Example connection:

mongoose.connect("mongodb://127.0.0.1:27017/contactdb")

Or using MongoDB Atlas:

mongoose.connect("your-mongodb-atlas-connection-string")

## API Endpoints

GET /contacts → Get all contacts  
POST /contacts → Create a new contact  
PUT /contacts/:id → Update contact  
DELETE /contacts/:id → Delete contact

## Output

Server running on port 5000  
MongoDB Connected

## Author
Your Name

## License
This project is created for educational purposes.
