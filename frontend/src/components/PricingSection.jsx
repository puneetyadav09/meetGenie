import React from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individuals and small teams',
      features: [
        '5 meetings per month',
        'Basic transcription',
        'Simple summaries',
        'Email support',
        '30-day history'
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
        'Unlimited meetings',
        'Advanced AI transcription',
        'Smart action items',
        'Sentiment analysis',
        'Slack/Email integration',
        'Priority support',
        '1-year history'
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
        'Everything in Professional',
        'Custom AI models',
        'SSO & advanced security',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'Unlimited history'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team's needs. Start free, upgrade when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
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

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">99% Accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Real-time Processing</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Secure & Private</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-sm font-semibold text-gray-900">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;