import { useEffect } from 'react';
import { useNavbarContext } from '../contexts/NavbarContext';

import {
  FaFilter,
  FaCheckCircle,
  FaTimesCircle,
  FaCircle,
} from 'react-icons/fa';

const TransactionHistory = () => {
  const { setCurrentPage } = useNavbarContext();

  useEffect(() => {
    setCurrentPage('transaction-history');
  }, [setCurrentPage]);
  const transactions = [
    {
      service: 'Mtn Airtime VTU 09066503949',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '170456218608503369381796131',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Airtel DATA VTU 07089075584',
      amount: '₦2000.00',
      totalAmount: '₦100.00',
      status: 'Successful',
      paymentMethod: 'Wallet',
      transactionNo: '170456218608503369381796132',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'DSTV 4576432833',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '170456218608503369381796134',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Startime 6543653304',
      amount: '₦4000.00',
      totalAmount: '₦100.00',
      status: 'Failed',
      paymentMethod: 'Card Payment',
      transactionNo: '170456218608503369381796133',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'DSTV 4576432833',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '170456218608503369381796134',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Airtel Airtime VTU 07089075584',
      amount: '₦2000.00',
      totalAmount: '₦100.00',
      status: 'Successful',
      paymentMethod: 'Wallet',
      transactionNo: '170456218608503369381796135',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Airtel Airtime VTU 07089075584',
      amount: '₦2000.00',
      totalAmount: '₦100.00',
      status: 'Successful',
      paymentMethod: 'Wallet',
      transactionNo: '170456218608503369381796135',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Startime 6543653304',
      amount: '₦4000.00',
      totalAmount: '₦100.00',
      status: 'Failed',
      paymentMethod: 'Card Payment',
      transactionNo: '170456218608503369381796133',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'DSTV 4576432833',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '170456218608503369381796134',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'Startime 6543653304',
      amount: '₦4000.00',
      totalAmount: '₦100.00',
      status: 'Failed',
      paymentMethod: 'Card Payment',
      transactionNo: '170456218608503369381796133',
      date: '6th January, 2024, 06:29PM',
    },
    {
      service: 'DSTV 4576432833',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '170456218608503369381796134',
      date: '6th January, 2024, 06:29PM',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Successful':
        return <FaCheckCircle className="text-green-500" />;
      case 'Failed':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaCircle className="text-yellow-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Successful':
        return 'text-green-500';
      case 'Failed':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Filter"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
          $
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="pb-2 font-normal">Service</th>
              <th className="pb-2 font-normal">Amount</th>
              <th className="pb-2 font-normal">Total Amount</th>
              <th className="pb-2 font-normal">Status</th>
              <th className="pb-2 font-normal">Payment Method</th>
              <th className="pb-2 font-normal">Transaction No</th>
              <th className="pb-2 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-3 text-sm">
                  <div className="flex items-center">
                    {getStatusIcon(transaction.status)}
                    <span className="ml-2">{transaction.service}</span>
                  </div>
                </td>
                <td className="py-3 text-sm">{transaction.amount}</td>
                <td className="py-3 text-sm">{transaction.totalAmount}</td>
                <td
                  className={`py-3 text-sm ${getStatusColor(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </td>
                <td className="py-3 text-sm">{transaction.paymentMethod}</td>
                <td className="py-3 text-sm">
                  <div>{transaction.transactionNo}</div>
                  <div className="text-xs text-gray-400">
                    {transaction.date}
                  </div>
                </td>
                <td className="py-3 text-sm">
                  <button className="text-blue-500 hover:underline">
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
