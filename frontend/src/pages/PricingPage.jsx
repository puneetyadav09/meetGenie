import React from 'react';
import PageLayout from '../components/PageLayout';
import { Check, Zap, Crown, Building, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individuals and small teams',
      features: [
        { name: '5 meetings per month', included: true },
        { name: 'Basic transcription', included: true },
        { name: 'Simple summaries', included: true },
        { name: 'Email support', included: true },
        { name: '30-day history', included: true },
        { name: 'Advanced AI features', included: false },
        { name: 'Integrations', included: false },
        { name: 'Priority support', included: false }
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: '$29',
      period: '/month',
      description: 'Ideal for growing teams and businesses',
      features: [
        { name: 'Unlimited meetings', included: true },
        { name: 'Advanced AI transcription', included: true },
        { name: 'Smart action items', included: true },
        { name: 'Sentiment analysis', included: true },
        { name: 'Slack/Email integration', included: true },
        { name: 'Priority support', included: true },
        { name: '1-year history', included: true },
        { name: 'API access', included: false }
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Building,
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with advanced needs',
      features: [
        { name: 'Everything in Professional', included: true },
        { name: 'Custom AI models', included: true },
        { name: 'SSO & advanced security', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Unlimited history', included: true },
        { name: 'On-premise deployment', included: true }
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 30 days after cancellation. You can export all your meeting data during this period.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer a 20% discount when you choose annual billing for Professional and Enterprise plans.'
    }
  ];

  return (
    <PageLayout 
      title="Simple, Transparent Pricing"
      description="Choose the plan that fits your team's needs. Start free, upgrade when you're ready."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-purple-200 shadow-2xl scale-105' 
                    : 'border-gray-100 shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-12 h-12 ${
                    plan.popular ? 'bg-purple-100' : 'bg-gray-100'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className={`h-6 w-6 ${
                      plan.popular ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center block ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We work with enterprise customers to create tailored solutions that fit your specific needs.
            </p>
            <Link 
              to="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PricingPage;