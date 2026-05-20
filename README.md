# Tiles Gallery

A modern, beautiful, and fully functional **Artisanal & Editorial Surfaces Marketplace** built with Next.js.  
Discover your perfect aesthetic, search through premium collections, and manage your custom profile seamlessly.

## About the Project

Tiles Gallery is a dedicated web application designed to showcase a modern curation of premium interior tiles. This platform helps users browse, search, and check out detailed tile specifications online from anywhere easily, saving them from the hassle of visiting physical stores just for browsing. Built with the Next.js App Router and secured with BetterAuth, it delivers a smooth, fast, and fully responsive user experience.

---

## 🔗 Links

* 🌐 **Live Site:** [View Live Site](https://ph-assignment-08-nu.vercel.app/)
* 💻 **GitHub Repo:** [View Github Repo](https://github.com/HSBHasib/PH-ASSIGNMENT-08)

---

## 🛠️ Technologies Used

* **Framework:** Next.js (App Router)
* **Styling & UI:** Tailwind CSS, HeroUI
* **Authentication:** BetterAuth (with MongoDB Adapter & Session state preservation)
* **Slider Integration:** Swiper.js
* **Icons:** Lucide React / React Icons
* **Notifications:** React-Toastify

---

## 📦 Dependencies

* next
* react
* react-dom
* better-auth
* mongodb
* swiper
* tailwindcss
* @heroui/react
* react-toastify
* lucide-react
* react-icon

---

## 🚀 Key Features

### 🏠 Aesthetic Home & Dynamic Marquee
* Features a bold hero section banner with a dynamic scrolling marquee showing new arrivals and weekly featured patterns.
* Showcases the top 4 featured premium tiles fetched directly from the JSON server database structure.

### 🔍 Search Bar & Gallery
* A clean "All Tiles" gallery layout integrated with a large, interactive HeroUI-styled search input at the top.
* Filter and search through the entire collection dynamically by tile title instantly without any page crashes.

### 🖼️ Two-Column Single Tile Details
* Beautiful, responsive layout featuring a large high-resolution tile preview on the left alongside detailed specs (category, price, dimensions, material) on the right.

### 🔐 Secure Authentication Framework
* Fully powered by BetterAuth using a secure MongoDB adapter. Features custom Login/Register routes and a single-tap **Google Social Authentication** system that handles redirection perfectly even on hard page reloads.

### 👨‍💻 Challenge: My Profile Management & Updates
* Access to a private profile dashboard showing logged-in session data.
* Includes an asynchronous information updating route to instantly refresh the user's display name and profile image URL via BetterAuth APIs without breaking UX.

---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone [ https://github.com/HSBHasib/PH-ASSIGNMENT-08.git ]

# Go into the project folder
cd PH-ASSIGNMENT-08

# Setup your Environment Variables (.env)
# BETTER_AUTH_SECRET=your_secret
# MONGODB_URI=your_mongodb_connection_string

# Install dependencies
npm install

# Run the project locally
npm run dev
```

## Developer
* Name: Hasibur Rahman
* GitHub: [HSBHasib](https://github.com/HSBHasib)

