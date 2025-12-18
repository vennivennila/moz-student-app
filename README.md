# 🚀 Student Registration System (Svelte + GraphQL + MongoDB Atlas)

## ✨ Project Overview

This is a **full‑stack student registration project** where the frontend is built using **Svelte**, the backend uses **Node.js + Express with GraphQL**, and data is stored in **MongoDB Atlas (cloud database)**.

The project clearly demonstrates how data moves from the user interface to the database.

**Data Flow:**

```
<<<<<<< HEAD
Svelte Frontend → Node.js Backend → GraphQL API → MongoDB Atlas flow
=======
Svelte Frontend → Node.js Backend → GraphQL API → MongoDB Atlas
>>>>>>> origin/main
```

---

## 🛠️ Technologies Used

### Frontend

* Svelte / SvelteKit
* HTML, CSS, JavaScript

### Backend

* Node.js
* Express.js
* GraphQL (express-graphql)
* Mongoose

### Database

* MongoDB Atlas (Cloud)

---

## 🌟 Key Features

* Student data entry from Svelte frontend
* GraphQL mutations to save data
* GraphQL queries to fetch data
* Cloud-based storage using MongoDB Atlas
* Data viewable via Atlas dashboard or MongoDB Compass

---

## 📁 Project Structure

```
project-root/
│
├── backend/
│   ├── config/        # Database & environment configuration
│   ├── graphql/       # GraphQL schema, queries & mutations
│   ├── models/        # Mongoose models (Student schema)
│   ├── routes/        # API routes (if any)
│   ├── node_modules/
│   └── server.js      # Backend entry point
│
├── frontend/
│   ├── src/
│   │   └── routes/    # Svelte pages and components
│   ├── static/        # Static assets
│   ├── node_modules/
│   └── .svelte-kit/   # Svelte build files
│
├── .vscode/
├── .env
└── README.md
```

---

## 🔐 Environment Configuration

Create a `.env` file in the **backend** folder:

```
MONGO_URI=mongodb+srv://vennilavennila472_db_user:4W606zmh7DW0T2vK@studentapp.oxi5u2h.mongodb.net/studentDB?retryWrites=true&w=majority
PORT=5000
```

---

## ▶️ How to Run the Project

### 1️⃣ Run Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at:

```
http://localhost:5000/graphql
```

---

### 2️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 Sample GraphQL Operations


### ➕ Add Student (Mutation)

```graphql
mutation {
  addStudent(
    name: "Guna"
    email: "guna@gmail.com"
    phone: "9876543218"
    message: "Demo one"
  ) {
    name
    email
  }
}
```

### 📄 Get Students (Query)

```graphql
query {
  students {
    name
    email
    phone
    message
  }
}
```

---

## ☁️ Where Data Is Stored

* Data is stored in **MongoDB Atlas (Cloud)**
* View data using:

  * Atlas → Clusters → Browse Collections
  * MongoDB Compass (connected to Atlas)

---

## 🎥 Demo Explanation

1. Enter student details in the Svelte frontend
2. Submit the form
3. Data is sent via GraphQL to backend
4. Data is stored in MongoDB Atlas
5. Show saved data in Atlas dashboard

---

## ✅ Conclusion

This project successfully demonstrates a modern full‑stack architecture using Svelte, GraphQL, and MongoDB Atlas with clear frontend‑to‑database data flow.

---

