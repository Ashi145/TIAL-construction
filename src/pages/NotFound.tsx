import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { PrimaryButton } from "../components/Buttons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-7xl font-black text-brand-700">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-charcoal-900">Page Not Found</h1>
      <p className="mt-2 max-w-md text-sm text-charcoal-600">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <PrimaryButton to="/">
          <Home className="h-4 w-4" /> Back to Home
        </PrimaryButton>
        <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
