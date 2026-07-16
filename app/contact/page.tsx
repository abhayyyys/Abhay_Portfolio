"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="pt-20 px-4 sm:px-6 lg:px-8 pb-16"
      style={{ backgroundColor: "#EDF1F0" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl  mb-4"
            style={{ fontFamily: "Hanson, sans-serif" }}
          >
            Let&apos;s Create Something Amazing
          </h1>
          <p className="text-lg text-gray-600">
            Tell me about your project and let&apos;s bring your vision to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Company name (if applicable)"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type *
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors appearance-none"
            >
              <option value="">Select project type</option>
              <option value="corporate">Corporate Video</option>
              <option value="commercial">Commercial/Advertisement</option>
              <option value="event">Event Coverage</option>
              <option value="wedding">Wedding/Personal Event</option>
              <option value="documentary">Documentary</option>
              <option value="promotional">Promotional Video</option>
              <option value="music">Music Video</option>
              <option value="social">Social Media Content</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors appearance-none"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under ₹10,000</option>
                <option value="10k-30k">₹10,000 - ₹30,000</option>
                <option value="30k-50k">₹30,000 - ₹50,000</option>
                <option value="50k-70k">₹50,000 - ₹70,000</option>
                <option value="70k-plus">₹70,000+</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline *
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors appearance-none"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Rush job)</option>
                <option value="1-2weeks">1-2 weeks</option>
                <option value="1month">Within 1 month</option>
                <option value="2-3months">2-3 months</option>
                <option value="flexible">Flexible timeline</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="City, State or specific venue"
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-2 py-3 border-0 border-b-2 border-black bg-transparent focus:outline-none focus:border-orange-500 transition-colors resize-y"
              placeholder="Tell me about your vision, goals, target audience, specific requirements, style preferences, and any other important details..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-500 transition-colors duration-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              style={{ fontFamily: "Product Sans, sans-serif" }}
            >
              Send Project Inquiry
            </button>
          </div>
        </form>

        {/* Alternative contact info */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
          <div className="space-y-2">
            <p className="text-lg">
              <a
                href="mailto:abhaysingh.mov@gmail.com"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                abhaysingh.mov@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              <a
                href="https://instagram.com/abhayyyysingh"
                className="hover:text-orange-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @abhayyyysingh
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
