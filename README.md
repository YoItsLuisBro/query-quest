# QUERY//QUEST

**QUERY//QUEST** is a brutalist SQL learning platform built with React, Vite, TypeScript, and TailwindCSS. It teaches SQL through structured learning paths, interactive lesson challenges, query drills, boss battles, schema practice, projects, a SQL playground, automatic review queues, and a personal mistake journal.

The goal of QUERY//QUEST is to make SQL feel like a progression-based training system instead of a static tutorial.

---

## Tech Stack

* React
* Vite
* TypeScript
* TailwindCSS
* React Router
* localStorage for saved progress
* Brutalist dark UI theme

---

## Core Features

### Learning Paths

QUERY//QUEST includes five main difficulty levels:

1. SQL Fundamentals
2. Intermediate SQL
3. Advanced SQL
4. Boss Level SQL
5. Architect Level SQL

Each level contains 20 lessons.

Total lesson count:

```txt
20 Beginner lessons
20 Intermediate lessons
20 Advanced lessons
20 Boss Level lessons
20 Architect Level lessons
100 total lessons
```

Each lesson is available through its own route:

```txt
/lessons/:lessonId
```

---

## Lesson Structure

Every lesson is generated with the same complete learning flow:

```txt
Concept
Sample Table
Query Example
Predict the Result
Fix the Query
Write It Yourself
Explain the Query
Mini Data Mission
Review Questions
```

This keeps every lesson consistent while making the data system easier to scale.

---

## Main Routes

```txt
/                       Home
/paths                  Learning paths and lesson search
/paths/:pathId          Individual path details
/lessons/:lessonId      Lesson detail page
/daily-query            Daily SQL challenge
/playground             SQL playground
/boss-battles           Boss battles
/projects               SQL projects
/schemas                Schema library
/dashboard              Progress dashboard
/mistakes               Review queue and mistake journal
```

---

## Project Structure

```txt
src/
 ├── app/
 │    └── App.tsx
 │
 ├── components/
 │    ├── cards/
 │    │    ├── BossBattleCard.tsx
 │    │    ├── ChallengeCard.tsx
 │    │    ├── LessonCard.tsx
 │    │    ├── LessonSearchCard.tsx
 │    │    ├── MistakeCard.tsx
 │    │    ├── ModuleCard.tsx
 │    │    ├── PathCard.tsx
 │    │    ├── ProjectCard.tsx
 │    │    ├── ReviewQueueCard.tsx
 │    │    └── SchemaCard.tsx
 │    │
 │    ├── layout/
 │    │    ├── AppLayout.tsx
 │    │    └── Navbar.tsx
 │    │
 │    ├── mistakes/
 │    │    ├── UserMistakeCard.tsx
 │    │    └── UserMistakeForm.tsx
 │    │
 │    ├── sql/
 │    │    ├── SchemaDiagram.tsx
 │    │    └── SQLPlayground.tsx
 │    │
 │    └── ui/
 │         ├── BrutalistButton.tsx
 │         ├── PageShell.tsx
 │         ├── ProgressBar.tsx
 │         ├── QueryBlock.tsx
 │         ├── ResetProgressButton.tsx
 │         ├── ResultTable.tsx
 │         ├── SectionHeader.tsx
 │         ├── TerminalPanel.tsx
 │         └── XPBadge.tsx
 │
 ├── data/
 │    ├── bossBattles.ts
 │    ├── dailyChallenges.ts
 │    ├── lessons.ts
 │    ├── mistakes.ts
 │    ├── paths.ts
 │    ├── progress.ts
 │    ├── projects.ts
 │    ├── schemas.ts
 │    │
 │    └── lessons/
 │         ├── advancedLessons.ts
 │         ├── architectLevelLessons.ts
 │         ├── beginnerLessons.ts
 │         ├── bossLevelLessons.ts
 │         ├── intermediateLessons.ts
 │         ├── lessonBlueprint.ts
 │         ├── lessonFactory.ts
 │         └── sharedTables.ts
 │
 ├── hooks/
 │    ├── useChallengeProgressSummary.ts
 │    ├── useLessonProgress.ts
 │    ├── useLocalLearningSummary.ts
 │    ├── useLocalStorage.ts
 │    ├── useReviewQueue.ts
 │    └── useUserMistakes.ts
 │
 ├── pages/
 │    ├── BossBattlesPage.tsx
 │    ├── DailyQueryPage.tsx
 │    ├── DashboardPage.tsx
 │    ├── HomePage.tsx
 │    ├── LessonDetailPage.tsx
 │    ├── MistakeJournalPage.tsx
 │    ├── NotFoundPage.tsx
 │    ├── PathDetailPage.tsx
 │    ├── PathsPage.tsx
 │    ├── PlaygroundPage.tsx
 │    ├── ProjectsPage.tsx
 │    └── SchemaLibraryPage.tsx
 │
 ├── styles/
 │    └── index.css
 │
 ├── types/
 │    └── learning.ts
 │
 ├── utils/
 │    ├── challengeProgress.ts
 │    ├── lessonSearch.ts
 │    ├── ranks.ts
 │    ├── reviewQueue.ts
 │    └── userMistakes.ts
 │
 └── main.tsx
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Favicon Setup

QUERY//QUEST uses a custom `Q//Q` favicon set.

