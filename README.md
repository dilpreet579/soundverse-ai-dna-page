# Soundverse AI DNA Page

This project features a modern multi-step creation flow, FastAPI backend, PostgreSQL database, and a Next.js/React frontend with advanced audio playback and a beautiful UI.

## Features

- **Multi-step DNA Creation Flow**: Upload audio, set DNA sensitivity, create a profile, tag/categorize, and publish.
- **Suggested DNA Artists**: Discover and preview recommended DNA artists with Howler.js-powered audio playback.
- **Profile Summary & Publish**: Review your DNA profile and publish it to the backend.
- **FastAPI Backend**: RESTful API for artist data, PostgreSQL integration, and CORS enabled for local dev.
- **Modern Next.js Frontend**: Fully responsive, pixel-perfect UI using Tailwind CSS and custom fonts.

## Project Structure

```
├── backend
│   ├── app
│   │   ├── main.py          # FastAPI entry point & endpoints
│   │   ├── models.py        # SQLAlchemy models (DNAArtist)
│   │   ├── schemas.py       # Pydantic schemas
│   │   ├── crud.py          # DB CRUD logic
│   │   ├── database.py      # DB config (PostgreSQL)
│   │   └── seed.py          # Dummy data seeding
│   ├── requirements.txt     # Python dependencies
│   └── docker-compose.yml   # For running PostgreSQL
├── frontend
│   ├── src
│   │   ├── app
│   │   │   └── dna-making   # Main DNA creation pages & steps
│   │   ├── components       # UI components (Sidebar, Steps, etc.)
│   │   └── globals.css      # Tailwind/global styles
│   ├── public               # Static assets (images, logo, avatar)
│   └── package.json         # JS dependencies
└── reference-images         # Design references
```

## Getting Started

### Prerequisites
- **Node.js** (v18+ recommended)
- **Python** (3.10+ recommended)
- **Docker** (for PostgreSQL DB)

### Backend Setup (FastAPI)
1. **Install Python deps:**
    ```bash
    cd backend
    python -m venv .venv
    .venv/Scripts/activate  # Windows
    pip install -r requirements.txt
    ```
2. **Start PostgreSQL:**
    ```bash
    docker-compose up -d
    ```
3. **Set up .env:**
    - Copy `.env.example` to `.env` and fill in your DB credentials (see `docker-compose.yml` for defaults).
4. **Seed dummy data:**
    ```bash
    python app/seed.py
    ```
5. **Run FastAPI server:**
    ```bash
    uvicorn app.main:app --reload
    ```

### Frontend Setup (Next.js)
1. **Install JS deps:**
    ```bash
    cd frontend
    npm install
    ```
2. **Configure API URL:**
    - Create a `.env` file in the `frontend` directory (or use `.env.example`).
    - Set the backend API base URL:
      ```env
      NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
      ```
    - This will be used in your frontend code for all API calls.
3. **Run dev server:**
    ```bash
    npm run dev
    ```
    - App runs at [http://localhost:3000](http://localhost:3000)
    - Backend API should be running at [http://localhost:8000](http://localhost:8000)

## Usage
1. Go to `/dna-making` to start the DNA creation flow.
2. Complete each step: upload audio, set sensitivity, fill profile, tag, and publish.
3. Preview suggested DNA artists and play audio with Howler.js.
4. On Step 5, publish your DNA profile (API integration required for full publish).

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repo.
3. Set the **Root Directory** to `frontend`.
4. In Vercel dashboard, add the environment variable:
    - `NEXT_PUBLIC_API_URL` set to your deployed backend URL (from Render)
5. Deploy. Your site will be live at `https://your-vercel-project.vercel.app`.

### Backend (Render)
1. Push your code to GitHub.
2. Go to [render.com](https://render.com/) and create a new **Web Service**.
3. Set the **Root Directory** to `backend`.
4. Build command: `pip install -r requirements.txt`
5. Start command: `uvicorn app.main:app --host 0.0.0.0 --port 10000`
6. Add environment variable `DATABASE_URL` with your Render PostgreSQL connection string.
7. Deploy. Copy your backend URL for use in the frontend.

### CORS
- Make sure your backend CORS settings allow your Vercel domain.

## Tech Stack
- **Frontend:** Next.js 14, React 18, Tailwind CSS, Howler.js, TypeScript
- **Backend:** FastAPI, SQLAlchemy, PostgreSQL, Pydantic
- **Dev Tools:** Docker, VSCode, Git

## Customization & Extending
- Update dummy artist data in `backend/app/seed.py`.
- Add new profile fields or steps by editing the React components in `frontend/src/components/dna-making/steps`.
- Wire up global state (Context/Zustand/Redux) for cross-step data sharing.
- Add image upload logic and connect publish button to backend.

## Screenshots

### Home Page
<img src="screenshots/Home%20Page.png" alt="Home Page" height="230" />

### Step 1: Upload Audio
<img src="screenshots/Step1%20Upload%20Audio.png" alt="Step 1 Upload Audio" height="230" />

### Step 2: DNA Sensitivity
<img src="screenshots/Step2%20DNA%20Senstivity.png" alt="Step 2 DNA Sensitivity" height="230" />

### Step 3: Profile Creation
<img src="screenshots/Step3%20Profile%20Creation.png" alt="Step 3 Profile Creation" height="230" />

### Step 4: Tagging
<img src="screenshots/Step4%20Tagging.png" alt="Step 4 Tagging" height="230" />

### Step 5: Publish
<img src="screenshots/Step5%20Publish.png" alt="Step 5 Publish" height="230" />

### Suggested Artists
<img src="screenshots/Suggested%20Artists.png" alt="Suggested Artists" height="230" />

## License
MIT

---

**Made with ❤️ for the Soundverse AI DNA challenge.**
