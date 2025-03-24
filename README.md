# MERN Blog Platform (Deployment and DevOps Essentials)

This is a full-stack blog application developed as part of Week 7 of the Power Learn Project Full-Stack Development MERN course. It uses MongoDB, Express.js, React, and Node.js to create a platform where users can create and view blog posts. The project demonstrates skills in version control, continuous integration, and deployment.

## Live Deployment

- **Frontend**: [https://mernblogplp7.netlify.app/](https://mernblogplp7.netlify.app/)
- **Backend API**: [https://week-7-deployment-and-devops-essentials-bnny.onrender.com/](https://week-7-deployment-and-devops-essentials-bnny.onrender.com/)
- **GitHub Repository**: [https://github.com/PLP-Full-Stack-Development-MERN/week-7-deployment-and-devops-essentials-wachira567](https://github.com/PLP-Full-Stack-Development-MERN/week-7-deployment-and-devops-essentials-wachira567)

## Features

- **Blog Post Creation**: Users can submit new blog posts with a title, content, and author via a form on the frontend.
- **Blog Post Viewing**: Displays a list of all blog posts fetched from the backend API.
- **CRUD Operations**: Backend supports Create (POST), Read (GET) operations for blog posts (Update and Delete can be added).
- **Responsive Frontend**: Built with React for a dynamic user interface.
- **Persistent Storage**: MongoDB Atlas stores blog posts.
- **CI/CD**: GitHub Actions runs backend tests on push/pull requests (secrets setup pending).
- **Deployment**: Backend on Render, frontend on Netlify.

## Project Structure

```
mern-blog-platform/
├── backend/               # Express.js backend
│   ├── models/            # Mongoose schemas (BlogPost.js)
│   ├── routes/            # API routes (blogPosts.js)
│   ├── tests/             # Jest/Supertest tests (server.test.js)
│   ├── server.js          # Main Express app
│   ├── package.json       # Backend dependencies and scripts
│   └── .env              # Environment variables (not tracked)
├── frontend/              # React frontend
│   ├── src/               # React components and API calls (App.js, etc.)
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies and scripts
│   └── .env              # Frontend environment variables (not tracked)
├── .github/               # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml         # CI pipeline for backend tests
├── .gitignore             # Ignored files (node_modules, .env, etc.)
└── README.md              # Project documentation
```

## Prerequisites

- **Node.js**: v16 or higher.
- **npm**: Comes with Node.js.
- **MongoDB Atlas**: A free cluster for the database.
- **Git**: For version control.
- **GitHub Account**: For repository hosting.
- **Render Account**: For backend deployment.
- **Netlify Account**: For frontend deployment.

## Local Setup

Clone the repository and set up the backend and frontend locally.

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/`:
   ```
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Test locally: `http://localhost:5000/` should return "Backend API running".

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `frontend/`:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000` in your browser to see the app.

### Running Tests

- Backend tests (Jest/Supertest):
  ```bash
  cd backend
  npm test
  ```
  - Tests GET `/` and POST `/api/posts` endpoints.

## Deployment

### Backend (Render)

- **Platform**: Render (Free tier).
- **Repo**: `PLP-Full-Stack-Development-MERN/week-7-deployment-and-devops-essentials-wachira567`.
- **Settings**:
  - Root Directory: `backend`.
  - Build Command: `npm install`.
  - Start Command: `node server.js`.
  - Environment Variable: `MONGO_URI=<your_mongo_uri>`.
- **URL**: [https://week-7-deployment-and-devops-essentials-bnny.onrender.com/](https://week-7-deployment-and-devops-essentials-bnny.onrender.com/).

### Frontend (Netlify)

- **Platform**: Netlify (Free tier).
- **Repo**: `PLP-Full-Stack-Development-MERN/week-7-deployment-and-devops-essentials-wachira567`.
- **Settings**:
  - Base Directory: `frontend`.
  - Build Command: `npm run build`.
  - Publish Directory: `frontend/build`.
  - Environment Variable: `REACT_APP_API_URL=https://week-7-deployment-and-devops-essentials-bnny.onrender.com`.
- **URL**: [https://mernblogplp7.netlify.app/](https://mernblogplp7.netlify.app/).

## CI/CD

- **GitHub Actions**: Configured in `.github/workflows/ci.yml`.
- **Workflow**: Runs backend tests on push/pull requests to `main`.
- **Status**: Tests pass locally; GitHub Secrets (`MONGO_URI`) pending admin setup for full CI functionality.

## API Endpoints

- **GET `/`**: Returns "Backend API running".
- **GET `/api/posts`**: Fetches all blog posts.
- **POST `/api/posts`**: Creates a new blog post.
  - Body: `{"title": "string", "content": "string", "author": "string"}`.
  - Response: `201` with post data including `_id`.

## Technologies Used

- **MongoDB**: NoSQL database (Atlas).
- **Express.js**: Backend framework.
- **React**: Frontend library.
- **Node.js**: Runtime environment.
- **Mongoose**: MongoDB ORM.
- **Jest/Supertest**: Testing framework.
- **Git/GitHub**: Version control.
- **Render**: Backend hosting.
- **Netlify**: Frontend hosting.
- **GitHub Actions**: CI pipeline.

## Challenges Faced

- Git push errors (e.g., unrelated histories, permissions).
- CI secrets setup delayed due to organization repo access.
- CORS configuration for frontend-backend communication.

## Future Improvements

- Add Update and Delete operations (PUT, DELETE endpoints).
- Implement user authentication.
- Enhance frontend UI/UX with styling and error handling.
- Complete CI secrets setup for automated testing on GitHub.

## Author

- **Name**: Wachira (wachira567)
- **GitHub**: [https://github.com/wachira567]
