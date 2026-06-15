# QUERY//QUEST — SQL Learning Platform Prompt

Create a complete learning website called **QUERY//QUEST**, a brutalist SQL programming and database learning platform.

Use the **latest stable versions** of:

- React
- Vite
- TypeScript
- TailwindCSS
- React Router
- Modern npm package setup

Use **React + Vite + TypeScript** as the foundation.

The site should feel like a **dark brutalist database terminal / query training arena** where users learn SQL through active practice, query writing, debugging, schema analysis, boss battles, and project-based progression.

The code should reflect modern React patterns:

- Functional components only
- TypeScript interfaces/types
- Component-based architecture
- Reusable data-driven lesson structures
- Clean folder organization
- TailwindCSS utility-first styling
- Responsive mobile-first layout
- Accessible buttons, cards, forms, and navigation
- No outdated React patterns
- No class components
- No Create React App

---

## Project Name

**QUERY//QUEST**

### Tagline

```txt
Master SQL through queries, schemas, joins, battles, and real data missions.
```

---

## Theme Direction

Create a **brutalist dark database theme** with sharp edges, thick borders, strong contrast, terminal panels, table-grid visuals, and aggressive monospace typography.

The UI should feel like:

```txt
brutalist database terminal
SQL command center
dark query arena
data analyst training console
database RPG
```

Avoid soft SaaS styling. Avoid rounded, pastel, corporate UI.

Use:

- Hard borders
- Blocky cards
- High-contrast database panels
- Monospace typography
- Big uppercase headings
- Terminal-inspired prompts
- Query editor sections
- Data table previews
- Schema diagrams
- XP/progress elements
- Lesson cards that feel like database missions

---

## Color Scheme

Use this color system throughout the app.

This should feel different from SCRIPT//QUEST. Instead of yellow highlights, use **cyan, emerald, and violet** accents for a database-terminal identity.

```ts
const theme = {
  background: "#020617",
  surface: "#0F172A",
  surfaceAlt: "#111827",
  border: "#E2E8F0",
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  muted: "#64748B",

  accent: "#22D3EE",
  accentAlt: "#A78BFA",
  danger: "#F43F5E",
  success: "#10B981",
  warning: "#F59E0B",
  info: "#38BDF8",

  queryBg: "#020617",
  queryBorder: "#334155",
  tableHeader: "#1E293B",
  tableCell: "#0F172A"
};
```

Use Tailwind-friendly design tokens:

```css
--bg: #020617;
--surface: #0f172a;
--surface-alt: #111827;
--border: #e2e8f0;
--text: #f8fafc;
--text-muted: #cbd5e1;
--muted: #64748b;
--accent: #22d3ee;
--accent-alt: #a78bfa;
--danger: #f43f5e;
--success: #10b981;
--warning: #f59e0b;
--info: #38bdf8;
--query-bg: #020617;
--query-border: #334155;
```

Primary visual style:

```txt
navy-black background
white/slate borders
cyan highlights
emerald success states
rose error states
violet advanced/database states
amber warning states
```

---

## App Structure

Create the following main pages:

```txt
Home
Choose Your Path
Path Detail
Lesson Detail
Daily Query
SQL Playground
Boss Battles
Projects
Progress Dashboard
Query Mistake Journal
Schema Library
```

Use React Router for navigation.

---

## Navigation Layout

The main layout should include:

```txt
Top Navigation
 ├── QUERY//QUEST logo
 ├── Paths
 ├── Daily Query
 ├── Playground
 ├── Boss Battles
 ├── Projects
 ├── Schemas
 └── Dashboard
```

On desktop, use a brutalist top nav or sidebar.

On mobile, use a collapsible stacked layout.

---

## Home Page

The Home page should include:

1. Hero section
2. Brief explanation of the SQL learning method
3. Three core actions
4. Featured paths
5. Daily query preview
6. Progress preview
7. Boss battle preview
8. Schema library preview

Hero copy:

```txt
QUERY//QUEST

Learn SQL by writing queries, breaking databases, fixing joins, and solving real data missions.

No passive tutorials. No endless videos. Just tables, queries, bugs, feedback, and mastery.
```

Hero buttons:

