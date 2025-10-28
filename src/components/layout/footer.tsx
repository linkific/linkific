import Link from 'next/link';

const footerNavs = {
  'Quick Links': [
    { href: '/projects', name: 'Projects' },
    { href: '/services', name: 'Services' },
    { href: '/contact', name: 'Contact' },
    { href: '/about', name: 'About Us' },
    { href: '/careers', name: 'Careers' },
  ],
  'Contact': [
    { href: 'mailto:contact@linkific.com', name: 'contact@linkific.com' },
    { href: 'tel:+9022143695', name: '+90 22143695' },
    { href: '#', name: 'Nagpur, Maharashtra 440023' },
  ]
};

const socialLinks = [
  { href: '#', name: 'LinkedIn', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg> },
  { href: '#', name: 'Twitter', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg> },
  { href: 'https://instagram.com/linkific', name: 'Instagram', icon: <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.237 0-3.61.013-4.863.07-2.73.124-4.043 1.3-4.167 4.167-.057 1.253-.069 1.623-.069 4.863s.013 3.61.07 4.863c.124 2.864 1.438 4.043 4.167 4.167 1.253.057 1.623.069 4.863.069s3.61-.013 4.863-.07c2.73-.124 4.043-1.3 4.167-4.167.057-1.253.069-1.623.069-4.863s-.013-3.61-.07-4.863c-.124-2.864-1.438-4.043-4.167-4.167-1.253-.057-1.623-.069-4.863-.069zm0 5.838a4.56 4.56 0 100 9.12 4.56 4.56 0 000-9.12zm0 7.722a3.16 3.16 0 110-6.32 3.16 3.16 0 010 6.32zm6.406-9.33a1.147 1.147 0 10-2.294 0 1.147 1.147 0 002.294 0z"></path></svg>},
];

export default function Footer() {
  return (
    <footer className="mt-16 sm:mt-24 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
              <h2 className="text-white text-xl font-bold">Linkific</h2>
            </div>
            <p className="text-white/60 text-sm">AI-powered automation for the modern business.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavs['Quick Links'].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
               {footerNavs['Contact'].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-white/60 hover:text-white transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/50">
          <p>© 2024 Linkific. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
