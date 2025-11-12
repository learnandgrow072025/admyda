import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              AdMyDa Analytics Pvt Ltd
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge analytics solutions and comprehensive training programs to drive data-driven decision making.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <span>analytics@admyda.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 99805 07690</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Analytics</span>
            <ul className="space-y-2">
              <li>
                <Link to="/analytics/healthcare" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare Analytics
                </Link>
              </li>
              <li>
                <Link to="/analytics/supply-chain" className="text-gray-300 hover:text-white transition-colors">
                  Supply Chain Analytics
                </Link>
              </li>
              <li>
                <Link to="/analytics/automotive" className="text-gray-300 hover:text-white transition-colors">
                  Automotive Analytics
                </Link>
              </li>
              <li>
                <Link to="/analytics/others" className="text-gray-300 hover:text-white transition-colors">
                  Other Industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Company</span>
            <ul className="space-y-2">
              <li>
                <Link to="/training" className="text-gray-300 hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Begur Main Road, Hongasandra, Bangalore, India</span>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
				href="https://www.linkedin.com/in/admydaanalytics"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="AdMyDa Analytics on LinkedIn"
				className="inline-flex"
			  >
				<Linkedin className="h-5 w-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
			  </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 AdMyDa Analytics Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;