```txt
Start SQL Basics
Open Daily Query
Enter SQL Playground
```

Add stat cards:

```txt
4 Learning Paths
40+ Lessons
25+ Query Challenges
10+ Projects
Boss Battles
Schema Library
```

---

## Learning Method Section

Create a section titled:

```txt
THE QUERY LOOP
```

Display the learning method as brutalist cards:

```txt
01. Learn
Tiny SQL concept explanation.

02. Read
Study a sample table and query.

03. Predict
Guess what rows the query returns.

04. Fix
Repair broken SQL syntax or logic.

05. Write
Create your own query from a prompt.

06. Analyze
Explain why the query works.

07. Build
Solve a real data mission.

08. Review
Save weak topics and retry later.
```

---

# Learning Paths

Create the following paths:

---

## 1. SQL Fundamentals

Description:

```txt
Start here. Learn tables, rows, columns, SELECT statements, filtering, sorting, and basic SQL syntax.
```

Modules:

```txt
Module 1: Database Basics
- What a database is
- Tables, rows, and columns
- Primary keys
- Foreign keys
- Records and fields
- Reading a schema

Module 2: SELECT Queries
- SELECT
- FROM
- Selecting specific columns
- Aliases with AS
- DISTINCT
- Basic query formatting

Module 3: Filtering Data
- WHERE
- Comparison operators
- AND, OR, NOT
- BETWEEN
- IN
- LIKE

Module 4: Sorting and Limiting
- ORDER BY
- ASC and DESC
- LIMIT
- OFFSET
- Sorting by multiple columns
- Combining WHERE and ORDER BY

Module 5: Aggregate Basics
- COUNT
- SUM
- AVG
- MIN
- MAX
- Introduction to GROUP BY
```

---

## 2. SQL Joins and Relationships

Description:

```txt
Learn how tables connect using keys, relationships, and joins.
```

Modules:

```txt
Module 1: Table Relationships
- One-to-one relationships
- One-to-many relationships
- Many-to-many relationships
- Primary keys
- Foreign keys
- Join logic

Module 2: Inner Joins
- INNER JOIN
- Joining two tables
- Table aliases
- Selecting columns from joined tables
- Filtering joined data
- Join mistakes

Module 3: Outer Joins
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN concept
- Missing matches
- NULL values in joins
- When to use outer joins

Module 4: Multi-Table Joins
- Joining three tables
- Bridge tables
- Many-to-many joins
- Join order
- Readable formatting
- Debugging complex joins
```

---

## 3. Intermediate SQL

Description:

```txt
Level up with grouping, subqueries, CASE statements, data modification, constraints, and database design.
```

Modules:

```txt
Module 1: Grouping and Aggregation
- GROUP BY
- HAVING
- COUNT with GROUP BY
- SUM with GROUP BY
- AVG with GROUP BY
- Grouping by multiple columns

Module 2: Subqueries
- What a subquery is
- Subqueries in WHERE
- Subqueries in FROM
- Subqueries with IN
- Subqueries with EXISTS
- Common subquery mistakes

Module 3: CASE Statements
- CASE
- WHEN
- THEN
- ELSE
- END
- Creating calculated labels

Module 4: Data Modification
- INSERT
- UPDATE
- DELETE
- Safe updates
- Transactions concept
- Rollback concept

Module 5: Constraints and Design
- NOT NULL
- UNIQUE
- CHECK
- DEFAULT
- Primary key constraints
- Foreign key constraints
```

---

## 4. Advanced SQL

Description:

```txt
Master advanced querying with CTEs, window functions, indexing concepts, performance, normalization, and analytics.
```

Modules:

```txt
Module 1: CTEs
- WITH
- Naming temporary result sets
- Breaking complex queries into steps
- Multiple CTEs
- CTEs vs subqueries
- Readability patterns

Module 2: Window Functions
- OVER
- PARTITION BY
- ROW_NUMBER
- RANK
- DENSE_RANK
- Running totals

Module 3: Advanced Analytics
- Date grouping
- Cohort-style analysis
- Conditional aggregation
- Percentages and ratios
- Top-N queries
- Ranking results

Module 4: Performance Concepts
- Index basics
- Query plans concept
- Filtering before joining
- Avoiding SELECT *
- Large table habits
- Performance anti-patterns

Module 5: Database Design
- Normalization
- First normal form
- Second normal form
- Third normal form
- Denormalization concept
- Designing clean schemas
```

