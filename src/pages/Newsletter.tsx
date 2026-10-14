import { useEffect } from 'react';
import { Mail } from 'lucide-react';

type MailerLiteWindow = Window & {
  ml?: (
    command: string,
    formId: string,
    forceDisplay?: boolean
  ) => void;
};

const MAILERLITE_FORM_ID = 'qdwaSr';

function openNewsletterForm() {
  const mailerLiteWindow = window as MailerLiteWindow;

  if (typeof mailerLiteWindow.ml === 'function') {
    mailerLiteWindow.ml(
      'show',
      MAILERLITE_FORM_ID,
      true
    );
  } else {
    console.error('MailerLite failed to load.');
  }
}

function Newsletter() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Open the signup popup when someone arrives through
    // the direct newsletter address or QR code.
    const timer = window.setTimeout(() => {
      openNewsletterForm();
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12 text-center">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <Mail
              className="w-7 h-7 text-red-600"
              aria-hidden="true"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Newsletter
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-8">
            Sign up to receive news and updates from More Than Conquerors.
          </p>

          <button
            type="button"
            onClick={openNewsletterForm}
            className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium transition-colors text-base"
          >
            Open Newsletter Signup
          </button>

          <p className="text-sm text-gray-500 mt-4">
            The signup form should open automatically. Use the button if it does
            not appear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
