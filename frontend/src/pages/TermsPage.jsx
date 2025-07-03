import React from 'react';
import PageLayout from '../components/PageLayout';
import { FileText, Shield, Users, AlertTriangle, Scale, Globe } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          text: 'By accessing and using MeetGenie ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
        },
        {
          text: 'These Terms of Service ("Terms") govern your use of our AI-powered meeting intelligence platform operated by MeetGenie Inc. ("we", "us", or "our").'
        },
        {
          text: 'We reserve the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service shall be subject to the Terms of Service.'
        }
      ]
    },
    {
      title: 'Description of Service',
      icon: Users,
      content: [
        {
          text: 'MeetGenie provides AI-powered meeting intelligence services including real-time transcription, meeting summarization, action item detection, sentiment analysis, and related features.'
        },
        {
          text: 'The Service is provided on a subscription basis with different tiers offering varying levels of functionality, storage, and support.'
        },
        {
          text: 'We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time with or without notice to you.'
        }
      ]
    },
    {
      title: 'User Accounts and Registration',
      icon: Users,
      content: [
        {
          text: 'You must provide accurate and complete registration information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          text: 'You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
        },
        {
          text: 'We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.'
        }
      ]
    },
    {
      title: 'Acceptable Use Policy',
      icon: Shield,
      content: [
        {
          text: 'You agree not to use the Service for any unlawful purposes or to conduct any unlawful activity, including but not limited to fraud, embezzlement, money laundering, or insider trading.'
        },
        {
          text: 'You may not upload, transmit, or distribute any content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable.'
        },
        {
          text: 'You may not attempt to gain unauthorized access to our systems, other user accounts, or computer networks connected to our Service.'
        },
        {
          text: 'You may not use our Service to record meetings without proper consent from all participants as required by applicable law.'
        }
      ]
    },
    {
      title: 'Data and Privacy',
      icon: Shield,
      content: [
        {
          text: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service.'
        },
        {
          text: 'You retain ownership of your meeting data and content. We process this data solely to provide our services as described in our Privacy Policy.'
        },
        {
          text: 'You are responsible for ensuring you have the necessary rights and consents to upload and process meeting data through our Service.'
        },
        {
          text: 'We implement industry-standard security measures to protect your data, but cannot guarantee absolute security.'
        }
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        {
          text: 'The Service and its original content, features, and functionality are and will remain the exclusive property of MeetGenie Inc. and its licensors.'
        },
        {
          text: 'The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.'
        },
        {
          text: 'You retain ownership of your content, but grant us a license to use, store, and process it as necessary to provide our services.'
        }
      ]
    },
    {
      title: 'Payment and Billing',
      icon: FileText,
      content: [
        {
          text: 'Paid subscriptions are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.'
        },
        {
          text: 'We reserve the right to change our pricing at any time. Price changes will be communicated with at least 30 days notice.'
        },
        {
          text: 'If payment fails, we may suspend or terminate your access to paid features until payment is resolved.'
        },
        {
          text: 'You are responsible for all taxes associated with your use of the Service.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        {
          text: 'In no event shall MeetGenie Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages.'
        },
        {
          text: 'Our total liability to you for any damages shall not exceed the amount you paid us in the twelve (12) months preceding the claim.'
        },
        {
          text: 'We provide the Service "as is" without warranties of any kind, either express or implied, including but not limited to merchantability and fitness for a particular purpose.'
        },
        {
          text: 'We do not warrant that the Service will be uninterrupted, error-free, or completely secure.'
        }
      ]
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: [
        {
          text: 'You may terminate your account at any time by contacting our support team or through your account settings.'
        },
        {
          text: 'We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.'
        },
        {
          text: 'Upon termination, your right to use the Service will cease immediately. We may delete your data after a reasonable period following termination.'
        },
        {
          text: 'Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.'
        }
      ]
    },
    {
      title: 'Governing Law',
      icon: Globe,
      content: [
        {
          text: 'These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions.'
        },
        {
          text: 'Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in San Francisco, California.'
        },
        {
          text: 'If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.'
        }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Terms of Service"
      description="Please read these terms carefully before using MeetGenie's services"
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Last Updated */}
          <div className="bg-purple-50 rounded-xl p-6 mb-12">
            <div className="flex items-center space-x-3 mb-3">
              <FileText className="h-6 w-6 text-purple-600" />
              <h2 className="text-lg font-semibold text-gray-900">Last Updated</h2>
            </div>
            <p className="text-gray-600">
              These Terms of Service were last updated on January 15, 2025. We may update these terms from time to time, and we will notify you of any material changes.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to MeetGenie! These Terms of Service ("Terms") govern your use of our AI-powered meeting intelligence platform. 
                By using our service, you agree to these terms in full.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read these Terms carefully before using our service. If you do not agree with any part of these terms, 
                you may not use our service.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> legal@meetgenie.com</p>
              <p><strong>Address:</strong> 123 Innovation Drive, Suite 400, San Francisco, CA 94105</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Agreement */}
          <div className="mt-12 bg-yellow-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Agreement to Terms</h2>
            <p className="text-gray-600">
              By using MeetGenie, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              These terms constitute a legally binding agreement between you and MeetGenie Inc.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsPage;