import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, TrendingUp, Shield, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthcareAnalytics = () => {
  const solutions = [
    {
      icon: Users,
      title: 'Patient Outcome Analytics',
      description: 'Analyze patient data to improve treatment outcomes and reduce readmission rates through predictive modeling and risk stratification.'
    },
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Optimize hospital operations, reduce wait times, and improve resource allocation with real-time analytics and workflow optimization.'
    },
    {
      icon: Shield,
      title: 'Clinical Decision Support',
      description: 'AI-powered insights to assist healthcare professionals in making informed clinical decisions and improving patient safety.'
    },
    {
      icon: Clock,
      title: 'Predictive Analytics',
      description: 'Forecast patient volumes, disease outbreaks, and resource needs to enable proactive healthcare management.'
    },
    {
      icon: BarChart3,
      title: 'Population Health Management',
      description: 'Analyze population health trends and implement targeted interventions to improve community health outcomes.'
    },
    {
      icon: Heart,
      title: 'Quality Metrics Tracking',
      description: 'Monitor and improve healthcare quality metrics, patient satisfaction, and compliance with regulatory standards.'
    }
  ];

  const caseStudies = [
    {
      title: 'Regional Hospital Network',
      challenge: 'High readmission rates and inefficient resource allocation',
      solution: 'Implemented predictive analytics for patient risk assessment and operational optimization',
      result: '25% reduction in readmissions, 30% improvement in bed utilization'
    },
    {
      title: 'Multi-Specialty Clinic',
      challenge: 'Long patient wait times and scheduling inefficiencies',
      solution: 'Deployed real-time analytics dashboard for appointment optimization',
      result: '40% reduction in wait times, 20% increase in patient satisfaction'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Analytics Solutions - AdMyDa Analytics</title>
        <meta name="description" content="Transform healthcare delivery with our advanced analytics solutions. Improve patient outcomes, operational efficiency, and clinical decision-making." />
      </Helmet>

      {/* Hero Section */}
      <section className="healthcare-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Healthcare Analytics
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform patient care and healthcare operations with our comprehensive analytics solutions. 
              Improve outcomes, reduce costs, and enhance the quality of care delivery.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                Transform Your Healthcare Operations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Healthcare Analytics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics tools designed specifically for healthcare providers and organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Benefits for Healthcare Organizations
              </h2>
              <div className="space-y-6">
                {[
                  'Improved patient outcomes through data-driven insights',
                  'Reduced operational costs and increased efficiency',
                  'Enhanced clinical decision-making capabilities',
                  'Better resource allocation and capacity planning',
                  'Compliance with healthcare regulations and standards',
                  'Real-time monitoring and predictive analytics'
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
                alt="Healthcare professionals using analytics dashboard in hospital setting"
               src="https://images.unsplash.com/photo-1666886573301-b5d526cfd518" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from healthcare organizations that have transformed their operations with our analytics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-red-600">Challenge:</span>
                    <p className="text-gray-700 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-600">Solution:</span>
                    <p className="text-gray-700 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-600">Result:</span>
                    <p className="text-gray-700 mt-1">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Healthcare Delivery?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations that have improved patient outcomes and operational efficiency with our analytics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/training">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
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

export default HealthcareAnalytics;