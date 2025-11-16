import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Cog, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AutomotiveAnalytics = () => {
  const solutions = [
    {
      icon: Cog,
      title: 'Manufacturing Analytics',
      description: 'Optimize production processes, reduce defects, and improve overall equipment effectiveness (OEE) through real-time manufacturing analytics.'
    },
    {
      icon: Shield,
      title: 'Quality Control & Assurance',
      description: 'Advanced quality analytics to detect defects early, ensure compliance, and maintain the highest quality standards throughout production.'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'AI-powered predictive maintenance to reduce downtime, extend equipment life, and optimize maintenance schedules for maximum efficiency.'
    },
    {
      icon: Users,
      title: 'Customer Experience Analytics',
      description: 'Analyze customer behavior, preferences, and satisfaction to improve vehicle design, features, and overall customer experience.'
    },
    {
      icon: TrendingUp,
      title: 'Sales & Market Analytics',
      description: 'Market trend analysis, sales forecasting, and competitive intelligence to drive strategic decision-making and market positioning.'
    },
    {
      icon: Car,
      title: 'Connected Vehicle Analytics',
      description: 'Leverage IoT and telematics data to understand vehicle performance, driver behavior, and enable new service opportunities.'
    }
  ];

  const benefits = [
    { icon: '🏭', title: 'Production Efficiency', value: '25% increase in OEE' },
    { icon: '🔧', title: 'Maintenance Optimization', value: '40% reduction in downtime' },
    { icon: '✅', title: 'Quality Improvement', value: '60% fewer defects' },
    { icon: '📊', title: 'Cost Reduction', value: '30% lower operational costs' }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring of production lines with predictive analytics for optimal performance',
      features: ['Production optimization', 'Defect prediction', 'Resource allocation', 'Energy efficiency']
    },
    {
      title: 'Supply Chain Intelligence',
      description: 'End-to-end visibility across automotive supply chains for better coordination and efficiency',
      features: ['Supplier performance', 'Inventory optimization', 'Risk management', 'Logistics tracking']
    },
    {
      title: 'Customer Insights',
      description: 'Deep understanding of customer preferences and behavior to drive product innovation',
      features: ['Market research', 'Feature analysis', 'Satisfaction tracking', 'Loyalty programs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Automotive Analytics Solutions - AdMyDa Analytics</title>
        <meta name="description" content="Drive innovation in automotive industry with our comprehensive analytics solutions. Optimize manufacturing, quality control, and customer experience." />
      </Helmet>

      {/* Hero Section */}
      <section className="automotive-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Car className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Automotive Analytics
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-900">
              Drive innovation and efficiency in the automotive industry with our comprehensive analytics solutions. 
              From manufacturing optimization to customer insights, we power your digital transformation.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                Accelerate Your Innovation
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
              Comprehensive Automotive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end analytics solutions designed specifically for the automotive industry's unique challenges
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
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology Stack
              </h2>
              <div className="space-y-6">
                {[
                  'Machine Learning & AI for predictive analytics',
                  'IoT integration for real-time vehicle data',
                  'Computer vision for quality inspection',
                  'Big data processing for large-scale analytics',
                  'Cloud-native architecture for scalability',
                  'Real-time dashboards and visualization'
                ].map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700 text-lg">{tech}</p>
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
                alt="Modern automotive manufacturing facility with digital analytics and IoT sensors"
               src="https://images.unsplash.com/photo-1700726783633-23c0c6383b00" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="automotive-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Drive Innovation?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-gray-900">
              Transform your automotive operations with our cutting-edge analytics solutions and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  Explore Training
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AutomotiveAnalytics;