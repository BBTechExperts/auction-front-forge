
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Buy",
    links: ["Registration", "Money Back Guarantee", "Bidding & buying help", "Stores", "Gift Cards"]
  },
  {
    title: "Sell",
    links: ["Start selling", "How to sell", "Business tools", "Seller protection", "Selling fees"]
  },
  {
    title: "Tools & Apps",
    links: ["Mobile apps", "Developers", "Security center", "Site map", "Seller center"]
  },
  {
    title: "About",
    links: ["Company info", "News", "Investors", "Policies", "Careers"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-ebay-border">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-ebay-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link to="/" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">Privacy</Link>
              <Link to="/" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">Terms</Link>
              <Link to="/" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">Cookies</Link>
              <Link to="/" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">Accessibility</Link>
              <Link to="/" className="text-xs text-gray-600 hover:text-ebay-primary hover:underline">Your Privacy Choices</Link>
            </div>
            <div className="text-xs text-gray-500">
              © 2025 eBuy Inc. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
