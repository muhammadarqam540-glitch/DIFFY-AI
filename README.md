# Diffy AI 🎓

> **"Understand the Difference. Master the Knowledge."**

**Diffy AI** is a premium, intelligent, AI-powered educational comparison platform. It acts as a personal AI teacher that helps students understand the differences between academic subjects, concepts, theories, technologies, historical events, scientific processes, and educational topics.

Instead of behaving like an ordinary chatbot, Diffy AI transforms every comparison into a **structured, interactive, visually rich educational lesson**.

---

## 🌟 Key Features

### 1. First-Time User Experience (Onboarding)
- Personalized welcoming experience: *"Welcome to Diffy AI — Your personal AI teacher. Discover, compare, and understand anything."*
- User name prompt with dynamic AI teacher response.
- Learning level selection (Beginner, Intermediate, Advanced) and persistent preferences.

### 2. Main Dashboard & Discovery
- **Personalized Greeting**: *"Hello, [Name]! What would you like to learn today?"*
- **Intelligent Comparison Search**: Natural-language query parsing (e.g., *"difference between AI and ML"*, *"RAM vs ROM"*, *"CS vs DS vs SE"*).
- **10 Popular Comparison Categories** with custom visual design:
  1. Science & Technology
  2. Computer Science & IT
  3. History & Politics
  4. Business & Economics
  5. Religion & Philosophy
  6. Mathematics
  7. Psychology
  8. Biology
  9. Physics
  10. Geography
- **Trending Comparisons**: 1-click launch for high-yield lessons (DNA vs RNA, Democracy vs Dictatorship, Capitalism vs Socialism, etc.).

### 3. Complete Structured Educational Lessons (Sections A – H)
Every lesson is systematically divided into 8 distinct academic sections:
- **SECTION A: INTRODUCTION**: Definitions, origins/background, main purposes, beginner analogies.
- **SECTION B: SIDE-BY-SIDE COMPARISON**: Interactive multi-column comparison table comparing dimensions: Definition, Purpose, Characteristics, Features, Working mechanism, Advantages, Disadvantages, Applications, Examples, Key differences.
- **SECTION C: VISUAL EXPLANATION & ARCHITECTURE**: Visual concept diagrams, node hierarchies, and sequential process flows.
- **SECTION D: MAIN DIFFERENCES**: Highlighted visual cards with headings, explanations, icons, and practical examples.
- **SECTION E: SIMILARITIES & COMMON GROUND**: Interactive Venn diagram highlighting domain-specific traits and common ground.
- **SECTION F: REAL-LIFE EXAMPLES**: Concrete analogies from everyday life, technology, and society.
- **SECTION G: ADVANTAGES & DISADVANTAGES**: Visually separated dual/multi-column strengths and weaknesses analysis.
- **SECTION H: FINAL BALANCED VERDICT**: Nuanced, context-based conclusion and memorization golden rules.

### 4. Adaptive AI Teacher Personality
- **3 Adaptive Learning Levels**: Beginner (analogies & plain language), Intermediate (balanced detail), Advanced (academic rigor & formal terminology). Live instant level switching!
- **"Explain It More Simply" (ELIF)** toggle on any lesson.
- **"Ask Your Teacher" Interactive Drawer**: Ask follow-up questions directly within the comparison without losing context.
- **Text-to-Speech Narration**: Friendly voice audio reader powered by Web Speech Synthesis.

### 5. Short AI-Generated Educational Animations
- **15–45s Educational Simulations**: Custom dynamic SVG/Canvas animations:
  - *RAM vs ROM*: Live circuit data flow with power loss simulation demonstrating volatile vs non-volatile memory.
  - *DNA vs RNA*: Double helix unzipping, RNA polymerase transcription, and Uracil substitution.
  - *Procedural Engine*: Dynamic state diagram animations for custom queries.
- **Interactive Player**: Play, Pause, Replay, Timeline Scrubber (0:00 - 0:30), Speed (1x, 1.5x), Subtitles & Voice Narration.
- **Modular AI Video Generation System**: Architecture supporting external providers (Runway, Luma, Pika, Replicate) with authentic status tracking (`queued` → `storyboard` → `keyframes` → `encoding` → `ready`).

### 6. Interactive Learning & Assessment
- **Knowledge Quiz**: 3–5 MCQs with instant feedback (correct in emerald green with explanation, incorrect in red with hints), scoring, and retry.
- **3D Flippable Flashcards**: Interactive revision cards for fast memorization.
- **"What Did You Learn?"**: Key takeaway summary checklist.

### 7. User Profile, Saved Lessons & Learning History
- **Saved Comparisons**: Bookmark lessons for later revision.
- **Learning History**: Track visited lessons with timestamps and 1-click reopen.
- **Profile & Settings**: Edit user name, default learning level, dark/light theme, and configure optional Google Gemini API keys.

---

## 🚀 How to Run Diffy AI

### Prerequisites
Node.js (v18+) is installed on your machine.

### Start the Platform
Open a terminal in the `Diffy-AI` directory and run:

```bash
node server.js
```

Then open your browser and navigate to:
```
http://localhost:3000
```

### Optional: Google Gemini API Configuration
Diffy AI comes out of the box with an extensive pre-computed library covering all 10 categories and a procedural comparative heuristics engine that works 100% offline.

To enable live Google Gemini AI generation for any arbitrary topic:
1. Open **Profile & Settings** (click your profile pill in the top navigation).
2. Enter your **Google Gemini API Key** (`AIzaSy...`).
3. Or set it in your environment:
   ```bash
   set GEMINI_API_KEY="your-gemini-api-key"
   node server.js
   ```

---

## 📱 Cross-Platform Responsive Design
- Optimized for **Desktop, Laptop, Tablet, Android devices, and iPhones**.
- Touch-friendly controls, responsive grid breakpoints, and glassmorphic card layouts.
- Sophisticated **Dark Navy/Purple Theme** and **Clean Light Theme**.
