import React from 'react';
import PageLayout from '../components/PageLayout';
import { Shield, Lock, Eye, Server, FileCheck, Users, Globe, AlertTriangle } from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted using AES-256 encryption both in transit and at rest',
      details: [
        'TLS 1.3 for data in transit',
        'AES-256 encryption at rest',
        'Zero-knowledge architecture',
        'Encrypted database storage'
      ]
    },
    {
      icon: Shield,
      title: 'SOC 2 Compliance',
      description: 'We maintain SOC 2 Type II compliance with regular third-party audits',
      details: [
        'Annual SOC 2 Type II audits',
        'Security controls monitoring',
        'Vendor risk management',
        'Incident response procedures'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'GDPR and CCPA compliant with strict data privacy controls',
      details: [
        'Data minimization practices',
        'Right to deletion',
        'Data portability',
        'Consent management'
      ]
    },
    {
      icon: Users,
      title: 'Access Controls',
      description: 'Role-based access controls with multi-factor authentication',
      details: [
        'Multi-factor authentication',
        'Role-based permissions',
        'Session management',
        'API key security'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with 99.9% uptime guarantee',
      details: [
        'AWS security best practices',
        'Network isolation',
        'DDoS protection',
        'Regular security updates'
      ]
    },
    {
      icon: FileCheck,
      title: 'Data Governance',
      description: 'Comprehensive data governance with audit trails and monitoring',
      details: [
        'Complete audit logs',
        'Data retention policies',
        'Backup and recovery',
        'Change management'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified'
    },
    {
      name: 'GDPR Compliant',
      description: 'European data protection regulation compliance',
      status: 'Compliant'
    },
    {
      name: 'CCPA Compliant',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management system',
      status: 'In Progress'
    }
  ];

  const dataHandling = [
    {
      phase: 'Collection',
      description: 'We only collect data necessary for service functionality',
      practices: [
        'Minimal data collection',
        'Explicit user consent',
        'Purpose limitation',
        'Transparent policies'
      ]
    },
    {
      phase: 'Processing',
      description: 'All processing is done securely with encryption and access controls',
      practices: [
        'Encrypted processing',
        'Access logging',
        'Data anonymization',
        'Secure algorithms'
      ]
    },
    {
      phase: 'Storage',
      description: 'Data is stored in secure, encrypted databases with regular backups',
      practices: [
        'Encrypted at rest',
        'Regular backups',
        'Geographic redundancy',
        'Retention policies'
      ]
    },
    {
      phase: 'Deletion',
      description: 'Secure deletion processes ensure data is completely removed',
      practices: [
        'Secure deletion',
        'Verification processes',
        'Backup purging',
        'Audit trails'
      ]
    }
  ];

  return (
    <PageLayout 
      title="Security & Privacy"
      description="Your data security and privacy are our top priorities. Learn about our comprehensive security measures."
    >
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Certifications & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className={`w-12 h-12 ${
                    cert.status === 'Certified' || cert.status === 'Compliant' 
                      ? 'bg-green-100' 
                      : 'bg-yellow-100'
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <FileCheck className={`h-6 w-6 ${
                      cert.status === 'Certified' || cert.status === 'Compliant' 
                        ? 'text-green-600' 
                        : 'text-yellow-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.status === 'Certified' || cert.status === 'Compliant'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Handling */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Handling Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataHandling.map((phase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Security Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Security Practices</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Safeguards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular security assessments and penetration testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated vulnerability scanning and patching</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 security monitoring and incident response</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Secure development lifecycle practices</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational Safeguards</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Employee security training and awareness programs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Background checks for all personnel</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Incident response and business continuity plans</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular security policy reviews and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Security Contact */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security Questions or Concerns?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our security team is here to help. If you have questions about our security practices or need to report a security issue, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Security Team
              </button>
              <button className="text-purple-600 px-8 py-3 rounded-lg border-2 border-purple-200 hover:border-purple-300 transition-colors">
                Report Security Issue
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SecurityPage;