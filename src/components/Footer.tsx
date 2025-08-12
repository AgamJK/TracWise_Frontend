import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-glow mb-4 block">
              TracWise
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              AI-powered assistance for tractor operators. Get instant answers from official manuals 
              with our intelligent question-answering system.
            </p>
            <p className="text-slate-400 text-sm">
              Made with 💻 in India
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-primary-glow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-300 hover:text-primary-glow transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/chat" className="text-slate-300 hover:text-primary-glow transition-colors">
                  Ask a Question
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-primary-glow transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary-glow transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-primary-glow transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 TracWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;