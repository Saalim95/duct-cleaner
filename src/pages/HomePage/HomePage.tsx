import { useNavigate } from "react-router-dom";
import AirIcon from "@mui/icons-material/Air";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate("/schedule");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Breathe Cleaner Air Today
              </h1>
              <p className="text-xl text-blue-100">
                Professional duct cleaning services for healthier homes and improved air quality. Expert technicians, affordable rates, same-day service available.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleGetQuote}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Free Quote
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-200">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <VerifiedIcon className="text-yellow-300" />
                  <span className="text-sm">Certified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <SpeedIcon className="text-yellow-300" />
                  <span className="text-sm">Fast Service</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <AirIcon className="text-white text-9xl mx-auto opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive duct cleaning solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CleaningServicesIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Residential Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                Complete home duct system cleaning to improve air quality and reduce allergens for your family.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Air duct cleaning
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Dryer vent cleaning
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  HVAC maintenance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <AirIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Commercial Services
              </h3>
              <p className="text-gray-600 mb-4">
                Keep your business environment healthy with professional commercial duct cleaning services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Office buildings
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Retail spaces
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Industrial facilities
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <SpeedIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Emergency Service
              </h3>
              <p className="text-gray-600 mb-4">
                Need urgent duct cleaning? We offer same-day emergency services for critical situations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  24/7 availability
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Rapid response
                </li>
                <li className="flex items-center gap-2">
                  <VerifiedIcon className="text-green-500 text-sm" />
                  Priority scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Clean Air Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Quality service you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <VerifiedIcon className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Certified Experts
              </h3>
              <p className="text-gray-600">
                All our technicians are certified and highly trained professionals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MonetizationOnIcon className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Affordable Rates
              </h3>
              <p className="text-gray-600">
                Competitive pricing without compromising on quality
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <SpeedIcon className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quick Turnaround
              </h3>
              <p className="text-gray-600">
                Same-day service available for most jobs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CleaningServicesIcon className="text-white text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                100% Satisfaction
              </h3>
              <p className="text-gray-600">
                We guarantee quality work or your money back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Air Quality?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free quote today and breathe easier tomorrow
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            Schedule Your Service Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help with all your duct cleaning needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Sat 8AM-6PM</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <EmailIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@cleanair.com</p>
              <p className="text-sm text-gray-500 mt-1">24/7 support</p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocationOnIcon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">123 Main Street</p>
              <p className="text-sm text-gray-500 mt-1">Your City, ST 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Clean Air Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
