import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const Societies = lazy(() => import('./pages/Societies').then((m) => ({ default: m.Societies })));
const Events = lazy(() => import('./pages/Events').then((m) => ({ default: m.Events })));
const AI = lazy(() => import('./pages/AI').then((m) => ({ default: m.AI })));

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-neon-cyan border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PageWrapper>
                    <Dashboard />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="societies"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PageWrapper>
                    <Societies />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="events"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PageWrapper>
                    <Events />
                  </PageWrapper>
                </Suspense>
              }
            />
            <Route
              path="ai"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <PageWrapper>
                    <AI />
                  </PageWrapper>
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