---

# Lesson Detail Page

Every lesson should follow this exact structure:

```txt
Lesson Header
Concept Explanation
Sample Table
Query Example
Predict the Result
Fix the Query
Write the Query
Explain the Query
Mini Data Mission
Review Questions
Next Lesson Button
```

Example lesson data should be stored in TypeScript objects, not hardcoded across many components.

Create lesson data like:

```ts
export type LessonType =
  | "concept"
  | "sample-table"
  | "query-example"
  | "predict"
  | "debug"
  | "write"
  | "explain"
  | "mission"
  | "review";

export interface TableColumn {
  name: string;
  type: string;
}

export interface TableRow {
  id: string;
  values: Record<string, string | number | boolean | null>;
}

export interface SampleTable {
  name: string;
  columns: TableColumn[];
  rows: TableRow[];
}

export interface LessonChallenge {
  id: string;
  type: LessonType;
  title: string;
  prompt: string;
  query?: string;
  answer?: string;
  options?: string[];
  hints?: string[];
  table?: SampleTable;
}

export interface Lesson {
  id: string;
  pathId: string;
  moduleId: string;
  title: string;
  description: string;
  xp: number;
  challenges: LessonChallenge[];
}
```

---

# Example Lesson Content

Create a sample lesson called:

```txt
SELECT Basics
```

Include these challenges:

---

## Concept

```txt
SELECT is used to choose which columns you want to see from a table. FROM tells SQL which table to read from.
```

Query:

```sql
SELECT first_name, last_name
FROM students;
```

---

## Sample Table

Table name:

```txt
students
```

Columns:

```txt
id
first_name
last_name
grade
enrolled
```

Rows:

```txt
1 | Maya  | Chen   | 92 | true
2 | Luis  | Rivera | 85 | true
3 | Nora  | Smith  | 74 | false
4 | James | Cole   | 98 | true
```

---

## Predict the Result

Query:

```sql
SELECT first_name, grade
FROM students;
```

Options:

```txt
A. Shows all columns from students
B. Shows only first_name and grade from students
C. Shows only students with grade above 90
D. Deletes first_name and grade
```

Correct answer:

```txt
B. Shows only first_name and grade from students
```

---

## Fix the Query

Broken query:

```sql
SELECT first_name last_name
students;
```

Expected fix:

```sql
SELECT first_name, last_name
FROM students;
```

Explanation:

```txt
Column names must be separated by commas, and FROM is required before the table name.
```

---

## Write It Yourself

Prompt:

```txt
Write a query that returns the first_name, last_name, and grade columns from the students table.
```

Solution:

```sql
SELECT first_name, last_name, grade
FROM students;
```

---

## Explain the Query

Prompt:

```txt
Explain what this query does.
```

Query:

```sql
SELECT first_name, grade
FROM students
WHERE grade >= 90;
```

Expected explanation:

```txt
This query selects the first_name and grade columns from the students table. It only returns students whose grade is 90 or higher.
```

---

# Daily Query Page

Create a daily practice page with three cards:

```txt
Predict One Result
Fix One Query
Write One Query
```

Add sample challenges.

The Daily Query page should feel like a quick 5-minute SQL workout.

Example:

```sql
SELECT name, price
FROM products
WHERE price > 50;
```

---

# SQL Playground Page

Create a playground page with:

```txt
SQL editor panel
Schema panel
Result table panel
Run Query button
Reset button
Example queries
```

For now, simulate SQL query results using mock data. Do not require a real database.

If implementing real query execution later, explain in comments that SQL execution should be sandboxed.

Visual layout:

```txt
Left: SQL editor
Right: Schema reference
Bottom: Result table
```

---

# Schema Library Page

Create a Schema Library page where users can inspect sample databases.

Create sample schemas:

```txt
School Database
- students
- courses
- enrollments
- teachers

Store Database
- customers
- orders
- order_items
- products

Movie Database
- movies
- actors
- directors
- movie_cast

Finance Database
- accounts
- transactions
- categories
- budgets
```

