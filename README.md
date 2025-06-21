## 🗨️ Convofy – Real-Time Chat App

**Convofy** is a real-time chat platform where users can send messages, upload profile pictures, and share images in conversations. Built using a modern tech stack, it supports full authentication, WebSocket-based communication, and media handling via Cloudinary.

---

### 📦 Tech Stack

* **Frontend**: React + Vite + Zustand + Tailwind CSS  
* **Backend**: Express.js + MongoDB + Socket.IO  
* **Authentication**: JWT with HTTP-only cookies  
* **Image Upload**: Cloudinary  
* **Hosting**: Vercel (frontend) & Render (backend)

---

### ✅ Features

* Secure user signup/login/logout  
* Profile picture upload  
* Real-time 1:1 chat using WebSockets  
* Image support in messages  
* JWT-based protected routes  
* Fully responsive UI  

---

### 🚀 Setup Guide

#### 1. Clone the Repository

* Separate frontend and backend folders.

#### 2. Configure Environment Variables

**Backend needs:**

* MongoDB URI  
* JWT secret  
* Client URL (for CORS)  
* Cloudinary credentials (cloud name, API key, secret)  

**Frontend needs:**

* Backend URL  
* Environment mode  

Add all variables to `.env` files or in deployment dashboards.

#### 3. Run Locally

* Install dependencies using your preferred package manager.  
* Start backend and frontend servers.  
* Test image uploads, WebSocket connection, and authentication.

---

### 🌐 Deployment Instructions

**Frontend on Vercel:**

* Import GitHub repo  
* Set environment variables (backend URL, environment mode)  
* Deploy with default Vite settings  

**Backend on Render:**

* Create new Web Service  
* Add all required env variables (including correct Cloudinary keys)  
* Use the correct build/start command  
* Enable WebSocket support  

---

### ☁️ Cloudinary Integration

* Used for uploading profile and message images  
* Base64 images are sent from the client  
* Uploaded directly to Cloudinary, and the returned URL is saved in MongoDB  

Make sure the correct Cloudinary credentials are added in your backend environment.

---

### 🧠 Developer Notes

* Uses Zustand for global state management  
* Auth uses HTTP-only secure cookies for JWT storage  
* Socket.IO manages real-time chat state  
* Tailwind CSS ensures a consistent and responsive UI  

---

### 📄 Environment Variable Templates

#### 🔧 Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### 💻 Frontend `.env`

```
VITE_BACKEND_URL=http://localhost:5000
VITE_ENV_MODE=development
```

For production:
```
VITE_BACKEND_URL=https://your-backend.onrender.com
VITE_ENV_MODE=production
```
