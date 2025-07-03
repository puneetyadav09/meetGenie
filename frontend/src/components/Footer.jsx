import React from 'react';
import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">MeetGenie</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transform your meetings with AI-powered transcription, intelligent summarization, 
              and automatic action item detection. Make every conversation count.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/puneetyadav0903" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/puneetyadav09" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/puneetyadav09" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-center md:text-left">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link to="/api" className="hover:text-purple-400 transition-colors">API</Link></li>
              <li><Link to="/integrations" className="hover:text-purple-400 transition-colors">Integrations</Link></li>
              <li><Link to="/security" className="hover:text-purple-400 transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-center md:text-left">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-purple-400 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400 transition-colors">Blog</Link></li>
              <li><Link to="/press" className="hover:text-purple-400 transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>puneetyadav.pv@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Global Remote Team</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/login" className="hover:text-purple-400 transition-colors">Login</Link>
                <Link to="/signup" className="hover:text-purple-400 transition-colors">Sign Up</Link>
                <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MeetGenie. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="https://puneet-portfolio-website.vercel.app" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Portfolio
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-sm text-gray-400">
                Built with ❤️ by Puneet Yadav
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;