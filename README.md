# Project Manager - MERN Stack Project

A modern project management application built with React Router v7, Vite, and shadcn/ui.

## Getting Started

### Prerequisites
- Node.js 18+ and npm installed

### Project Setup

1. **Create Project Structure**
   ```bash
   mkdir project_manager
   cd project_manager
   mkdir frontend backend
   ```

2. **Frontend Setup**
   
   Navigate to frontend folder:
   ```bash
   cd frontend
   ```
   
   Create Vite project with React Router v7:
   ```bash
   npm create vite@latest ./
   ```
   - Select framework: `React`
   - Select variant: `React Router v7`
   - Initialize with new git repo: `No`
   - Install npm and start now: `Yes`
   
   Verify React is working:
   ```bash
   npm run dev
   ```

3. **Setup shadcn/ui**
   
   Initialize shadcn/ui:
   ```bash
   npx shadcn@latest init
   ```
   
   Verify everything is working:
   ```bash
   npm run dev
   ```

## Tech Stack

### Frontend
- **React Router v7** - Modern React framework with file-based routing
- **Vite 7** - Fast build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework (pre-installed)
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Beautiful icons

### Backend
- Coming soon...

## Current Features

- ✅ Home page with navigation
- ✅ Authentication routes (sign up, sign in, forgot password, etc.)
- ✅ shadcn/ui components integration
- ✅ Tailwind CSS styling
- ✅ TypeScript configuration

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