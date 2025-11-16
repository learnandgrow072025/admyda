import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Target, ShieldCheck, Rocket, Users, CheckCircle, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — AdMyDa Analytics</title>
        <meta
          name="description"
          content="AdMyDa Analytics is a healthcare-focused analytics and training company delivering AI-driven insights, dashboards, and domain-tuned solutions for enterprises."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About AdMyDa Analytics</h1>
              <p className="text-lg md:text-xl opacity-95 text-gray-800">
                We build decision-ready analytics and Generative/Agentic AI solutions for healthcare and enterprises—combining
                domain expertise, rigorous methods, and production-grade engineering.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/admyda-logo.png"
                alt="AdMyDa Analytics logo"
                className="h-64 md:h-48 w-auto drop-shadow-xl bg-gray-100 rounded-xl p-1"
              />
            </div>
          </motion.div>
		  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
			className="grid grid-cols-1 md:grid-cols-1 gap-10 items-center"
          >
		  <div className="flex justify-center">
		  <p className="text-lg md:text-xl opacity-95">
			AdMyDa Analytics Pvt Ltd, established in 2024, is a forward-thinking healthcare analytics company founded by industry experts with extensive experience in the healthcare sector. Our vision is to bridge the gap between academia and the pharmaceutical industry by providing specialized training in healthcare analytics to students and professionals from various colleges and organizations. We aim to prepare a skilled and industry-ready workforce that can excel in the evolving healthcare analytics landscape. <br /> <br />
			At AdMyDa, we are dedicated to serving pharmaceutical companies by offering innovative analytical solutions. Our expertise lies in leveraging patient-level real-world data to deliver actionable insights into patient journeys, market sizing, and healthcare resource utilization (HCRU). These insights enable pharmaceutical companies to make informed decisions, optimize their strategies, and improve patient outcomes. Our goal is to establish ourselves as a trusted partner for pharma companies by delivering high-quality, data-driven solutions tailored to their business needs. <br /> <br />
			Although we are new to the market, our passion and commitment drive us to make a significant impact. We not only focus on delivering excellence in healthcare analytics but also emphasize nurturing talent and building a robust analytics ecosystem. Together, we strive to shape the future of healthcare analytics through education, innovation, and collaboration.
		  </p>
		</div>
		</motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border p-6">
              <Target className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-800">
                Transform data into clarity and action—improving outcomes, efficiency, and growth for our clients.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <Rocket className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-800">
                Make explainable AI and analytics accessible, reliable, and impactful for every healthcare and enterprise team.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <ShieldCheck className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-800">
                Integrity, quality, and accountability—backed by rigorous validation and privacy-first engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl bg-white shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Healthcare Analytics</h3>
              <p className="text-gray-800">
                Patient outcomes, operational efficiency, clinical decision support, predictive modeling, population health,
                and quality metrics—aligned to payer/provider needs.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow p-6">
              <h3 className="text-lg font-semibold mb-2">Generative & Agentic AI</h3>
              <p className="text-gray-800">
                Domain-tuned LLMs/RAG, agentic workflows, document automation, decision support, and governance—enterprise-ready,
                secure, and auditable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AdMyDa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why AdMyDa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Domain SMEs", text: "Healthcare-first team with deep payer/provider experience." },
              { icon: CheckCircle, title: "Validation-Driven", text: "QC frameworks, audits, and metrics baked into delivery." },
              { icon: ShieldCheck, title: "Secure by Design", text: "Compliance-aware data handling and privacy-first patterns." },
            ].map((b, i) => (
              <div key={i} className="rounded-xl border p-6">
                <b.icon className="h-7 w-7 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-800">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Let’s Build What Matters</h2>
          <p className="text-lg opacity-95 mb-6">
            Talk to us about your data, AI, and training goals. We’ll shape a plan that fits.
          </p>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default About;