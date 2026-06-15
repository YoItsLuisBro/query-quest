import { Route, Routes } from "react-router";
import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import PathsPage from "../pages/PathsPage.tsx";
import PathDetailPage from "../pages/PathDetailPage";
import LessonDetailPage from "../pages/LessonDetailPage";
import DailyQueryPage from "../pages/DailyQueryPage";
import PlaygroundPage from "../pages/PlaygroundPage";
import BossBattlesPage from "../pages/BossBattlesPage";
import ProjectsPage from "../pages/ProjectsPage";
import DashboardPage from "../pages/DashboardPage";
import MistakeJournalPage from "../pages/MistakeJournalPage";
import SchemaLibraryPage from "../pages/SchemaLibraryPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/paths" element={<PathsPage />} />
        <Route path="/paths/:pathId" element={<PathDetailPage />} />
        <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="/daily-query" element={<DailyQueryPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/boss-battles" element={<BossBattlesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/mistakes" element={<MistakeJournalPage />} />
        <Route path="/schemas" element={<SchemaLibraryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
