# 🍕 MASALA MILE (Food Delivery Website)

A full-stack food delivery platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring user authentication, admin dashboard, shopping cart, and Stripe payment integration.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://masalamile.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/admin-live-blue.svg)](https://masalamile-admin.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**🌐 Live Links:**
- **Frontend:** https://masalamile.vercel.app/
- **Admin Panel:** https://masalamile-admin.vercel.app/
- **Demo Mode:** Enabled (No signup required - test all features immediately!)

## 🌟 Features

### User Features

- 🔐 User authentication (Register/Login with JWT)
- 🍔 Browse food items by category
- 🛒 Shopping cart management
- 💳 Secure payment processing with Stripe
- 📦 Order tracking
- 👤 User profile management

### Admin Features

- ➕ Add/Edit/Delete food items
- 📊 Order management dashboard
- 📈 View order statistics
- 🖼️ Image upload to Cloudinary

### Technical Features

- ☁️ Cloud-based image storage (Cloudinary)
- 🐳 Dockerized application with Docker Compose
- 🔒 Secure authentication with JWT
- ✅ Input validation with Joi
- 🎨 Responsive design
- 📱 Mobile-friendly UI

## 🏗️ Architecture

```
food-delivery-website/
├── backend/          # Express.js API server
├── frontend/         # React user interface
├── admin/            # React admin panel
└── docker-compose.yml
```

## 🎯 For Recruiters - Quick Demo Access

