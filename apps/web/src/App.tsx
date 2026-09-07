import { Route,Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ExpertsPage } from './pages/ExpertsPage';
import { ToolsPage } from './pages/ToolsPage';
import { ToolWorkbenchPage } from './pages/ToolWorkbenchPage';
import { ChatPage,ExpertDetailPage } from './pages/ConsultPages';
import { BlogPage,BlogPostPage,CelebritiesPage,CelebrityDetailPage,DailyPage } from './pages/ResearchPages';
import { CoursePage,ProductDetailPage,ReadingPage,ReportDetailPage,ReportsPage,StorePage } from './pages/CommercePages';
import { AccountPage,ConsultationsPage,DashboardPage,ExpertPortalPage,SignInPage,WalletPage } from './pages/AccountPages';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App(){return <Routes><Route element={<Layout/>}>
  <Route index element={<HomePage/>}/>
  <Route path="experts" element={<ExpertsPage/>}/><Route path="experts/:id" element={<ExpertDetailPage/>}/><Route path="chat/:expertId" element={<ChatPage/>}/>
  <Route path="tools" element={<ToolsPage/>}/><Route path="tools/:id" element={<ToolWorkbenchPage/>}/>
  <Route path="daily" element={<DailyPage/>}/>
  <Route path="celebrities" element={<CelebritiesPage/>}/><Route path="celebrities/:id" element={<CelebrityDetailPage/>}/>
  <Route path="reports" element={<ReportsPage/>}/><Route path="reports/:id" element={<ReportDetailPage/>}/>
  <Route path="store" element={<StorePage/>}/><Route path="store/:id" element={<ProductDetailPage/>}/>
  <Route path="blog" element={<BlogPage/>}/><Route path="blog/:slug" element={<BlogPostPage/>}/>
  <Route path="reading" element={<ReadingPage/>}/><Route path="course" element={<CoursePage/>}/>
  <Route path="dashboard" element={<DashboardPage/>}/><Route path="account" element={<AccountPage/>}/><Route path="consultations" element={<ConsultationsPage/>}/><Route path="wallet" element={<WalletPage/>}/><Route path="expert-portal" element={<ExpertPortalPage/>}/><Route path="sign-in" element={<SignInPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Route></Routes>}
