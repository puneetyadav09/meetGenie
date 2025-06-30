# 🤖 MeetGenie – Smart AI-Powered Meeting Assistant

MeetGenie is an AI-driven, real-time meeting assistant that transcribes conversations, summarizes discussions, detects action items, and delivers insightful follow-ups — all while your meeting is still in progress. Built for freelancers, startups, and enterprises who want to stop wasting time and start capturing value from every meeting.

---

## 📌 Features

✅ Real-time speech-to-text transcription (Whisper / Google Speech API)  
✅ NLP-powered summarization and action item extraction  
✅ Tone & sentiment analysis of speakers  
✅ Auto-generated meeting minutes & task lists  
✅ Real-time WebSocket feed for transcription updates  
✅ Slack/Email integration for follow-up delivery  
✅ Supabase-powered auth and data storage  
✅ Analytics dashboard for all meetings

---

## 🏗️ Tech Stack

| Layer       | Tech Used |
|-------------|-----------|
| Frontend    | React.js, Tailwind CSS, Socket.IO Client |
| Backend     | Node.js, Express, Socket.IO |
| AI/NLP      | Python, FastAPI, Hugging Face Transformers, Whisper |
| Database    | **Supabase (PostgreSQL + Auth)** |
| DevOps      | Docker, Docker Compose, NGINX, AWS EC2 |
| Realtime    | WebSocket (Socket.IO / FastAPI) |

---

## 🧱 Project Structure

```bash
MeetGenie/
├── frontend/           # React UI with Tailwind
├── backend/            # Node.js backend (API + WebSocket)
├── ai-service/         # FastAPI ML microservice (NLP + Whisper)
├── db/                 # Supabase client & schema
│   └── supabaseClient.js
├── data/               # Audio samples & transcripts
├── deployment/         # Docker, NGINX config
├── docs/               # Architecture, flow diagrams
├── .env                # Environment variables
└── README.md           # You are here
```

---

## ⚙️ Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/MeetGenie.git
cd MeetGenie
```

#### 2. Environment Setup
Create a .env file in each service:

.env in /backend/
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
PORT=5000
```

.env in /ai-service/
```bash
OPENAI_API_KEY=your-openai-api-key
```

.env in /frontend/
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

---

## 🔗 Supabase Setup
1. Go to https://supabase.com
2. Create a new project
3. Set up tables:
   - users: id, email, name
   - meetings: id, user_id, transcript, summary, action_items, created_at
4. Enable authentication (email/password or magic link)
5. Use the provided API keys in .env files

---

## 📦 Install & Run
#### Frontend
```bash
cd frontend
npm install
npm run dev
```

#### Backend
```bash
cd ../backend
npm install
npm run dev
```

#### AI Service
```bash
cd ../ai-service
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

#### Full Stack (Docker)
```bash
cd deployment
docker-compose up --build
```

---

## 🧠 AI Models Used
- Whisper – Real-time transcription
- T5 / BART – Summarization
- Custom NLP – Action item detection
- VADER – Sentiment analysis

---

## 🧪 Workflow
1. User joins meeting (frontend)
2. Audio is streamed/transcribed via WebSocket
3. Backend sends transcript to AI service
4. AI returns summary + action items
5. Supabase stores meeting data
6. Frontend updates in real-time
7. Follow-ups are sent (optional)

---

## 🧰 Future Add-ons
- Multilingual support
- Video recording support (Zoom/GMeet APIs)
- Speaker identification
- Slack/Notion/Google Calendar integration
- Offline .wav upload support

---

## 📬 Contact
#### 📧 Email: puneetyadav.pv@gmail.com
#### 🌐 Portfolio: https://puneet-portfolio-website.vercel.app
#### 📦 GitHub: https://github.com/puneetyadav09
