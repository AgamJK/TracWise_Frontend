# TracWise Frontend

This is the frontend for the TracWise project, providing a user-friendly interface for tractor maintenance Q&A powered by AI.

## Features

- Modern chat interface for tractor-related queries
- Session-based conversation context
- User authentication (Clerk integration)
- Responsive design
- Connects to TracWise backend API

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/TracWise_Frontend.git
   cd TracWise_Frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your Clerk publishable key and backend API URL:
     ```
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     VITE_BACKEND_URL=https://tracwise-backend.onrender.com
     ```

### Running the App

```
npm run dev
```
or
```
yarn dev
```

The app will start on `http://localhost:3000` by default.

## Deployment

You can deploy this frontend on Vercel, Netlify, or any static hosting service.  
For Vercel, ensure you have a `vercel.json` file for proper client-side routing.

## Usage

- Sign in using Clerk authentication.
- Ask tractor-related questions in the chat.
- The AI will respond and maintain context throughout your session.

## License

MIT

## Contact

For questions or support, contact [your-email@example.com].