Place the favicon files inside:

```txt
public/
```

Recommended files:

```txt
favicon.ico
favicon.svg
favicon-16x16.png
favicon-32x32.png
favicon-48x48.png
favicon-64x64.png
favicon-128x128.png
favicon-256x256.png
apple-touch-icon.png
android-chrome-192x192.png
android-chrome-512x512.png
site.webmanifest
```

The root `index.html` should include:

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```

---

## Responsive Navbar

The navbar is responsive:

```txt
Desktop:
Full navigation appears at xl screens and above.

Tablet / Mobile:
Navigation collapses into a dropdown menu.
```

This prevents the nav buttons from crowding the screen between tablet and small laptop widths.

---

## Lesson Search Behavior

The `/paths` page includes a lesson search panel.

Search results are hidden by default so the page does not render all 100 lessons immediately.

Behavior:

```txt
Page loads:
Only path cards and search panel are visible.

User clicks Search:
Matching lesson cards appear.

User changes filters:
Results do not update until Search is clicked again.

User clicks Reset Filters:
Inputs reset and search results disappear.
```

Search filters include:

```txt
Keyword
Difficulty
Status
```

---

## Local Progress System

QUERY//QUEST saves challenge progress in `localStorage`.

Saved progress includes:

```txt
Selected multiple-choice options
Typed answers
Completed challenge states
Lesson progress
Earned XP
Rank progress
Review queue state
User-saved mistakes
```

Progress is browser-local. It does not require a backend.

---

## XP and Rank System

Lessons award XP based on completed challenges.

The dashboard calculates:

```txt
Local XP earned
Available lesson XP
Completed lessons
Completed challenges
Current rank
Next rank
XP needed for next rank
```

Current rank is calculated dynamically from local XP.

Rank ladder:

```txt
Rank 1: SELECT Rookie
Rank 2: WHERE Operator
Rank 3: Join Initiate
Rank 4: Aggregate Analyst
Rank 5: Subquery Specialist
Rank 6: CTE Commander
Rank 7: Window Function Warden
Rank 8: Database Architect
```

---

## Review Queue

The Mistake Journal includes an automatic review queue.

The review queue detects:

```txt
Challenges that were started but not completed
Next incomplete challenge per lesson
Saved partial answers
Incomplete lesson progress
```

Each review card links directly back to the lesson.

---

## User-Saved Mistake Journal

Users can manually save SQL mistakes.

Each saved mistake includes:

```txt
Mistake title
Topic
Broken query
Fixed query
Explanation
Created date
```

Saved mistakes are stored in `localStorage`.

Users can delete individual saved mistakes.

---

## SQL Playground

The SQL Playground provides a mock query environment where users can practice SQL-style commands against sample data.

The playground includes:

```txt
Query editor
Run Query button
Reset button
Example queries
Mock results table
Schema preview
```

---

## Schema Library

The Schema Library includes database schema cards and schema diagrams.

Schema cards help users practice reading:

```txt
Tables
Columns
Column types
Relationships
Primary keys
Foreign keys
```

---

## Boss Battles

Boss Battles are larger SQL missions that combine multiple skills.

Examples:

```txt
Student Grade Report
Product Filter Boss
Store Order Investigation
Monthly Sales Summary
High Value Customers
Large Order CTE Boss
Final Query Gauntlet
```

---

## Architect Level

Architect Level lessons focus on advanced SQL thinking:

```txt
Window functions
Ranking reports
Running totals
Normalization
Index strategy
Query plan review
Analytics architecture
Capstone database design
```

---

## Development Notes

### Clear all local challenge progress

Use the reset button on the Dashboard.

This clears:

```txt
Challenge answers
Completed challenge state
Local XP
Rank progress
Review queue state
```

It does not delete the app’s built-in lesson data.

### Clear saved user mistakes

Saved mistakes can be deleted one by one from the Mistake Journal.

---

## Recommended Test Routes

```txt
/
/paths
/paths/sql-fundamentals
/paths/intermediate-sql
/paths/advanced-sql
/paths/boss-level
/paths/architect-level
/lessons/select-basics
/lessons/inner-join-basics
/lessons/cte-basics
/lessons/leaderboard-rankings
/lessons/architect-final-capstone
/daily-query
/playground
/dashboard
/mistakes
```

---

## Build Checklist

Before deploying:

```bash
npm run build
```

Then confirm:

```txt
No TypeScript errors
No ESLint errors
Navbar works on mobile/tablet/desktop
Search results stay hidden until Search is clicked
Lessons appear in every path
Dashboard XP updates after completing challenges
Mistake Journal saves and deletes user mistakes
Favicon appears in browser tab
```

---

## Project Identity

```txt
Name: QUERY//QUEST
Short Name: Q//Q
Theme: Brutalist SQL terminal
Primary colors:
- Slate black
- Cyan
- Violet
- White
- Rose accents
```

QUERY//QUEST is built to make SQL practice feel structured, visual, and game-like while keeping the learning path serious enough for real database skills.