**🚀 Try it live:** [https://masalamile.vercel.app/](https://masalamile.vercel.app/)

**No signup required!** This project runs in **DEMO MODE** by default, allowing you to:

- ✅ Browse 32 food items across 8 categories
- ✅ Add items to cart (works without login!)
- ✅ Complete checkout process (no real payment needed)
- ✅ View order history
- ✅ Test all features immediately

**Admin Panel:** [https://masalamile-admin.vercel.app/](https://masalamile-admin.vercel.app/)
- View all food items
- See order management interface

### Demo Features

- Cart operations work without login
- Orders are processed in demo mode (no real payment)
- All features fully functional for testing

---

## 🚀 Quick Start with Docker (Recommended)

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Cloudinary Account](https://cloudinary.com/) (free tier)
- [Stripe Account](https://stripe.com/) (for payments - optional in demo mode)

### 1. Clone the repository

```bash
git clone https://github.com/gauravjalap/food-delivery-website.git
cd food-delivery-website
```

### 2. Configure environment variables

```bash
# Copy the environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

**Important:** Get your Cloudinary credentials from [Cloudinary Dashboard](https://cloudinary.com/console)

**For Demo Mode (Recruiter-friendly):**

- Set `DEMO_MODE=true` in `.env` (enabled by default in Docker Compose)
- This bypasses authentication for cart and checkout
- No Stripe setup required for demo mode

### 3. Start all services (Auto-seeds database)

```bash
# Start all containers (MongoDB, Backend, Frontend, Admin)
# Database will be automatically seeded with 32 food items
docker compose up -d

# View logs to confirm seeding
docker compose logs -f backend
```

**Note:** First startup takes ~30 seconds to seed database automatically.

### 4. Access the applications

- **Frontend (User):** http://localhost:5173
- **Admin Panel:** http://localhost:5174
- **Backend API:** http://localhost:4000
- **MongoDB:** localhost:27017

### 5. Stop all services

```bash
docker compose down

# To remove volumes as well (deletes database)
docker compose down -v
```

## 🛠️ Manual Installation (Without Docker)

### Prerequisites

- Node.js (v18+)
- MongoDB (v6+)
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Admin Setup

```bash
cd admin
npm install
cp .env.example .env.local
npm run dev
```

### Seed Database

```bash
cd backend
npm run seed
```

## 📦 Available Scripts

### Backend

```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm run seed         # Seed database with sample data
npm run seed:clear   # Clear all database data
```

### Frontend/Admin

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔧 Environment Variables

### Backend (.env)

```env
NODE_ENV=development
PORT=4000
MONGO_URI=mongodb://admin:admin123@localhost:27017/food-delivery?authSource=admin
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Demo Mode - Set to true for recruiter-friendly access (no authentication required)
DEMO_MODE=true
```

### Frontend/Admin (.env.local)

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Important Environment Settings

**DEMO_MODE**:

- `true` (default): Allows cart/checkout without signup - perfect for recruiters
- `false`: Requires user authentication - production mode

## 🗂️ Project Structure

```
backend/
├── config/
│   ├── db.js                 # Database connection
│   └── cloudinary.js         # Cloudinary configuration
├── controllers/              # Request handlers
├── middleware/
│   └── auth.js              # JWT authentication
├── models/                  # MongoDB schemas
├── routes/                  # API routes
├── scripts/
│   ├── seed.js             # Database seeding
│   └── clearData.js        # Clear database
├── server.js               # Entry point
└── Dockerfile

frontend/
├── src/
│   ├── components/         # Reusable components
│   ├── context/           # React context
│   ├── pages/             # Page components
│   └── assets/            # Images, styles
├── Dockerfile
└── nginx.conf

admin/
├── src/
│   ├── components/
│   └── pages/
├── Dockerfile
└── nginx.conf
```

## 🌐 API Endpoints

### Food Routes

- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `POST /api/food/remove` - Remove food item (Admin)

### User Routes

- `POST /api/user/register` - Register new user
- `POST /api/user/login` - Login user

### Cart Routes

- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Order Routes

- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 🎨 Tech Stack

### Frontend

- React 18
- React Router DOM
- Axios
- Vite

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for file uploads
- Cloudinary for image storage
- Stripe for payments
- Joi for validation

### DevOps

- Docker & Docker Compose
- Nginx (production)
- GitHub Actions (CI/CD) - Coming soon

## 🚢 Deployment

### Deploy to Vercel

**Backend:**

```bash
cd backend
vercel --prod
```

**Frontend:**

```bash
cd frontend
vercel --prod
```

**Admin:**

```bash
cd admin
vercel --prod
```

### Deploy with Docker to VPS

```bash
# On your VPS
git clone https://github.com/gauravjalap/food-delivery-website.git
cd food-delivery-website

# Set production environment variables
nano .env

# Start services
docker-compose -f docker-compose.prod.yml up -d
```

## 🔐 Security Best Practices Implemented

- ✅ Environment variables for sensitive data
- ✅ JWT token authentication
- ✅ Password hashing with bcrypt
- ✅ Input validation with Joi
- ✅ CORS configuration
- ✅ File upload restrictions
- ✅ MongoDB connection security
- ✅ Rate limiting (TODO)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 Todo List

- [ ] Add unit tests
- [ ] Implement rate limiting
- [ ] Add email notifications
- [ ] Implement real-time order tracking with WebSocket
- [ ] Add search functionality
- [ ] Implement reviews and ratings
- [ ] Add multiple payment options
- [ ] Migrate to Tailwind CSS
- [ ] Add TypeScript support
- [ ] Implement CI/CD pipeline

## 🌍 Production Deployment

### Deployed Architecture

```
Frontend (Vercel)  →  Backend (Render)  →  MongoDB Atlas
Admin (Vercel)     →     (FREE)             (FREE 512MB)
(FREE Unlimited)
```

### Quick Deploy

1. **Backend (Render)**: Deploy from `backend/` directory
2. **Frontend (Vercel)**: Deploy from `frontend/` directory
3. **Admin (Vercel)**: Deploy from `admin/` directory
4. **Database (MongoDB Atlas)**: Free M0 cluster

**📖 Full deployment guide:** See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

**✅ Quick checklist:** See [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Gaurav Kumar**

- Email: work.gauravkumar01@gmail.com
- GitHub: [@gauravjalap](https://github.com/gauravjalap)
- LinkedIn: [Connect with me](https://linkedin.com/in/gauravjalap)

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern food delivery platforms
- Built with love and lots of ☕

## 📞 Support

For support, email work.gauravkumar01@gmail.com or open an issue on GitHub.

---

⭐ **Star this repo if you find it helpful!** ⭐
