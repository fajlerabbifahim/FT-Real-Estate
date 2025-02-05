# FT Real Estate Website

FT Real Estate is a modern real estate platform designed for users, agents, and admins to interact seamlessly with property listings, offers, and management features.

## Features

### General

- Modern UI with React.js and Tailwind CSS
- Routing with React Router
- API calls managed using Axios instance
- Authentication and authorization with Firebase
- Backend with MongoDB

### User Features

- Browse available properties
- Add properties to wishlist
- Comment on properties
- Offers a Property within a specific price range
- Withdraw or modify offers (if applicable)
- View offer status (accepted/rejected)

### Agent Features

- Add and manage listed properties
- View all properties they have added
- Pending status for newly added properties until admin verification
- See property verification status (Verified/Pending/Rejected)
- Accept or reject money offers on their listed properties (auto-reject other offers on the same property if one is accepted)

### Admin Features

- Verify or reject agent-listed properties
- Manage users (promote/demote as Admin, Agent, or User)
- View all comments and delete inappropriate ones
- Manage all properties (verify/reject/delete if necessary)
- Oversee all transactions and offers made by users





## 🚀 Dependencies
This project relies on the following dependencies:

```json
{
  "dependencies": {
    "@stripe/react-stripe-js": "^3.1.1",
    "@stripe/stripe-js": "^5.5.0",
    "@tanstack/react-query": "^5.64.0",
    "apexcharts": "^4.3.0",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.471.1",
    "react": "^19.0.0-rc.1",
    "react-apexcharts": "^1.7.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-leaflet": "^5.0.0",
    "react-router-dom": "^7.1.1",
    "sweetalert2": "^11.15.10",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## 🛠️ Installation & Setup
Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/fajlerabbifahim/FT-Real-Estate.git
cd FT-Real-Estate
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:

```plaintext
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
```

(Replace values with your actual Firebase credentials)

### 4️⃣ Start the development server
```bash
npm run dev
```

### 5️⃣ Build for production
```bash
npm run build
```

### 6️⃣ Preview the build
```bash
npm run preview
```

## 🖥️ Usage
- Users can sign up, book deliveries, track parcels, and leave reviews.
- Admins can manage users, monitor deliveries, and process payments.
- Secure authentication & authorization is handled via Firebase.

## 🔑 Admin Credentials
Use the following credentials to log in as an admin:

```plaintext
Username: Fahim
Email: admin@fahim.com
Password: 123456
```

## 🔑 agent Credentials
Use the following credentials to log in as Delivery Men:

```plaintext
Email: agent@fahim.com
Password: 123456



## License

This project is open-source and available for modification.

---

