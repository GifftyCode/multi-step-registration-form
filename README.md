# Multi-Step Registration Form

A modern, responsive multi-step registration form built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🔄 Multi-step form with progress tracking
- 🔍 Form validation using Formik and Yup
- 📂 File upload functionality
- 🎨 Modern UI with Tailwind CSS
- ⚡ Built with Vite for fast development

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Formik & Yup for form handling and validation
- React Icons
- Vite

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/GifftyCode/multi-step-registration-form.git
cd registration-form
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

This project is configured for easy deployment to Netlify:

```bash
npm run deploy
# or
yarn deploy
```

## Project Structure

```
registration-form/
├── public/              # Static files
│   └── logo.svg
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── FormLayout.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SocialIcons.tsx
│   │   └── Button.tsx
│   ├── pages/           # Form steps as separate components
│   │   ├── PersonalInfo.tsx
│   │   ├── Address.tsx
│   │   ├── Verification.tsx
│   │   └── TermsConditions.tsx
│   ├── context/         # React context for state management
│   │   └── FormContext.tsx
│   ├── hooks/           # Custom React hooks
│   │   └── useForm.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Best Practices Used

- Component-based architecture
- Custom hooks for separation of concerns
- Context API for state management
- Form validation with schema validation
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Proper file structure for scalability

## License

MIT
