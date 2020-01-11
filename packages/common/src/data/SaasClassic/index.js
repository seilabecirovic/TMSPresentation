import Screenshot1 from '../../assets/image/saasClassic/screen-1.png';

import Routes from '../../assets/image/saasClassic/tms3.png';
import Results from '../../assets/image/saasClassic/tms4.png';
import Analysis from '../../assets/image/saasClassic/tms6.png';
import Statistics from '../../assets/image/saasClassic/tms7.png';
import RealTime from '../../assets/image/saasClassic/tms1.png';

import Planning from '../../assets/image/saasClassic/planning.svg';
import Monitoring from '../../assets/image/saasClassic/monitoring.svg';
import Simulations from '../../assets/image/saasClassic/simulations.svg';
import Reporting from '../../assets/image/saasClassic/reporting.svg';

import { ic_map } from 'react-icons-kit/md/ic_map';
import { clock } from 'react-icons-kit/icomoon/clock';
import { ic_local_shipping } from 'react-icons-kit/md/ic_local_shipping';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { ic_assessment } from 'react-icons-kit/md/ic_assessment';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Application',
    path: '#screenshot_section',
    offset: '0',
  },
  {
    label: 'Effects',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Papers',
    path: '#testimonial_section',
    offset: '0',
  },
];

export const SERVICE_ITEMS = [
  {
    icon: Planning,
    title: 'Route planning'
  },
  {
    icon: Monitoring,
    title: 'Plan execution monitoring'
  },
  {
    icon: Simulations,
    title: 'Providing simulations'
  },
  {
    icon: Reporting,
    title: 'Reporting'
  }
];



export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: 'flaticon-hourglass',
    title: 'App Development',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-trophy-1',
    title: '10 Times Award',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-upload',
    title: 'Cloud Storage',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-settings',
    title: 'Customization',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-strategy',
    title: 'UX Planning',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-conversation',
    title: 'Customer Support',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_map,
    title: 'Routes for vehicles',
    image: Routes,
  },
  {
    icon: clock,
    title: 'Real-time monitoring',
    image: RealTime,
  },
  {
    icon: ic_local_shipping,
    title: 'Detailed reports',
    image: Results,
  },

  {
    icon: ic_assessment,
    title: 'Anomaly detection',
    image: Analysis,
  },
  {
    icon: pieChart,
    title: 'Statistical reports',
    image: Statistics,
  },
];

export const TESTIMONIALS = [
  {
    review: 'An adaptive data-driven approach to solve real-world vehicle routing problems in logistics',
    title:
      'Complexity Journal',
    name: 'Jan 2020',
  },
  {
    review: 'Parameter Setting Problem in the Case of Practical Vehicle Routing Problems with Realistic Constraints',
    title:
      'IEEE, 25th Conference on Knowledge Acquisition and Management (KAM’19 - FedCSIS)',
    name: 'Sep 2019',
  },
  {
    review: 'Innovative GPS Data Anomaly Detection Algorithm inspired by QRS Complex Detection Algorithms in ECG Signals',
    title:
      'IEEE, 18th IEEE International Conference on Smart Technologies (EUROCON 2019)',
    name: 'Jul 2019',
  },
  {
    review: 'Improving Performance of Vehicle Routing Algorithms using GPS Data',
    title:
      'IEEE, 14th Symposium on Neural Networks and Applications (NEUREL 2018)',
    name: 'Nov 2018',
  },
  {
    review: 'Practical Transport Optimization Method and Concept in Pharmaceutical Industry',
    title:
      ' Springer, International Conference on Medical and Biomedical Engineering (CMBEBIH) 2017',
    name: 'Mar 2017',
  },
  {
    review: 'Cluster-based analysis and time-series prediction model for reducing the number of traffic accidents',
    title:
      'IEEE, 59th International Symposium ELMAR 2016',
    name: 'Sep 2016',
  },
];
