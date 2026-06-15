export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Boss Level"
  | "Architect Level";

export type LessonStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Review Needed";

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

export interface SchemaTable {
  name: string;
  columns: TableColumn[];
}

export interface SchemaRelationship {
  from: string;
  to: string;
}

export interface SchemaDatabase {
  id: string;
  name: string;
  difficulty: Difficulty;
  description: string;
  tables: SchemaTable[];
  relationships: SchemaRelationship[];
}

export interface BossBattleStage {
  id: string;
  title: string;
  objective: string;
  prompt: string;
  starterQuery: string;
  solution: string;
  hints: string[];
  successCriteria: string[];
}

export interface BossBattle {
  id: string;
  title: string;
  difficulty: Difficulty;
  xp: number;
  requiredSkills: string[];
  description: string;
  status: "Locked" | "Unlocked" | "Completed";
  enemyName: string;
  scenario: string;
  tables: string[];
  stages: BossBattleStage[];
}

export interface Project {
  id: string;
  title: string;
  difficulty: Difficulty;
  skills: string[];
  starterSchema: string;
  requiredQueries: string[];
  checklist: string[];
}

export interface ProgressData {
  totalXp: number;
  currentRank: string;
  completedLessons: number;
  currentStreak: number;
  weakTopics: string[];
  bossBattlesCompleted: number;
  reviewQueue: string[];
  schemasMastered: string[];
}

export interface QueryMistake {
  id: string;
  title: string;
  brokenQuery: string;
  fixedQuery: string;
  explanation: string;
  topic: string;
}

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
  status: LessonStatus;
  challenges: LessonChallenge[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: {
    id: string;
    title: string;
    status: LessonStatus;
    xp: number;
  }[];
  topics: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  accent: "cyan" | "emerald" | "violet" | "amber" | "rose";
  totalLessons: number;
  completedLessons: number;
  xp: number;
  modules: Module[];
}
