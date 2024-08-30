import React from 'react';
import {
  FaQuestionCircle,
  FaCommentDots,
  FaWhatsapp,
  FaPhone,
  FaExclamationCircle,
  FaStar,
} from 'react-icons/fa';

const HelpSupport = () => {
  const supportItems = [
    {
      icon: <FaQuestionCircle />,
      title: 'Frequently Asked Questions',
      action: 'See FAQ',
      color: 'bg-red-400',
      link: '#',
    },
    {
      icon: <FaCommentDots />,
      title: 'Live Chat',
      action: 'Chat Now',
      color: 'bg-yellow-400',
      link: '#',
    },
    {
      icon: <FaWhatsapp />,
      title: 'Whatsapp',
      action: 'Drop a Message',
      color: 'bg-green-500',
      link: '#',
    },
    {
      icon: <FaPhone />,
      title: 'Phone Call',
      action: 'Call Us',
      color: 'bg-blue-500',
      link: '#',
    },
    {
      icon: <FaExclamationCircle />,
      title: 'Report Our Support',
      action: 'Not Satisfied?',
      color: 'bg-red-400',
      link: '#',
    },
    {
      icon: <FaStar />,
      title: 'Review Our App',
      action: 'Coming Soon',
      color: 'bg-green-500',
      link: '#',
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex items-center p-4">
              <div className={`${item.color} text-white p-3 rounded-lg mr-4`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-500 text-sm hover:underline"
                >
                  {item.action} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSupport;
