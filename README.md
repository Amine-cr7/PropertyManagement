# PropertyPulse

A full stack property rental listing app. Users can browse, post and bookmark properties, view them on a map, and message owners directly.

🌐 **Live:** [property-management-lilac.vercel.app](https://property-management-lilac.vercel.app)

---

## What I built

Built this to practice Next.js App Router with server actions — no separate backend, everything talks to MongoDB directly through server actions.

Users can:
- Sign in with Google via NextAuth
- Browse and search properties by location and type
- View properties on an interactive map with amenities details
- Bookmark properties to save for later
- Message property owners directly
- Add and manage their own listings with photo uploads
- Share listings on social media

---

## Tech

- **Next.js** (App Router + Server Actions)
- **Tailwind CSS**
- **MongoDB / Mongoose**
- **NextAuth** — Google OAuth
- **Cloudinary** — image uploads
- **Leaflet / React Leaflet** — interactive maps
- **react-photoswipe-gallery** — photo gallery
- **react-share** — social sharing

---

## Run locally

```bash
git clone https://github.com/amine-laouraidi/PropertyManagement.git
cd PropertyManagement
npm install
npm run dev
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_LOCATIONIQ_KEY=your_locationiq_key
MONGODB_URI=your_mongodb_uri
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Notes

This is a portfolio project — still a work in progress. Feedback is welcome.