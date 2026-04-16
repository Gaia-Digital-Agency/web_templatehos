import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Providers } from './providers'
import { Layout } from './layout/Layout'
import { PageDataContext } from './hooks/usePageData'

// Pages
import { HomePage } from './pages/HomePage'
import { DynamicPage } from './pages/DynamicPage'
import { PostsPage } from './pages/PostsPage'
import { PostPage } from './pages/PostPage'
import { PostsPaginatedPage } from './pages/PostsPaginatedPage'
import { ServicePage } from './pages/ServicePage'
import { ServicesListPage } from './pages/ServicesListPage'
import { SearchPage } from './pages/SearchPage'
import { NotFoundPage } from './pages/NotFoundPage'
// Templategen-specific static pages
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import CareerPage from './pages/CareerPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
// Portal pages
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import CalendarPage from './pages/CalendarPage'
import EmailPage from './pages/EmailPage'

interface AppProps {
  initialData?: Record<string, any>
  draft?: boolean
}

export const App: React.FC<AppProps> = ({ initialData, draft }) => {
  const [pageData, setPageData] = useState<Record<string, any> | undefined>(initialData)
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip the very first render — initialData from SSR is already correct
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    // Fetch fresh data for this URL on client-side navigation
    const url = location.pathname + location.search
    fetch(`/api/page-data?url=${encodeURIComponent(url)}`)
      .then(r => r.json())
      .then(data => setPageData(data))
      .catch(() => {/* keep previous data on error */})
  }, [location.pathname, location.search])

  return (
    <PageDataContext.Provider value={pageData}>
      <Providers>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/page/:pageNumber" element={<PostsPaginatedPage />} />
            <Route path="/posts/:slug" element={<PostPage />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/:slug" element={<DynamicPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Providers>
    </PageDataContext.Provider>
  )
}
