# i-OwnJersey (Own The Original)

## This is a modern, full-stack e-commerce application for jersey sales with separate client and admin interfaces.

## Core Technologies

#### Frontend (Client & Admin)


* React (v19.2.0) - UI library
Vite (v7.2.2) - Build tool and development server
React Router DOM (v7.9.6) - Client-side routing

#### Styling 

* Tailwind CSS (v4.1.17) - Utility-first CSS framework
@tailwindcss/vite (v4.1.17) - Tailwind Vite plugin

#### State Management & HTTP

* Axios (v1.13.2) - HTTP client for API requests
React Context API - Global state management (ShopContext)

#### UI Libraries

* React Toastify (v11.0.5) - Toast notifications


### Backend (Server)
Runtime & Framework

* Node.js - JavaScript runtime
* Express.js - Web framework

#### Database

* MongoDB - NoSQL database
* Mongoose - MongoDB ODM (Object Data Modeling)

#### Authentication & Security

* JSON Web Tokens (JWT) - Token-based authentication
* bcrypt - Password hashing
* validator - Data validation

#### File Upload & Storage

* Multer - File upload middleware
* Cloudinary (v2) - Cloud-based image storage and management

#### Email

* Nodemailer - Email sending functionality

#### Environment & Configuration

* dotenv - Environment variable management
*  CORS - Cross-Origin Resource Sharing middleware


## Architecture Pattern

MERN Stack (MongoDB, Express, React, Node.js)
REST API architecture
MVC Pattern (Models, Views, Controllers) on backend
Component-based architecture on frontend


#### Deployment Configuration

Client runs on: Port 5173
Admin panel runs on: Port 5174
Backend runs on: Port 8000 (configurable via environment variable)


Key Features Implemented

*  JWT authentication with token-based sessions
* Image upload to Cloudinary
* Shopping cart functionality
* Order management (COD payment method)
* Email notifications (welcome & deletion emails)
* Admin panel for product & order management
* Responsive design with Tailwind CSS

## About Website
Building i-OwnJersey was an incredible journey where I brought together everything I'd learned about full-stack development. This e-commerce platform for sports jerseys challenged me to create a complete, functional system from scratch. I started with the backend using Node.js and Express, building RESTful APIs for user authentication, product management, cart operations, and order processing. Implementing JWT-based authentication with bcrypt encryption taught me how crucial security is in real applications. Setting up MongoDB with Mongoose gave me hands-on experience with database schema design—creating models for users, products, and orders that could handle complex relationships. The frontend in React was where creativity met functionality. I used Tailwind CSS to craft a bold, sporty design with sharp borders and vibrant red accents that captured the energy of sports culture. Managing state with Context API across components like the shopping cart, user authentication, and product filters taught me how data flows through modern web applications. Integrating Cloudinary for image uploads was a breakthrough moment—seeing product photos stored in the cloud and displayed seamlessly made the platform feel professional. The admin panel was another challenge, requiring a completely separate interface for managing inventory and orders, teaching me how different user roles need different experiences. What made this project special was connecting all the pieces. Using axios for API calls, implementing real-time cart updates, building the checkout flow with COD payment—every feature required thinking through user experience and technical implementation simultaneously. This wasn't just coding practice; it was solving real problems. Every bug fixed and feature added made me understand how full-stack development truly works—backend logic powering frontend beauty, all working together to create something people could actually use.

## Author

Kirtan Nahar 

contactkirtann@gmail.com