Each schema card should include:

```txt
Database name
Tables
Relationships
Difficulty
Practice button
```

Example schema relationship:

```txt
students.id → enrollments.student_id
courses.id → enrollments.course_id
```

---

# Boss Battles Page

Create boss battles as larger SQL missions unlocked after paths.

Boss battles:

```txt
Beginner Boss: Student Grade Report
Join Boss: Store Order Investigation
Aggregation Boss: Monthly Sales Summary
Subquery Boss: High Value Customers
Window Function Boss: Leaderboard Rankings
Design Boss: Normalize the Messy Spreadsheet
```

Each boss card should show:

```txt
Difficulty
XP reward
Required skills
Mission description
Start button
Status
```

---

# Projects Page

Create project cards grouped by difficulty.

## Beginner Projects

```txt
Student Report Query Pack
Product Filter Queries
Employee Directory Search
Basic Sales Report
Library Book Lookup
```

## Intermediate Projects

```txt
Store Revenue Dashboard Queries
Customer Order History
Course Enrollment Analysis
Movie Database Explorer
Budget Category Report
```

## Advanced Projects

```txt
Leaderboard Ranking System
Monthly Financial Report
Cohort Retention Analysis
Inventory Performance Analysis
Database Normalization Challenge
```

Each project should include:

```txt
Skills practiced
Estimated difficulty
Starter schema
Required queries
Completion checklist
```

---

# Progress Dashboard

Create a dashboard page with:

```txt
Total XP
Current rank
Completed lessons
Current streak
Weak SQL topics
Boss battles completed
Review queue
Schemas mastered
```

Create mock progress data in TypeScript.

Example ranks:

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

# Query Mistake Journal

Create a Query Mistake Journal page where users can see common SQL mistakes.

Each mistake card should include:

```txt
Mistake title
Broken query
Fixed query
Explanation
Topic
Review button
```

Example mistake:

```txt
Forgot FROM in a SELECT query.
```

Broken:

```sql
SELECT first_name, last_name
students;
```

Fixed:

```sql
SELECT first_name, last_name
FROM students;
```

Explanation:

```txt
FROM tells SQL which table to read data from.
```

Another example mistake:

```txt
Used WHERE instead of HAVING with aggregate results.
```

Broken:

```sql
SELECT department, COUNT(*) AS total_employees
FROM employees
WHERE COUNT(*) > 5
GROUP BY department;
```

Fixed:

```sql
SELECT department, COUNT(*) AS total_employees
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

Explanation:

```txt
WHERE filters rows before grouping. HAVING filters groups after GROUP BY.
```

---

# Components to Create

Create reusable components:

```txt
AppLayout
Navbar
Hero
PathCard
ModuleCard
LessonCard
ChallengeCard
QueryBlock
SQLPlayground
ResultTable
SchemaCard
SchemaDiagram
XPBadge
ProgressBar
BossBattleCard
ProjectCard
MistakeCard
TerminalPanel
BrutalistButton
SectionHeader
```

---

# Suggested Folder Structure

Use this structure:

```txt
src/
 ├── app/
 │    └── App.tsx
 │
 ├── components/
 │    ├── layout/
 │    │    ├── AppLayout.tsx
 │    │    └── Navbar.tsx
 │    │
 │    ├── ui/
 │    │    ├── BrutalistButton.tsx
 │    │    ├── QueryBlock.tsx
 │    │    ├── ProgressBar.tsx
 │    │    ├── ResultTable.tsx
 │    │    ├── SectionHeader.tsx
 │    │    ├── TerminalPanel.tsx
 │    │    └── XPBadge.tsx
 │    │
 │    ├── cards/
 │    │    ├── PathCard.tsx
 │    │    ├── ModuleCard.tsx
 │    │    ├── LessonCard.tsx
 │    │    ├── BossBattleCard.tsx
 │    │    ├── ProjectCard.tsx
 │    │    ├── SchemaCard.tsx
 │    │    └── MistakeCard.tsx
 │    │
 │    └── sql/
 │         ├── SQLPlayground.tsx
 │         ├── SchemaDiagram.tsx
 │         └── TablePreview.tsx
 │
 ├── data/
 │    ├── paths.ts
 │    ├── lessons.ts
 │    ├── projects.ts
 │    ├── bossBattles.ts
 │    ├── mistakes.ts
 │    ├── progress.ts
 │    └── schemas.ts
 │
 ├── pages/
 │    ├── HomePage.tsx
 │    ├── PathsPage.tsx
 │    ├── PathDetailPage.tsx
 │    ├── LessonDetailPage.tsx
 │    ├── DailyQueryPage.tsx
 │    ├── PlaygroundPage.tsx
 │    ├── BossBattlesPage.tsx
 │    ├── ProjectsPage.tsx
 │    ├── DashboardPage.tsx
 │    ├── MistakeJournalPage.tsx
 │    └── SchemaLibraryPage.tsx
 │
 ├── types/
 │    └── learning.ts
 │
 ├── styles/
 │    └── index.css
 │
 ├── main.tsx
 └── vite-env.d.ts
