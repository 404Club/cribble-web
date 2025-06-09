# 🏆 cribble.dev

> A worldwide leaderboard for AI-powered developers

Beautiful, minimal landing page for the upcoming AI usage tracking platform. Built with Next.js 14, Tailwind CSS, and interactive cursor effects.

## ✨ Features

- 🎨 **Minimal design** with dotted grid background
- 🌟 **Interactive cursor glow effect**
- 📧 **Real-time waitlist collection** via Supabase
- 📊 **Analytics** via Vercel Analytics  
- ⚡ **Fast & responsive** built on Next.js 14
- 🎯 **TypeScript** for type safety

## 🚀 Live Demo

[cribble.dev](https://cribble.dev) (coming soon)

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3.4
- **Database:** Supabase
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel
- **Language:** TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/404Club/cribble-web.git
cd cribble-web/frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🗄️ Database Setup

Run this SQL in your Supabase SQL editor:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow inserts for waitlist" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow reads for waitlist" ON waitlist FOR SELECT USING (true);
```

## 🎯 What is cribble?

cribble is building the ultimate leaderboard for AI-powered developers. Track your usage across ChatGPT, Claude, GitHub Copilot, and 40+ AI tools, then compete with developers worldwide.

- 🏆 **Global rankings** of AI usage
- 📊 **Detailed analytics** and insights  
- 🎮 **Gamified development** experience
- 🌍 **Community-driven** competition

## 🤝 Contributing

We're building in public! Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this for your own projects!

## 🔗 Links

- **Website:** [cribble.dev](https://cribble.dev)
- **Twitter:** [@birdabo404](https://x.com/birdabo404)
- **Creator:** Building solo, backed by no one 😎

---

<div align="center">
  <p><strong>backed by no one.</strong></p>
  <p>Made with ❤️ by developers, for developers</p>
</div>
