import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Training = () => {
  const courses = [
    {
      title: 'Healthcare Analytics',
      duration: '14 weeks',
      level: 'Beginner',
      price: '₹28,000 + 18% GST',
      Total: '₹29,500',
      Batches: 3,
      description: 'Master the fundamentals of data analytics including Healthcare Analytics using US Claims Data, SQL, data visualization, and Microsoft Excel.',
      modules: [
        'Healthcare fundamentals: actors, payment models, value-based care basics.',
		'Claims/EHR data structure, payer challenges, coding standards and dictionaries.',
		'SQL essentials: SELECT, WHERE, ORDER BY; joins and aggregations.',
		'Subqueries, CTEs, and window functions for advanced analytics.',
		'Excel skills: cleaning, validation, conditional formatting, What-If, Power Query.',
		'Visualization: Tableau charts, filters, LOD, maps, time series.',
		'Automation and performance: Macros, pipelines, views, indexing, query tuning.',
		'Capstone: end-to-end claims analysis, dashboards, executive storytelling.'
      ],
      features: ['Live Sessions', 'Hands-on Practice during Live sessions', 'Hands-on Projects', 'Industry Mentorship', 'Certificate']
    },
    {
      title: 'SQL',
      duration: '6 weeks',
      level: 'Beginner to Advanced',
      price: '₹8,000 + 18% GST ',
      Total: '₹9,440',
      Batches: 3,
      description: 'Deep dive into Beginner to advanced SQL concepts',
      modules: [
        'SQL foundations: databases, syntax, query structure',
		'Row selection & ordering: WHERE, ORDER BY, NULL handling, constraints',
		'Aggregation & grouping: GROUP BY, HAVING, summary metrics',
		'Relational modeling with joins: INNER, LEFT, RIGHT, FULL',
		'Reusable logic: subqueries, nested queries, and CTEs',
		'Advanced analytics with window functions (ranking, partitions, moving calcs)',
		'Data manipulation (DML): INSERT, UPDATE, DELETE; views & stored procedures',
		'Performance & reporting: indexing basics, query tuning, and real-world case studies'
      ],
      features: ['Live Sessions', 'Hands-on Practice during Live sessions', 'Hands-on Projects', 'Industry Mentorship', 'Certificate']
    },
    {
      title: 'Data Visualization - Tableau',
      duration: '6 weeks',
      level: 'Beginner to Advanced',
      price: '₹10,000 + 18% GST ',
      Total: '₹11,800',
      Batches: 3,
      description: 'Learn to create compelling data visualizations and business intelligence dashboards using industry-standard tools.',
      modules: [
        'Tableau essentials: interface, workspace, and connecting to diverse data sources',
		'Core visuals: bars, lines, pies, tables—plus chart selection best practices',
		'Filters, parameters, and sets to drive interactive analysis',
		'Calculated fields & LOD expressions for richer, granular insights',
		'Data modeling: joins, unions, and blending across multiple datasets',
		'Time series analysis and date functions; maps & geo visualizations',
		'Building interactive dashboards and stories for stakeholder impact',
		'Performance tuning, Tableau Public vs Server, and advanced/custom visuals with hands-on projects'
      ],
      features: ['Live Sessions', 'Hands-on Practice during Live sessions', 'Hands-on Projects', 'Industry Mentorship', 'Certificate']
    },
    {
      title: 'Microsoft Excel',
      duration: '6 weeks',
      level: 'Beginner to Intermediate',
      price: '₹6,000 + 18% GST',
      Total: '₹7,080',
      Batches: 3,
      description: 'Learn Excel essentials to turn raw data into clear insights with formulas, PivotTables, and interactive dashboards.',
      modules: [
        'Excel interface & workbook navigation for fast, accurate setup',
		'Essential formulas/functions (math, logical, date/time) + text functions for cleaning',
		'Data cleaning & formatting, with advanced sorting and filtering',
		'Data validation, drop-down lists, and well-structured tables',
		'Conditional formatting to surface patterns and insights instantly',
		'Lookup mastery: VLOOKUP, HLOOKUP, XLOOKUP, and cell referencing',
		'PivotTables, PivotCharts, and charting best practices for clear visuals',
		'What-If Analysis & Goal Seek; Power Query & Macros basics; build dashboards/KPIs with real-world use cases'
      ],
      features: ['Live Sessions', 'Hands-on Practice during Live sessions', 'Hands-on Projects', 'Industry Mentorship', 'Certificate']
    },
    {
      title: 'Healthcare Specialization',
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      price: '₹20,000 + 18% GST',
      Total: '₹23,600',
      Batches: 3,
      description: 'Specialized course focusing on healthcare data analytics, medical informatics, and healthcare-specific use cases using US claims data.',
      modules: [
        'Healthcare system functions and key actors in claims workflows',
		'Vertical integration and how it shapes healthcare operations',
		'Provider payment systems: FFS, capitation, bundled payments, global budgets',
		'Claims data landscape: structure, quality issues, and payer challenges',
		'Proxy diagnosis techniques and cohort analysis fundamentals',
		'Using coding systems (ICD, CPT, NDC, LOINC) and consulting data dictionaries',
		'Value-based care basics and interpreting health outcome indicators (process, clinical, PROs)',
		'End-to-end framework for analyzing healthcare claims data and reporting insights'
      ],
      features: ['Industry Experts', 'Healthcare Projects', 'Domain Knowledge', 'Specialized Certificate']
    },
    {
      title: 'Python for Data Science',
      duration: '10 weeks',
      level: 'Beginner to Intermediate',
      price: '₹14,000 + 18% GST',
      Total: '₹16,520',
      Batches: 2,
      description: 'Comprehensive Python programming course focused on data science applications, libraries, and frameworks.',
      modules: [
        'Python Programming Basics',
        'NumPy & Pandas for Data Manipulation',
        'Matplotlib & Seaborn Visualization',
        'Scikit-learn for Machine Learning',
        'Web Scraping & APIs',
        'Database Connectivity',
        'Jupyter Notebooks & Development',
        'Real-world Data Projects'
      ],
      features: ['Coding Practice', 'Project Portfolio', 'Code Reviews', 'Technical Certificate']
    }
  ];

  const trainingFeatures = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Structured learning path covering theory, practical applications, and industry best practices'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn recognized certifications that enhance your professional credibility'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Self-paced and live sessions designed to fit your schedule and learning style'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Analytics Training Programs - AdMyDa Analytics</title>
        <meta name="description" content="Comprehensive analytics training programs covering data science, machine learning, business intelligence, and industry-specific analytics courses." />
      </Helmet>

      {/* Hero Section */}
      <section className="training-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Analytics Training Programs
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Master data analytics with our comprehensive training programs. From fundamentals to advanced specializations, 
              we offer courses designed by industry experts to accelerate your career.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our training programs are designed to provide practical, industry-relevant skills that you can apply immediately
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Course Catalog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of analytics courses designed for different skill levels and career goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg sm:text-xl font-semibold text-blue-600 leading-tight">{course.price}</div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        Total Fee: {course.Total}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Modules:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {course.modules.slice(0, 8).map((module, moduleIndex) => (
                        <div key={moduleIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/register" className="mt-auto">
					  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
						Enroll Now
						<ArrowRight className="ml-2 h-4 w-4" />
					  </Button>
					</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Structured Learning Path
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Foundation', desc: 'Start with fundamentals and basic concepts' },
                  { step: '2', title: 'Specialization', desc: 'Choose your area of focus and dive deeper' },
                  { step: '3', title: 'Application', desc: 'Work on real-world projects and case studies' },
                  { step: '4', title: 'Certification', desc: 'Earn industry-recognized certifications' },
                  { step: '5', title: 'Career Support', desc: 'Get job assistance and career guidance' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
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
                alt="Students learning analytics in modern classroom with computers and data visualizations"
               src="https://images.unsplash.com/photo-1635251595512-dc52146d5ae8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their careers with our comprehensive analytics training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Enroll Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Training;