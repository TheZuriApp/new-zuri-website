import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLoading from "../components/common/PageLoading";

const HomePage = lazy(() => import("../pages/HomePage"));
const PrivacyPolicyPage = lazy(() => import("../pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("../pages/TermsOfServicePage"));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
