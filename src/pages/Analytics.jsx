import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Truck, Car, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Analytics = () => {
  const analyticsVerticals = [
    {
      title: 'Healthcare Analytics',
      description: 'Transform patient care and operational efficiency with advanced healthcare analytics solutions.',
      icon: Heart,
      path: '/analytics/healthcare',
      gradient: 'healthcare-gradient',
      features: ['Patient Outcome Analysis', 'Operational Efficiency', 'Cost Optimization', 'Predictive Modeling']
    },
    {
      title: 'Supply Chain Analytics',
      description: 'Optimize your supply chain operations with real-time insights and predictive analytics.',
      icon: Truck,
      path: '/analytics/supply-chain',
      gradient: 'supply-chain-gradient',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Risk Management', 'Performance Tracking']
    },
    {
      title: 'Automotive Analytics',
      description: 'Drive innovation in the automotive industry with comprehensive data analytics solutions.',
      icon: Car,
      path: '/analytics/automotive',
      gradient: 'automotive-gradient',
      features: ['Manufacturing Analytics', 'Quality Control', 'Predictive Maintenance', 'Customer Insights']
    },
    {
      title: 'Other Industries',
      description: 'Customized analytics solutions for retail, finance, manufacturing, and more industries.',
      icon: Building2,
      path: '/analytics/others',
      gradient: 'others-gradient',
      features: ['Custom Solutions', 'Industry Expertise', 'Scalable Platforms', 'ROI Optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Analytics Solutions - AdMyDa Analytics</title>
        <meta name="description" content="Comprehensive analytics solutions for healthcare, supply chain, automotive, and other industries. Transform your business with data-driven insights." />
      </Helmet>

      {/* Hero Section */}
      <section className="analytics-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Analytics Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of your data with our industry-specific analytics solutions. 
              From healthcare to automotive, we provide tailored insights that drive real business results.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold">
                Start Your Analytics Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Analytics Verticals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Analytics Verticals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsVerticals.map((vertical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${vertical.gradient} p-6`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                      <vertical.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{vertical.title}</h3>
                  </div>
                  <p className="text-white text-opacity-90 mb-4">
                    {vertical.description}
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {vertical.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link to={vertical.path}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Analytics Solutions?
              </h2>
              <div className="space-y-6">
                {[
                  'Industry-specific expertise and deep domain knowledge',
                  'Advanced machine learning and AI-powered insights',
                  'Real-time dashboards and automated reporting',
                  'Scalable solutions that grow with your business',
                  'Proven ROI with measurable business outcomes'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
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
                alt="Analytics team working on data visualization and business intelligence"
               src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our analytics solutions can transform your business operations and drive growth.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Analytics;