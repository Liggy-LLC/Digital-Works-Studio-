# Digital Works Studio

A powerful web-based 3D game engine development environment that enables creators to build, edit, and preview 3D scenes directly in their browser. Built with React, Three.js, and modern web technologies.

## Features

### 1. Scene Editor
- Intuitive 3D viewport with orbit controls
- Real-time object manipulation
- Grid-based workspace
- Transform controls for precise positioning

### 2. Object Management
- Scene hierarchy viewer
- Basic primitive shapes (cube, sphere, cylinder, plane)
- Object properties editor
- Material customization system

### 3. Material System
- Color picker
- Metalness/roughness controls
- Emissive color settings
- Opacity adjustment
- PBR material preview

### 4. Asset Library
- Categorized asset browser
- Basic props and primitives
- Nature assets
- Architectural elements

### 5. User System
- Secure authentication
- Project saving and loading
- Personal workspace
- Scene sharing capabilities

## Technical Architecture

### Frontend
- React with TypeScript
- Three.js for 3D rendering
- Zustand for state management
- Tailwind CSS + shadcn/ui for styling
- React Query for data fetching

### Backend
- Express.js server
- Passport.js authentication
- In-memory storage (configurable for database)
- RESTful API design

## Getting Started

1. Login or register an account
2. Create a new scene from the homepage
3. Use the toolbar to add 3D objects
4. Manipulate objects using the transform controls
5. Customize materials in the properties panel
6. Save your work and share with others

## Security Features

- Secure password hashing
- Session-based authentication
- Protected routes
- CSRF protection
- Input validation

## Component Structure

- `/components/editor/*` - Core editor components
- `/lib/*` - Utility functions and state management
- `/pages/*` - Main application pages
- `/shared/*` - Shared types and schemas
- `/server/*` - Backend implementation

## Development

Built with modern web development practices:
- TypeScript for type safety
- Component-based architecture
- Responsive design
- Real-time updates
- Modular and extensible codebase
