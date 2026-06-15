import type {
  Lesson,
  LessonChallenge,
  LessonStatus,
  SampleTable,
} from "../../types/learning";

interface BuildLessonInput {
  id: string;
  pathId: string;
  moduleId: string;
  title: string;
  description: string;
  xp: number;
  status?: LessonStatus;
  table: SampleTable;
  concept: string;
  exampleQuery: string;
  predictPrompt: string;
  predictQuery: string;
  predictOptions: string[];
  predictAnswer: string;
  brokenQuery: string;
  fixedQuery: string;
  debugPrompt: string;
  writePrompt: string;
  writeAnswer: string;
  explainQuery: string;
  explainAnswer: string;
  missionPrompt: string;
  missionAnswer: string;
  reviewPrompt: string;
  reviewHints: string[];
}

export function buildLesson(input: BuildLessonInput): Lesson {
  const challenges: LessonChallenge[] = [
    {
      id: `${input.id}-concept`,
      type: "concept",
      title: "Concept",
      prompt: input.concept,
      query: input.exampleQuery,
    },
    {
      id: `${input.id}-sample-table`,
      type: "sample-table",
      title: "Sample Table",
      prompt: `Study the ${input.table.name} table before working through this lesson.`,
      table: input.table,
    },
    {
      id: `${input.id}-query-example`,
      type: "query-example",
      title: "Query Example",
      prompt: "Read this query and notice the SQL pattern being used.",
      query: input.exampleQuery,
    },
    {
      id: `${input.id}-predict`,
      type: "predict",
      title: "Predict the Result",
      prompt: input.predictPrompt,
      query: input.predictQuery,
      options: input.predictOptions,
      answer: input.predictAnswer,
    },
    {
      id: `${input.id}-debug`,
      type: "debug",
      title: "Fix the Query",
      prompt: input.debugPrompt,
      query: input.brokenQuery,
      answer: input.fixedQuery,
      hints: [
        "Read the SQL from top to bottom.",
        "Check punctuation, keywords, table names, and clause order.",
      ],
    },
    {
      id: `${input.id}-write`,
      type: "write",
      title: "Write It Yourself",
      prompt: input.writePrompt,
      answer: input.writeAnswer,
      hints: [
        "Start with the main SQL keyword for this lesson.",
        "Use the sample table as your guide.",
        "Format the query across multiple lines.",
      ],
    },
    {
      id: `${input.id}-explain`,
      type: "explain",
      title: "Explain the Query",
      prompt: "Explain what this query does in plain English.",
      query: input.explainQuery,
      answer: input.explainAnswer,
    },
    {
      id: `${input.id}-mission`,
      type: "mission",
      title: "Mini Data Mission",
      prompt: input.missionPrompt,
      answer: input.missionAnswer,
    },
    {
      id: `${input.id}-review`,
      type: "review",
      title: "Review Questions",
      prompt: input.reviewPrompt,
      hints: input.reviewHints,
    },
  ];

  return {
    id: input.id,
    pathId: input.pathId,
    moduleId: input.moduleId,
    title: input.title,
    description: input.description,
    xp: input.xp,
    status: input.status ?? "Not Started",
    challenges,
  };
}
