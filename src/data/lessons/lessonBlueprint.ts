import type {
  Lesson,
  LessonChallenge,
  SampleTable,
} from "../../types/learning";

export interface LessonSeed {
  id: string;
  pathId: string;
  moduleId: string;
  title: string;
  description: string;
  xp: number;
  table: SampleTable;
  focus: string;
  exampleQuery: string;
  predictCorrect: string;
  brokenQuery?: string;
  fixedQuery?: string;
  writePrompt?: string;
  writeAnswer?: string;
  explainAnswer?: string;
  missionPrompt?: string;
  missionAnswer?: string;
  reviewHints?: string[];
}

function makeBrokenQuery(query: string) {
  return query
    .replace(/\bSELECT\b/, "SELCT")
    .replace(/\bFROM\b/, "FRM")
    .replace(/\bWHERE\b/, "WHER");
}

export function createLessonFromSeed(seed: LessonSeed): Lesson {
  const fixedQuery = seed.fixedQuery ?? seed.exampleQuery;
  const writeAnswer = seed.writeAnswer ?? seed.exampleQuery;

  const challenges: LessonChallenge[] = [
    {
      id: `${seed.id}-concept`,
      type: "concept",
      title: "Concept",
      prompt: `This lesson focuses on ${seed.focus}. ${seed.description}`,
      query: seed.exampleQuery,
    },
    {
      id: `${seed.id}-sample-table`,
      type: "sample-table",
      title: "Sample Table",
      prompt: `Study the ${seed.table.name} table before practicing ${seed.focus}.`,
      table: seed.table,
    },
    {
      id: `${seed.id}-query-example`,
      type: "query-example",
      title: "Query Example",
      prompt: `Read this SQL example and identify how it uses ${seed.focus}.`,
      query: seed.exampleQuery,
    },
    {
      id: `${seed.id}-predict`,
      type: "predict",
      title: "Predict the Result",
      prompt: "What is the main result of this query?",
      query: seed.exampleQuery,
      options: [
        `A. ${seed.predictCorrect}`,
        "B. It deletes rows from the table",
        "C. It creates a new database user",
        "D. It ignores the table completely",
      ],
      answer: `A. ${seed.predictCorrect}`,
    },
    {
      id: `${seed.id}-debug`,
      type: "debug",
      title: "Fix the Query",
      prompt: `Fix the broken query so it correctly demonstrates ${seed.focus}.`,
      query: seed.brokenQuery ?? makeBrokenQuery(seed.exampleQuery),
      answer: fixedQuery,
      hints: [
        "Check SQL keyword spelling.",
        "Check clause order.",
        "Check commas, parentheses, and aliases.",
      ],
    },
    {
      id: `${seed.id}-write`,
      type: "write",
      title: "Write It Yourself",
      prompt:
        seed.writePrompt ??
        `Write a SQL query that correctly demonstrates ${seed.focus}.`,
      answer: writeAnswer,
      hints: [
        "Start with the main SQL keyword.",
        "Use the sample table as your reference.",
        "Format your query across multiple lines.",
      ],
    },
    {
      id: `${seed.id}-explain`,
      type: "explain",
      title: "Explain the Query",
      prompt: "Explain what this query does in plain English.",
      query: seed.exampleQuery,
      answer:
        seed.explainAnswer ??
        `This query demonstrates ${seed.focus} using the ${seed.table.name} table.`,
    },
    {
      id: `${seed.id}-mission`,
      type: "mission",
      title: "Mini Data Mission",
      prompt:
        seed.missionPrompt ??
        `Complete a realistic data task using ${seed.focus}.`,
      answer: seed.missionAnswer ?? writeAnswer,
    },
    {
      id: `${seed.id}-review`,
      type: "review",
      title: "Review Questions",
      prompt: `Review the key ideas from ${seed.title}.`,
      hints: seed.reviewHints ?? [
        `Explain what ${seed.focus} does.`,
        "Identify where it appears in the SQL query.",
        "Describe one mistake to avoid.",
      ],
    },
  ];

  return {
    id: seed.id,
    pathId: seed.pathId,
    moduleId: seed.moduleId,
    title: seed.title,
    description: seed.description,
    xp: seed.xp,
    status: "Not Started",
    challenges,
  };
}

export function createLessonsFromSeeds(seeds: LessonSeed[]) {
  return seeds.map(createLessonFromSeed);
}
