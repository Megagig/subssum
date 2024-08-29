import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import BuyAirtime from './pages/buyAirtime/BuyAirtime';
import BuyData from './pages/buyData/BuyData';
import TVSubscription from './pages/tvsubscription/TVSubscription';
import PayElectricBill from './pages/payElectricBill/PayElectricBill';
import AirtimeToCash from './pages/airtimeToCash/AirtimeToCash';
import TransactionHistory from './pages/transactionHistory/TransactionHistory';
import HelpSupport from './pages/helpSupport/HelpSupport';
import ErrorPage from './pages/errorpage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'buy-airtime',
        element: <BuyAirtime />,
      },
      {
        path: 'buy-data',
        element: <BuyData />,
      },
      {
        path: 'tv-subscription',
        element: <TVSubscription />,
      },
      {
        path: 'pay-electric-bill',
        element: <PayElectricBill />,
      },
      {
        path: 'airtime-to-cash',
        element: <AirtimeToCash />,
      },
      {
        path: 'transaction-history',
        element: <TransactionHistory />,
      },
      {
        path: 'help-support',
        element: <HelpSupport />,
      },
    ],
  },
]);
