import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLoading from "../components/common/PageLoading";

const HomePage = lazy(() => import("../pages/HomePage"));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
