import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Package, TrendingUp, AlertTriangle, Globe, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupplyChainAnalytics = () => {
  const solutions = [
    {
      icon: Package,
      title: 'Data Mining & Business Intelligence',
      description: 'AdMyDa Analytics turns raw data into actionable insights that reveal business performance and organizational health. Our team applies proven analytical methods and modern tools—such as Python, R, SQL, Tableau, and Power BI—to power data mining and business intelligence.'
    },
    {
      icon: TrendingUp,
      title: 'Statistics for Business Analytics',
      description: 'AdMyDa Analytics specializes in drawing sound inferences from data and guiding high-stakes decisions under uncertainty through a rigorous, systematic approach. Our statisticians and domain SMEs apply advanced analytical techniques to deliver clear, defensible conclusions.'
    },
    {
      icon: Truck,
      title: 'Operations & Supply Chain Analytics',
      description: 'Data-driven supply chain and operational analytics are more critical than ever, giving organizations a clear competitive edge. AdMyDa Analytics supports end-to-end functions including order management, inventory, logistics, warehousing, procurement, manufacturing, lean operations, and customer service.'
    },
    {
      icon: BarChart3,
      title: 'Spreadsheet Modelling',
      description: 'AdMyDa Analytics builds robust spreadsheet models for supply chain needs—warehouse, logistics, freight, service fill, forecasting, and inventory. We develop in VBA, SQL, and web-based platforms, integrating scenarios, business rules, decision points, and controls for reliable performance.'
    },
    {
      icon: TrendingUp,
      title: 'Time Series Models',
      description: 'AdMyDa Analytics’ time-series work centers on three goals: forecasting, modeling, and characterization. Our iterative approach, refined over many projects, enables precise identification of outliers and robust, reliable results.'
    },
    {
      icon: BarChart3,
      title: 'Financial & Marketing Analytics',
      description: 'At AdMyDa Analytics, high-stakes decisions are grounded in data—finance for organizational choices and marketing for customer growth. We deliver ROI/ROA analysis, general ledger insights, supply-chain and employee cost modeling, supplier performance analytics, customer acquisition cost, retention cost, and more.'
    }
  ];

  const metrics = [
    { value: '30%', label: 'Inventory Cost Reduction' },
    { value: '25%', label: 'Delivery Time Improvement' },
    { value: '40%', label: 'Demand Forecast Accuracy' },
    { value: '50%', label: 'Risk Mitigation Efficiency' }
  ];

  const caseStudies = [
    {
      title: 'Global Manufacturing Company',
      challenge: 'Complex multi-tier supply chain with frequent disruptions and high inventory costs',
      solution: 'Implemented end-to-end supply chain analytics with predictive risk management',
      result: '35% reduction in inventory costs, 45% improvement in on-time delivery'
    },
    {
      title: 'E-commerce Retailer',
      challenge: 'Demand volatility and inefficient warehouse operations',
      solution: 'Deployed demand forecasting and inventory optimization analytics',
      result: '28% improvement in forecast accuracy, 22% reduction in stockouts'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Supply Chain Analytics Solutions - AdMyDa Analytics</title>
        <meta name="description" content="Optimize your supply chain operations with advanced analytics. Improve demand forecasting, inventory management, and operational efficiency." />
      </Helmet>

      {/* Hero Section */}
      <section className="supply-chain-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Truck className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Supply Chain Analytics
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-900">
              Transform your supply chain operations with intelligent analytics. Optimize inventory, 
              reduce costs, and improve delivery performance with data-driven insights.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                Optimize Your Supply Chain
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end analytics solutions covering every aspect of your supply chain operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-gradient-to-r from-pink-500 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Analytics Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Data Integration', desc: 'Connect all supply chain data sources for comprehensive visibility' },
                  { step: '2', title: 'Analytics Modeling', desc: 'Apply advanced algorithms for forecasting and optimization' },
                  { step: '3', title: 'Insights Generation', desc: 'Generate actionable insights and recommendations' },
                  { step: '4', title: 'Implementation', desc: 'Deploy solutions and monitor performance improvements' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt="Supply chain analytics dashboard showing logistics and inventory data"
               src="https://images.unsplash.com/photo-1611154376393-dc7c3f518fc8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="supply-chain-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-gray-900">
              Transform your supply chain operations with our proven analytics solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                  Start Optimization
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                  View Training Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SupplyChainAnalytics;