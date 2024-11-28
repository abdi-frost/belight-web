import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Facebook, InstagramIcon, Linkedin, Twitter } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-32 py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Info Section */}
        <div className="bg-primary text-slate-100 rounded-lg p-6 md:p-12">
          <h2 className="text-2xl font-semibold mb-4">What can you expect from our Demo!</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-white mr-4" />
              Discuss your form and workflow goals!
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-white mr-4" />
              Live walk through the requirements.
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-white mr-4" />
              Expert insights.
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-white mr-4" />
              Interactive Q&A session.
            </li>
          </ul>
          <h3 className="mt-6 md:mt-12 text-lg font-bold">Contact Information</h3>
          <p className="mt-2">Phone: +102 3456 789</p>
          <p className="mt-2">Email: demo@gmail.com</p>
          <p className="mt-2">Address: 132 Addis Ababa, Ethiopia</p>

          <div className="mt-6 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="+102 3456 789"
                />
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700">Business Size</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                  <option>Select Your Business Size</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">What are your enterprise requirements?</label>
              <textarea
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                rows={4}
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="ml-auto mt-4 px-4 bg-primary text-white py-2 rounded-md hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
