import React from 'react';
import PageLayout from '../layouts/PageLayout';
import { Shield, Eye, Lock, Users, Globe, FileText, Zap } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Account Information',
          text: 'When you create an account, we collect your name, email address, company information, and other details you provide during registration.'
        },
        {
          subtitle: 'Meeting Data',
          text: 'We process audio recordings, transcripts, meeting summaries, and related metadata to provide our AI-powered meeting intelligence services.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We collect information about how you use our service, including features accessed, time spent, and interaction patterns to improve our platform.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect device information, IP addresses, browser types, and other technical data necessary for service operation.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Zap,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your data to provide transcription, summarization, action item detection, and other AI-powered meeting intelligence features.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'We analyze usage patterns and feedback to enhance our AI models, improve accuracy, and develop new features.'
        },
        {
          subtitle: 'Communication',
          text: 'We may contact you about service updates, security alerts, billing matters, and other important account-related information.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We process data as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.'
        }
      ]
    },
    {
      title: 'Data Sharing and Disclosure',
      icon: Users,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted third-party service providers who help us operate our platform, including cloud hosting, analytics, and customer support services.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law, court order, or to protect our rights, property, or safety of our users.'
        },
        {
          subtitle: 'Consent',
          text: 'We will share your information with third parties only when you have given us explicit consent to do so.'
        }
      ]
    },
    {
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Encryption',
          text: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption to protect against unauthorized access.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls, multi-factor authentication, and role-based permissions to limit data access to authorized personnel only.'
        },
        {
          subtitle: 'Security Monitoring',
          text: 'Our systems are continuously monitored for security threats, with automated alerts and incident response procedures in place.'
        },
        {
          subtitle: 'Regular Audits',
          text: 'We conduct regular security audits and maintain SOC 2 Type II compliance to ensure the highest security standards.'
        }
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: Eye,
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to access your personal data and request a copy of your information in a portable format.'
        },
        {
          subtitle: 'Correction and Updates',
          text: 'You can update or correct your personal information at any time through your account settings or by contacting our support team.'
        },
        {
          subtitle: 'Deletion',
          text: 'You may request deletion of your personal data, subject to certain legal and operational requirements. We will delete your data within 30 days of account closure.'
        },
        {
          subtitle: 'Opt-out',
          text: 'You can opt out of non-essential communications and certain data processing activities through your account preferences.'
        }
      ]
    },
    {
      title: 'International Data Transfers',
      icon: Globe,
      content: [
        {
          subtitle: 'Global Operations',
          text: 'As a global service, we may transfer your data to countries outside your residence for processing and storage.'
        },
        {
          subtitle: 'Adequate Protection',
          text: 'We ensure that international data transfers are protected by appropriate safeguards, including standard contractual clauses and adequacy decisions.'
        },
        {
          subtitle: 'EU-US Privacy Framework',
          text: 'For transfers from the EU to the US, we comply with applicable privacy frameworks and maintain appropriate data protection measures.'
        }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Privacy Policy"
      description="Learn how MeetGenie collects, uses, and protects your personal information"
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
              This Privacy Policy was last updated on January 15, 2025. We may update this policy from time to time, and we will notify you of any material changes.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                At MeetGenie, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                AI-powered meeting intelligence platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using MeetGenie, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our service.
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.subtitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Data Retention */}
          <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specific retention periods include:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Account Information:</strong> Retained for the duration of your account plus 30 days after closure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Meeting Data:</strong> Retained according to your plan's data retention policy (30 days to unlimited)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Usage Analytics:</strong> Aggregated and anonymized data may be retained indefinitely for service improvement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, your personal data, or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@meetgenie.com</p>
              <p><strong>Address:</strong> 123 Innovation Drive, Suite 400, San Francisco, CA 94105</p>
              <p><strong>Data Protection Officer:</strong> dpo@meetgenie.com</p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mt-12 bg-yellow-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. For material changes, we will provide additional notice such as email notification or in-app alerts.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPage;