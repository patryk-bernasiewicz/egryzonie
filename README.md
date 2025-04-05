#### Live version https://egryzonie.patrykb.pl/ (contains fake data for now)

---

# eGryzonie

A search engine for veterinary clinics in Poland that specialize, or have doctors specializing in, rodents and exotic pets.

## Description

This is a simple version of a project my fiancé and I have wanted to build for years but lacked the time or skills to pursue. I decided to use it as a learning opportunity to explore Next.js 15 and its App Router, as I haven’t worked with Next.js in over two years.

![eGryzonie Screenshot](https://raw.githubusercontent.com/patryk-bernasiewicz/egryzonie/refs/heads/master/public/screenshot.webp)

## Tech stack used

- Next.js 15
- React 19
- TypeScript
- Tailwind
- Prisma
- next-intl
- SQLite (for now, I'm aiming to switch to MySQL/MariaDB in the nearest future)
- Leaflet for maps

## Installation

- Use latest version of Node.js
- Clone the repository:  
  `git clone https://github.com/patryk-bernasiewicz/egryzonie.git`  
  `cd egryzonie`
- Install dependencies:  
  `npm i`
- Create SQLite database and run migrations:  
  `npx prisma migrate dev`
- Run the dev server:  
  `npm run dev`
- The app is available at http://localhost:3002/ by default

## Usage

### Vets page

Right now you can only browse fake veterinary places, described in `prisma/seed.ts` file. The `/vets` page will ask you for permission to read your geolocation data, and if it's granted, it will show you 5 places closest to you by default, and more if you decide to type something into the search bar.

## Versioning

- **DEV Releases:**  
  Use "DEV-" prefix with fake data for internal testing (e.g., `DEV-0.0.1`). The production version also uses fake data from dev version.

- **Production Releases:**  
  Remove the "DEV-" prefix for the official release (start with `0.0.1`). From here on, we're using real data on production

- **Version Increments:**
  - **Patch:** Bug fixes (`0.0.2`, `0.0.3`, etc.)
  - **Minor:** New, backward-compatible features (`0.1.0`, `0.2.0`, etc.)
  - **Major:** Breaking changes (`1.0.0`, `2.0.0`, etc.)

## Contact

Let me know if this project caught your eye, if you have any tips for me, or just want to talk. My email address is [patryk.bernasiewicz[at]gmail.com](mailto:patryk.bernasiewicz@gmail.com)
