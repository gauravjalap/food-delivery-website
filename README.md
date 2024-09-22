# Food Delivery Website

## Overview

This is a full-stack Food Delivery Website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application includes both user and admin access, and payment options are integrated using Stripe.

## Features

- User Authentication (Login, Register)
- Admin Dashboard
- Browse and search for food items
- Add items to cart
- Place orders
- Secure payment integration with Stripe
- Responsive design

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payment Gateway:** Stripe
- **Authentication:** JWT (JSON Web Tokens)

## Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gauravjalap/food-delivery-website.git
   cd food-delivery-website
   ```

2. **Install dependencies:**

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   cd ../admin
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Start the client:**

   ```bash
   cd client
   npm start
   ```

## Usage

1. **User Registration and Login:**

   Users can register and log in to their accounts.

2. **Browse Food Items:**

   Users can browse and search for food items.

3. **Add to Cart:**

   Users can add items to their cart.

4. **Place Orders:**

   Users can place orders and make payments using Stripe.

5. **Admin Dashboard:**

   Admins can manage food items, view orders, and perform other administrative tasks.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to contact me at [work.gauravkumar01@gmail.com](mailto:work.gauravkumar01@gmail.com).

## Acknowledgments

- Thanks to the open-source community for providing valuable resources and libraries.
