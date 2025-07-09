# 💸 dtMoney — Financial Tracker App

A simple and functional financial transaction tracker built with React, TypeScript, and Vite. This project is part of my self-learning journey in frontend development, and includes a fully functional frontend integrated with a live mock API.

The application allows users to:

  * View their transaction history

  * Search/filter transactions

  * Add new income or outcome transactions

💡 This app was also an opportunity to explore context separation, form validation, and state performance optimizations using tools like useMemo, Controller, and useContextSelector.
⚠️ Note: The backend API is hosted using Render's free tier. This means that after periods of inactivity, the server may enter sleep mode. When revisiting the app after a while, it may take a few seconds (or occasionally longer) for the data to load properly as the service “wakes up”.

## 🌐 Live Preview

View on GitHub Pages

Or directly: https://ithauront.github.io/dtMoney/

## 🛠️ Tech Stack

  * React & TypeScript

  * Vite for tooling and fast builds

  * Styled-components for scoped styling

  * React Hook Form + Zod for form handling & validation

  * Phosphor React for icons

  * @radix-ui/react-dialog for accessible modal

  * use-context-selector for performance-optimized context access

  * json-server as a mock backend (deployed and live)

  * Axios for HTTP requests

## ⚙️ Features

  ✅ Add income/outcome transactions

  ✅ Real-time transaction summary

  ✅ Filter transactions via search form

  ✅ Modal for adding new entries

  ✅ Context-based state with performance optimization (useContextSelector)

  ✅ Form validation with zod + react-hook-form

  ✅ Optimized derived state via useMemo

  ✅ Data persisted in live API


## 🧪 Backend (API)

A live mock API is hosted via Render:

   🌍 https://dtmoney-api-jl84.onrender.com/transactions

This API is powered by json-server and supports full GET and POST interaction.

⚠️ Note: Render free tier may spin down services after inactivity. The API might take a few seconds to wake up after periods of no usage.

## 📚 What I Practiced

  * Context isolation for cleaner component structure

  * Custom hooks for derived state (useSummary)

  * Controlled components and Controller from react-hook-form

  * Type-safe schemas with zod

  * Code organization for separation of concerns

  * GitHub Pages + Vite deploy

  * Hosting and deploying a live API using Render

## 🚀 Running Locally & Installation

```bash
# Clone the repository
git clone https://github.com/ithauront/dtMoney.git

# Navigate into the project
cd dtMoney

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🗃️ JSON Server (API) – Local Setup (optional)

If you want to run the API locally instead of using the hosted one:

```bash
# Clone the repository
git clone https://github.com/ithauront/DTmoney-api.git

# Navigate into the project
cd DTmoney-api

# Install dependencies
npm install

# Start the server on port 3000
 PORT=3000 npm start
```
⚠️ Don't forget to change the API connection in src/lib/axios.ts to:
```bash
export const api = axios.create({
  baseURL: 'http://localhost:3000',
})
```

---

🤝 Related Backend

Although this project uses a mock API (via json-server), I have developed other projects where frontend and backend are fully integrated.

In this case, the focus was on mastering React architecture, form handling, and performance patterns — not full-stack integration.

If you're curious about a backend project with a similar structure and logic, check out the apiRest repository, which simulates a real financial tracker backend with database persistence, RESTful routes, and session handling.







