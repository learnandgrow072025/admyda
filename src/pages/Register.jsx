import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    specificService: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Store form data in localStorage
    // Store form data in localStorage
     const submissions = JSON.parse(localStorage.getItem('registrations') || '[]');
     const newSubmission = {
       ...formData,
       id: Date.now(),
       submittedAt: new Date().toISOString()
     };
     submissions.push(newSubmission);
     localStorage.setItem('registrations', JSON.stringify(submissions));

    // toast({
      // title: "Registration Successful!",
      // description: "Thank you for your interest. Our team will contact you within 24 hours.",
    // });
	
	try {
	   const res = await fetch('/send.php', {
		 method: 'POST',
		 headers: { 'Content-Type': 'application/json' },
		 body: JSON.stringify(formData),
	   });
	   const data = await res.json();
	   if (!res.ok || !data.ok) throw new Error(data?.error || 'Failed to send email');
	   toast({
		 title: "Registration Successful!",
		 description: "Thanks! We’ve emailed the details to our team.",
	   });
	 } catch (err) {
	   toast({
		 title: "Submitted but email failed",
		 description: "We saved your request. Please contact us if needed.",
		 variant: "destructive",
	   });
	   console.error(err);
	 }

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      specificService: '',
      message: ''
    });
  };

  const analyticsServices = [
	'Generative & Agentic AI',
    'Healthcare Analytics',
    'Supply Chain Analytics',
    'Automotive Analytics',
    'Custom Analytics Solution',
    'Others'
  ];

  const trainingCourses = [
    'Healthcare Analytics',
	'SQL',
	'Data Visualization - Tableau',
	'Microsoft Excel',
	'Healthcare Specialization',
	'Python for Data Science'
  ];

  return (
    <>
      <Helmet>
        <title>Register for Services - AdMyDa Analytics</title>
        <meta name="description" content="Register for our analytics services or training programs. Get started with AdMyDa Analytics and transform your business with data-driven insights." />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get Started Today
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with analytics or advance your career with our training programs? 
              Fill out the form below and our experts will get in touch with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Form
              </h2>
              <p className="text-gray-600">
                Tell us about your needs and we'll create a customized solution for you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="inline h-4 w-4 mr-2" />
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Service Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select service type</option>
                  <option value="analytics">Analytics Services</option>
                  <option value="training">Training Programs</option>
                  <option value="both">Both Analytics & Training</option>
				  <option value="Others">Others</option>
                </select>
              </div>

              {/* Specific Service Selection */}
              {formData.serviceType && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Service/Course *
                  </label>
                  <select
                    name="specificService"
                    value={formData.specificService}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select specific service</option>
                    {formData.serviceType === 'analytics' && analyticsServices.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                    {formData.serviceType === 'training' && trainingCourses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
					{formData.serviceType === 'Others' && analyticsServices.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                    {formData.serviceType === 'both' && (
                      <>
                        <optgroup label="Analytics Services">
                          {analyticsServices.map((service, index) => (
                            <option key={`analytics-${index}`} value={service}>{service}</option>
                          ))}</optgroup>
                        <optgroup label="Training Programs">
                          {trainingCourses.map((course, index) => (
                            <option key={`training-${index}`} value={course}>{course}</option>
                          ))}
                        </optgroup>
                      </>
                    )}
                  </select>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell us more about your requirements"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Register;