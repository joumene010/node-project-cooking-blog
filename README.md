# Cooking Blog Project

This is a Node.js-based cooking blog application where users can explore recipes, share their own, and interact with the community. The project is designed to be simple, user-friendly, and customizable.

## Features

- Browse a variety of recipes.
- Add, edit, and delete your own recipes.
- Comment on and like recipes.
- User authentication and profile management.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (for database)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cooking-blog.git
   cd cooking-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm start`: Starts the application.
- `npm run dev`: Starts the application in development mode with hot-reloading.
- `npm test`: Runs the test suite.

## Folder Structure

```
node-project-cooking-blog-master/
├── public/         # Static assets (CSS, JS, images)
├── routes/         # Application routes
├── models/         # Database models
├── views/          # Template files (e.g., EJS)
├── controllers/    # Business logic
├── middleware/     # Custom middleware
├── .env            # Environment variables
├── package.json    # Project metadata and dependencies
└── README.md       # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