```

---

# Design Requirements

Use brutalist classes like:

```txt
border-2 border-slate-100
bg-slate-950
uppercase
font-mono
shadow-[6px_6px_0px_#22d3ee]
hover:translate-x-1
hover:translate-y-1
transition-transform
```

Buttons should look like hard-edged command buttons.

Cards should have strong borders and offset shadows.

Examples:

```tsx
<button className="border-2 border-slate-100 bg-cyan-300 px-4 py-2 font-mono font-black uppercase text-slate-950 shadow-[4px_4px_0px_#a78bfa] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
  Run Query
</button>
```

```tsx
<section className="border-2 border-slate-100 bg-slate-950 p-6 shadow-[8px_8px_0px_#22d3ee]">
  <p className="font-mono text-sm uppercase text-cyan-300">
    Query Active
  </p>
  <h2 className="mt-2 text-3xl font-black uppercase text-white">
    SQL Fundamentals
  </h2>
</section>
```

Query blocks should look like database terminal panels:

```tsx
<pre className="border-2 border-slate-600 bg-slate-950 p-4 font-mono text-sm text-cyan-200">
  <code>
    SELECT first_name, grade
    FROM students
    WHERE grade &gt;= 90;
  </code>
</pre>
```

Result tables should use strong grid styling:

```txt
bordered cells
uppercase headers
dark table background
cyan header accents
emerald success highlights
rose error states
```

---

# Functionality Requirements

Implement:

```txt
Routing between all pages
Reusable cards
Mock lesson data
Mock progress data
Mock daily query challenges
Mock boss battles
Mock project list
Mock schema library
Mock query mistake journal
Responsive design
Progress bars
XP badges
Lesson status labels
Difficulty labels
Result table previews
Sample schema diagrams
```

Use local mock data first. Do not require a backend.

Prepare the code so a backend or real SQL engine can be added later.

---

# UI Tone

Use strong labels like:

```txt
QUERY ACTIVE
SYNTAX ERROR
JOIN DETECTED
BOSS LOCKED
XP REWARD
SCHEMA LOADED
TABLE SCAN
RESULT SET
REVIEW REQUIRED
DATABASE MISSION
TRAINING MODE
QUERY ARENA
```

Use lesson statuses:

```txt
Not Started
In Progress
Completed
Review Needed
```

Use difficulty statuses:

```txt
Beginner
Intermediate
Advanced
Boss Level
Architect Level
```

---

# Final Deliverable

Generate the full working React + Vite + TypeScript + TailwindCSS project.

Include:

```txt
package.json
vite.config.ts
tsconfig files
Tailwind setup
src folder
all components
all pages
all data files
responsive styling
clean TypeScript types
```

The app should run with:

```bash
npm install
npm run dev
```

The final result should be a polished brutalist SQL learning platform called **QUERY//QUEST** with the full structure described above.

---

# Important Instruction

Do not give me a simplified demo.

Build the full starter application with:

- All pages
- Routing
- Reusable components
- Mock data
- Brutalist styling
- Clean TypeScript
- Responsive layout
- Modern React + Vite + TailwindCSS setup
- SQL lesson data
- Query challenges
- Schema library
- Query result table previews

The code should be clean enough for me to continue building it into a real learning platform.