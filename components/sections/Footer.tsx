import React from 'react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} Almonzer Hamid. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <SocialIcon href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35.0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </SocialIcon>
          <SocialIcon href="#">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1 .4-2 .7-3 .9-1.8.3-3.6.3-5.4.1-1.8-.2-3.6-.5-5.4-.9-1.2-.3-2.4-.6-3.6-1-1.2-.4-2.4-.8-3.6-1.3v3.3c.5.2 1 .4 1.5.6.5.2 1 .4 1.5.6.5.2 1 .3 1.5.4.5.1 1 .2 1.5.2s1 .1 1.5.1h1.5c.5 0 1 0 1.5-.1.5 0 1-.1 1.5-.2.5-.1.9-.2 1.4-.4.5-.1.9-.3 1.4-.5.5-.2.9-.4 1.4-.6.5-.2.9-.5 1.4-.7v-3.3c-1.2.5-2.4.9-3.6 1.3-1.2.4-2.4.8-3.6 1-1.8.3-3.6.5-5.4.9-1.8.4-3.6.7-5.4.9-1.8.2-3.6.3-5.4.1-1.8-.2-3.6-.5-5.4-.9-1.2-.4-2.4-.8-3.6-1.3C2.7 11.2 1.5 9.4.5 8c1.2-2 2.8-3.8 5.3-5.2C7.6 1.9 9.8 1.4 12 1.4c2.2 0 4.4.5 6.4 1.4 2 .9 3.6 2.2 4.6 3.2z"></path></svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
