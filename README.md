# Auth Practice Playground

> A Vite + React 19 sandbox for experimenting with modern authentication flows, Redux Toolkit side-effects, and Radix UI-powered theming.

![React 19](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=20232a)
![Vite 7](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=fff)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.x-764abc?logo=redux&logoColor=fff)

## Table of Contents

- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🗂 Project Structure](#-project-structure)
- [🧱 Architecture Notes](#-architecture-notes)
- [🔐 Validation Rules](#-validation-rules)
- [📡 API & Data Flow](#-api--data-flow)
- [🧭 Roadmap Ideas](#-roadmap-ideas)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)

## ✨ Features

- **Dual auth flows** – Switch between register/login views from the Radix navigation menu; each flow dispatches Redux actions, surfaces Sonner toasts, and branches into validation or remote login (`Auth.tsx`).
- **Persistent theming** – A custom provider wraps the app, stores the user’s preference in `localStorage`, and exposes a dropdown Mode Toggle for light/dark/system themes.
- **Redux middlewares** – Thin slices focus on state, while bespoke middlewares handle `getUsers`/`addUser` side-effects against MockAPI, keeping async logic out of components.
- **Accessible UI kit** – Form inputs, dropdowns, navigation menus, and toasts are built on Radix primitives via the shadcn/ui pattern for consistent styling and semantics.
- **Type-safe validation** – Strong regex guards for email, username, and passwords ensure only valid payloads hit the mock backend.

## 🧰 Tech Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 + tw-animate
- Redux Toolkit & React-Redux
- Radix UI + shadcn/ui-inspired components + lucide-react icons
- Sonner for UX-friendly toasts
- MockAPI for remote persistence

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Vite 7 requires modern ESM support)
- npm 9+ (or pnpm/yarn with equivalent scripts)

### Installation

```bash
git clone https://github.com/<your-username>/<repo>.git
cd <repo>
npm install
Running locally
bash

npm run dev          # start Vite on the configured host
npm run lint         # keep the codebase tidy with ESLint
npm run build        # type-check + create the production bundle
npm run preview      # preview the build output locally
Script	Description
npm run dev	Launches Vite dev server with hot module replacement.
npm run lint	Runs ESLint using the shared config and TypeScript support.
npm run build	Builds TypeScript via project references, then bundles with Vite.
npm run preview	Serves the generated dist/ bundle for a quick smoke test.
🗂 Project Structure
text

src/
├─ api/                # Remote helpers (MockAPI based login lookups)
├─ Components/
│  ├─ ui/              # Radix/shadcn-inspired primitives (button, field, etc.)
│  ├─ Form.tsx         # Reusable input/textarea wrapper
│  ├─ Navbar.tsx       # Navigation menu + theme toggle hook
│  └─ theme-provider.tsx
├─ Page/
│  └─ Auth.tsx         # Register/Login container logic
├─ Redux/
│  ├─ middlewares/     # add/get user side-effects
│  ├─ reducers/        # user slice
│  └─ store.ts         # Redux Toolkit store config
├─ Regex/              # Regex catalog + validation helper
└─ Types/              # Form, navbar, and user TypeScript contracts
🧱 Architecture Notes
State driven UI – The root App component wires the Redux store, ThemeProvider, and Toaster so every view can dispatch actions and trigger notifications without prop drilling.
Redux first-class async – Instead of thunks, custom middlewares listen for addUser/getUsers actions and perform fetch calls, keeping component code synchronous and easy to test.
Composable Form inputs – The Form component centralizes label, description, and input behavior so validation or styling changes cascade across all fields.
Local-first theming – Theme preference is loaded synchronously from localStorage, eliminating a flash of incorrect theme when the app mounts.
UI consistency – By relying on the shadcn/ui approach, you get consistent spacing, focus rings, and theming tokens without re-writing primitives.
🔐 Validation Rules
Username – 3–20 characters, no leading/trailing dots, and no sequential separators.
Password – Minimum 8 characters with lowercase, uppercase, numeric, and special character requirements.
Email – Generic RFC-friendly email regex.
Repeat password – Must match the primary password in register mode.
All checks run through formValidation before any Redux addUser dispatch, ensuring only valid data is posted.

📡 API & Data Flow
Mock backend: https://68f0a3aa0b966ad500339b27.mockapi.io/register
getUsers middleware fetches and logs the current registry on start (replace with real persistence when ready).
addUser middleware POSTs sanitized payloads after successful validation.
isLogin helper fetches the remote list and performs credential matching client-side (swap with secure server-side validation for production).
Tip: Extract the base URL into an environment variable (e.g., VITE_API_URL) if you plan to target multiple environments.

🧭 Roadmap Ideas
Replace console logging in middlewares with Redux actions to hydrate local state.
Surface fetched users in a dashboard component with delete/edit flows.
Add integration tests (Vitest + Testing Library) for the Auth form.
Swap client-side credential checking for a proper API call once a backend exists.
Drop in a quick hero section/screenshot for visual context in this README.
🤝 Contributing
Fork the repo and create a feature branch.
Run npm run lint before pushing to keep the CI happy.
Open a PR describing the change, screenshots, and relevant context.
Tag issues with feature, bug, or chore for easy triage.
📝 License
No license has been added yet. Consider choosing one (MIT, Apache 2.0, etc.) before making the repository public.

🙏 Acknowledgements
Radix UI & shadcn/ui for accessible primitives.
Sonner for lightweight toast notifications.
MockAPI for a quick drop-in backend.


The sections above were informed by the existing Auth workflow (`src/Page/Auth.tsx:15`), the local-storage-backed theme provider (`src/Components/theme-provider.tsx:23`), the regex validator (`src/Regex/formValidation.ts:3` plus the patterns in `src/Regex/Regex.ts:1`), and the Redux middlewares powering MockAPI reads/writes (`src/Redux/middlewares/getUserMiddleware.ts:3` and `src/Redux/middlewares/addUserMiddleware.ts:3`). Let me know if you want the README committed directly or tailored with screenshots/demo links.

Next steps:
1. Replace the current `README.md` with the markdown above and push to your repo.
2. Add a screenshot or GIF under the introduction once you have a stable UI state.
