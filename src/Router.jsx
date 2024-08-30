import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { SidebarProvider } from './contexts/SidebarContext'; // Import the context provider
import { NavbarProvider } from './contexts/NavbarContext'; // Import the context provider
import Dashboard from './pages/Dashboard';
import AirtimeToCash from './pages/AirtimeToCash';
import TransactionHistory from './pages/TransactionHistory';
import HelpSupport from './pages/HelpSupport';
import NotFound from './pages/NotFound';
import ProfileSetting from './components/ProfileSetting';
import LoginPage from './pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SidebarProvider>
        <NavbarProvider>
          <Layout />
        </NavbarProvider>
      </SidebarProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile-setting', element: <ProfileSetting /> },
      { path: 'airtime-to-cash', element: <AirtimeToCash /> },
      { path: 'transaction-history', element: <TransactionHistory /> },
      { path: 'help-support', element: <HelpSupport /> },
    ],
  },
]);
