# TaskHub - Project Management Solution

A modern project management application built with React Router v7, Vite, and shadcn/ui.

## Features

- 🚀 Built with React Router v7
- ⚡ Powered by Vite for fast development
- 🎨 Beautiful UI components with shadcn/ui
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🔐 Authentication system (sign up, sign in, forgot password)

## Tech Stack

### Frontend
- **React Router v7** - Modern React framework with file-based routing
- **Vite 7** - Fast build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Beautiful icons

### Backend
- Coming soon...

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd project_manager
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
project_manager/
├── frontend/
│   ├── app/
│   │   ├── components/
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── lib/
│   │   │   └── utils.ts     # Utility functions
│   │   ├── routes/
│   │   │   ├── auth/        # Authentication pages
│   │   │   └── root/        # Main application pages
│   │   ├── app.css          # Global styles
│   │   ├── root.tsx         # Root component
│   │   └── routes.ts        # Route configuration
│   ├── public/
│   ├── components.json      # shadcn/ui configuration
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── vite.config.ts
└── backend/                 # Backend (coming soon)
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.