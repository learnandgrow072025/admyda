import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ShoppingCart, DollarSign, Factory, Briefcase, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OthersAnalytics = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Customer behavior analysis, inventory optimization, pricing strategies, and personalized marketing campaigns.',
      solutions: ['Customer segmentation', 'Demand forecasting', 'Price optimization', 'Recommendation engines']
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, customer analytics, and regulatory compliance solutions.',
      solutions: ['Risk modeling', 'Fraud detection', 'Credit scoring', 'Regulatory reporting']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Production optimization, quality control, predictive maintenance, and supply chain analytics.',
      solutions: ['OEE optimization', 'Quality analytics', 'Maintenance planning', 'Cost reduction']
    },
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Property valuation, market analysis, investment insights, and portfolio optimization.',
      solutions: ['Property valuation', 'Market trends', 'Investment analysis', 'Portfolio management']
    },
    {
      icon: Users,
      title: 'Human Resources',
      description: 'Talent analytics, performance management, employee engagement, and workforce planning.',
      solutions: ['Talent acquisition', 'Performance analytics', 'Engagement tracking', 'Workforce planning']
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Project analytics, resource optimization, client insights, and business development.',
      solutions: ['Project tracking', 'Resource allocation', 'Client analytics', 'Business intelligence']
    }
  ];

  const capabilities = [
    {
      title: 'Custom Analytics Solutions',
      description: 'Tailored analytics platforms designed specifically for your industry requirements and business objectives.',
      features: ['Industry-specific KPIs', 'Custom dashboards', 'Automated reporting', 'Real-time monitoring']
    },
    {
      title: 'Data Integration & Management',
      description: 'Comprehensive data integration from multiple sources with robust data governance and quality management.',
      features: ['Multi-source integration', 'Data quality assurance', 'Master data management', 'Data governance']
    },
    {
      title: 'Advanced Analytics & AI',
      description: 'Machine learning, predictive modeling, and AI-powered insights to drive intelligent decision-making.',
      features: ['Predictive modeling', 'Machine learning', 'Natural language processing', 'Computer vision']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industry Analytics Solutions - AdMyDa Analytics</title>
        <meta name="description" content="Custom analytics solutions for retail, finance, manufacturing, real estate, HR, and professional services. Transform your industry with data-driven insights." />
      </Helmet>

      {/* Hero Section */}
      <section className="others-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Building2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Industry Analytics Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analytics solutions for diverse industries. From retail to finance, 
              we deliver customized insights that drive growth and operational excellence.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                Explore Custom Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized analytics solutions tailored for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {solution}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics capabilities that can be adapted to any industry or business requirement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 mb-6">{capability.description}</p>
                <div className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Discovery & Assessment', desc: 'Understanding your business needs and current analytics maturity' },
                  { step: '2', title: 'Solution Design', desc: 'Designing custom analytics solutions tailored to your industry' },
                  { step: '3', title: 'Implementation', desc: 'Deploying solutions with minimal disruption to your operations' },
                  { step: '4', title: 'Training & Support', desc: 'Comprehensive training and ongoing support for your team' },
                  { step: '5', title: 'Optimization', desc: 'Continuous improvement and optimization based on results' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold text-sm">
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
                alt="Diverse business professionals collaborating on analytics solutions across different industries"
               src="https://images.unsplash.com/photo-1690192079529-9fd57e5b24d0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Custom Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefits that apply across all industries and business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Industry Expertise', desc: 'Deep understanding of industry-specific challenges and opportunities' },
              { title: 'Scalable Solutions', desc: 'Analytics platforms that grow with your business needs' },
              { title: 'Rapid ROI', desc: 'Quick implementation and measurable results within months' },
              { title: 'Ongoing Support', desc: 'Continuous support and optimization for long-term success' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for Custom Analytics Solutions?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create tailored analytics solutions for your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                  Get Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
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

export default OthersAnalytics;