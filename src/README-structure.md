# src/ folder guide

- assets/      Images, fonts, icons, static media
- components/  Reusable, generic UI building blocks (buttons, cards, nav, etc.)
- layouts/     Page shells / wrappers (e.g. MainLayout with Navbar + Footer + <Outlet />)
- pages/       Route-level components (one per route, rendered by AppRoutes)
- sections/    Larger composed blocks used inside pages (Hero, About, Skills, Projects, Contact)
- theme/       Tailwind theme tokens, design constants, dark/light mode logic
- hooks/       Custom React hooks
- utils/       Helper / utility functions
- constants/   App-wide constant values (nav links, social links, config)
- styles/      Global CSS (Tailwind entry point)
- routes/      React Router configuration (paths.js, AppRoutes.jsx)
- data/        Static content/data (project list, experience, resume data, etc.)
