# 🧬 Project Overview

This project is a **React** application built with **TypeScript**, using **Vite** as the development server and bundler. It integrates a robust tech stack featuring **Redux**, **React Router**, and **Material-UI**, delivering a modular and scalable codebase for building responsive user interfaces.

---

## 📁 Project Structure

src/
├── components/ # Reusable UI components (forms, inputs, loaders, etc.)
├── enums/ # Enum definitions (e.g., ROUTES_PATH, APP_THEMES)
├── hooks/ # Custom React hooks (e.g., useMount, useModalHandler)
├── models/ # TypeScript models (e.g., PokemonInfo)
├── modules/ # Feature-specific modules (website, Pokémon)
├── utils/ # Utility functions (e.g., formattedThreeDigits)

---

## 🎮 Pokémon Module Overview

The **Pokémon module** is a self-contained feature that provides a way to explore detailed information about different Pokémon. It includes multiple components, hooks, and utility functions to enhance user experience.

### 🔑 Key Features

#### 📋 Pokémon List

- Displays a list of Pokémon.
- Includes pagination and load more for easy navigation.

#### 🧾 Pokémon Card

- Shows a Pokémon's name, type, and brief description.

#### 📊 Pokémon Info Card

- Displays detailed data: stats, moves, and evolution chain.

#### 📇 Pokémon Pagination

- Enables pagination through multiple result pages.

#### 📥 Pokémon Load More

- Fetches and appends more Pokémon to the existing list.

---

## 🛠️ Services & Utilities

- **`useGetPokemons`** – Custom hook to fetch a list of Pokémon from the API.
- **`useGetPokemon`** – Custom hook to fetch details about a specific Pokémon.
- **`pokemonApi`** – Utility for making API calls to the Pokémon API.

---

## 📦 Libraries & Dependencies

| Library            | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `react`            | Core library for building UI             |
| `react-dom`        | DOM rendering for React                  |
| `react-router-dom` | Client-side routing                      |
| `@mui/material`    | Material UI components & styling         |
| `axios`            | Promise-based HTTP client for API calls  |
| `@reduxjs/toolkit` | Redux toolkit for state management       |
| `framer-motion`    | Animation library for smooth transitions |
| `sass`             | CSS preprocessor for styling             |
| `react-query`      | Data fetching library                    |

---

## running the app

first install dependencies with `npm install` then run `npm run dev`

---

## 🚀 Deployment

The application is deployed using **Vercel**. You can access it at `https://pok-mon-swart.vercel.app/`

---
