import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Cutting-edge analytics solutions across multiple industries'
    },
    {
      icon: Users,
      title: 'Expert Training',
      description: 'Comprehensive training programs by industry experts'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Data-driven insights to accelerate your business growth'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of successful implementations and outcomes'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AdMyDa Analytics - Leading Analytics Solutions & Training</title>
        <meta name="description" content="AdMyDa Analytics Pvt Ltd offers cutting-edge analytics solutions for healthcare, supply chain, automotive industries and comprehensive training programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg hero-pattern min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <p className="text-yellow-300">
					Transform Your Business with
				</p>
                <span className="block bg-gradient-to-r from-yellow-300 to-yellow-300 bg-clip-text text-transparent">
                  Data Analytics
                </span>
              </h1>
              <p className="text-xl mb-8 text-black-100 leading-relaxed">
				<p className="text-black">
					AdMyDa Analytics empowers organizations with cutting-edge analytics solutions and expert training programs across healthcare, supply chain, automotive, and more.
				</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/analytics">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                    Explore Analytics
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/training">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                    View Training
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8">
                <img 
                  className="w-full h-96 object-cover rounded-xl"
                  alt="Data analytics dashboard showing various charts and metrics"
                 src="/hero-analytics.png" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AdMyDa Analytics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
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
              Specialized analytics solutions tailored for your industry needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
			  { name: 'Generative & Agentic AI', path: '/analytics/GenerativeAI', gradient: 'GenerativeAI-gradient'},
              { name: 'Healthcare', path: '/analytics/healthcare', gradient: 'healthcare-gradient' },
              { name: 'Supply Chain', path: '/analytics/supply-chain', gradient: 'supply-chain-gradient' },
              { name: 'Automotive', path: '/analytics/automotive', gradient: 'automotive-gradient' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={industry.path}>
                  <div className={`${industry.gradient} rounded-xl p-8 text-white text-center h-40 flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}>
                    <h3 className="text-2xl font-bold text-gray-700">{industry.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already transformed their operations with our analytics solutions and training programs.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;