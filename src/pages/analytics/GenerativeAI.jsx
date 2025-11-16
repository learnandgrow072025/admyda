import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Users, Workflow, FileText, Bot, ShieldCheck, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GenerativeAI = () => {
  const solutions = [
    {
      icon: BrainCircuit,
      title: 'Domain-Tuned LLMs & RAG',
      description: 'Train Large Language Models on your domain with retrieval-augmented generation to answer complex questions, cite trusted sources, and adapt—improving accuracy, transparency, and stakeholder confidence.'
    },
    {
      icon: Workflow,
      title: 'Agentic Workflows & Tool Integration',
      description: 'Orchestrate autonomous agents that plan, call tools and APIs, verify results, and close loops-streamlining operations, reducing manual effort, and accelerating outcomes across analytics, support, tasks.'
    },
    {
      icon: FileText,
      title: 'Summarization & Decision Support',
      description: 'Generate concise summaries, briefings, and impact assessments from lengthy documents and conversations, highlighting risks, opportunities, next steps to strengthen decisions for clinicians, executives, teams across.'
    },
    {
      icon: Bot,
      title: 'Knowledge Automation & Document Processing',
      description: 'Extract entities, classify documents, normalize codes, and auto-generate structured records from PDFs, scans, and emails-reducing turnaround time, improving accuracy, and powering downstream analytics and workflows.'
    },
    {
      icon: ShieldCheck ,
      title: 'Safety, Governance & Monitoring',
      description: 'Enforce policy guardrails, content filters, prompt injection defenses, and human-in-the-loop review; log decisions, trace data lineage, and monitor performance for accuracy, fairness, privacy, operations reliability.'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations & Next-Best Action',
      description: 'Leverage user context, history, and real-time signals to generate tailored recommendations and next-best actions, improving engagement, conversion, and outcomes while respecting constraints and explainability requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Generative & Agentic AI - AdMyDa Analytics</title>
        <meta name="description" content="Domain-tuned LLMs with agent workflows automate insights, summarize data, and act securely." />
      </Helmet>

      {/* Hero Section */}
      <section className="GenerativeAI-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <BrainCircuit className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Generative & Agentic AI
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-900">
              Generative AI and Agentic AI combine domain-tuned LLMs, retrieval, and tool use to transform workflows: 
			  summarize documents, draft content, automate decisions, and execute tasks securely with guardrails—accelerating insights, boosting productivity, and enabling end-to-end enterprise automation.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                Power Your Generative & Agentic AI
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
              Our Generative & Agentic AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end GenAI and agent frameworks for teams, enabling secure automation, insights, integration, and enterprise scalability.
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
                Key Benefits of Generative & Agentic AI
              </h2>
              <div className="space-y-6">
                {[
                  'Faster decisions with automated insights from enterprise knowledge',
                  'Reduce manual workload; agents execute tasks and handoffs',
                  'Consistent, explainable outputs with guardrails.',
                  'Seamless tool integration across APIs, data, workflows, systems',
                  'Personalized experiences using real-time context.',
                  'Scalable deployment, monitoring, continuous improvement.'
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
               src="/generativeAI.png" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="GenerativeAI-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Generative & Agentic AI Delivery?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-gray-900">
              Join leading enterprises accelerating decisions and automation with our Generative & Agentic AI-boosting productivity, quality, and operational efficiency
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

export default GenerativeAI;