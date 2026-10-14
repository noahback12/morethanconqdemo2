import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Heart, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

function Navigation() {
  const openNewsletterForm = () => {
    const mailerLiteWindow = window as typeof window & {
      ml?: (
        command: string,
        formId: string,
        forceDisplay?: boolean
      ) => void;
    };

    if (typeof mailerLiteWindow.ml === 'function') {
      mailerLiteWindow.ml('show', 'qdwaSr', true);
    } else {
      console.error('MailerLite failed to load.');
      alert('Newsletter signup is still loading. Please try again in a moment.');
    }
  };

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src="https://github.com/noahback12/morethanconqdemo/blob/main/src/morethanconquerorsroundlogo.png?raw=true"
                  alt="More Than Conquerors Logo"
                  className="h-10 w-auto"
                />
              </Link>

              <span className="text-lg md:text-xl font-bold text-white">
                More Than Conquerors
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 md:gap-8">

            <Link
              to="/aboutus"
              className="text-gray-200 hover:text-white transition-colors text-base md:text-lg"
            >
              About Us
            </Link>

         <button
  type="button"
  className="ml-onclick-form"
  onClick={() => {
    const mailerLiteWindow = window as typeof window & {
      ml?: (command: string, formId: string, forceDisplay?: boolean) => void;
    };

    mailerLiteWindow.ml?.('show', 'qdwaSr', true);
  }}
>
  Newsletter
</button>
            <a
              href="https://www.facebook.com/morethanconquerorsaf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors"
              aria-label="Visit More Than Conquerors on Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>

            <a
              href="https://www.zeffy.com/donation-form/2dc7b3bb-ef67-475a-b39d-144c57083db8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 text-base"
            >
              Donate Now
              <Heart className="w-4 h-4" />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://github.com/noahback12/morethanconqdemo/blob/main/src/morethanconquerorsroundlogo.png?raw=true"
                alt="More Than Conquerors Logo"
                className="h-8 w-auto"
              />

              <span className="text-lg font-bold">
                More Than Conquerors
              </span>
            </div>

            <p className="text-gray-400 max-w-md text-base">
              A 501(c) charity organization dedicated to serving communities in
              Uganda through Christ&apos;s love and teachings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div>
              <h3 className="font-semibold mb-4 text-base md:text-lg">
                Connect
              </h3>

              <ul className="space-y-2">
                <li>
                  <a
                    href="https://m.me/morethanconquerorsaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/morethanconquerorsaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    Facebook
                  </a>
                </li>

                <li>
                  <Link
                    to="/aboutus"
                    className="text-gray-400 hover:text-white transition-colors text-base"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base md:text-lg">
                Address
              </h3>

              <p className="text-gray-400 text-base">
                PO Box 6061
                <br />
                Evansville, IN 47720
              </p>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} More Than Conquerors. All rights
            reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
