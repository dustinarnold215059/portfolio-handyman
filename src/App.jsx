import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    setFormStatus({ submitted: true, error: false });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setFormStatus({ submitted: false, error: false });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center space-x-2 min-w-0 flex-shrink">
              <WrenchScrewdriverIcon className="h-8 w-8 text-primary-600 flex-shrink-0" />
              <h1 className="text-lg sm:text-2xl font-bold text-secondary-900 truncate">Mike's Handyman</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('services')} className="text-secondary-700 hover:text-primary-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-secondary-700 hover:text-primary-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-secondary-700 hover:text-primary-600 transition-colors">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-secondary-700 hover:text-primary-600 transition-colors">
                Contact
              </button>
              <a href="tel:7345777138" className="btn-primary">
                Call Now
              </a>
            </div>
            <a href="tel:7345777138" className="md:hidden btn-primary text-sm py-2 px-4 whitespace-nowrap flex-shrink-0">
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Licensed & Insured • MI License #123456
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
                Your Trusted Local <span className="gradient-text">Handyman</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-secondary-700 mb-8">
                Professional home repair and maintenance services in Metro Detroit. Quality workmanship, upfront pricing, and 100% satisfaction guaranteed.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-secondary-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">4.9</div>
                  <div className="text-sm text-secondary-600 flex items-center justify-center">
                    <StarIconSolid className="h-4 w-4 text-yellow-400 mr-1" />
                    Rating
                  </div>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Get Free Estimate
                </button>
                <a href="tel:7345777138" className="btn-secondary flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  (734) 577-7138
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4 text-sm text-secondary-600">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 text-primary-600 mr-2" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-primary-600 mr-2" />
                  24/7 Emergency Service
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional handyman with tools"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-secondary-600">Starting from</div>
                      <div className="text-2xl font-bold text-primary-600">$69</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-secondary-600">Response time</div>
                      <div className="text-2xl font-bold text-secondary-900">Same Day</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-secondary-900 py-8">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheckIcon, title: 'Licensed & Insured', desc: 'Fully certified' },
              { icon: ClockIcon, title: '24/7 Emergency', desc: 'Always available' },
              { icon: CurrencyDollarIcon, title: 'Upfront Pricing', desc: 'No hidden fees' },
              { icon: CheckBadgeIcon, title: '100% Satisfaction', desc: 'Guaranteed work' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center text-white"
              >
                <badge.icon className="h-12 w-12 text-primary-500 mb-3" />
                <h3 className="font-semibold text-lg mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-400">{badge.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              From minor repairs to major renovations, we handle it all with expertise and care.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: WrenchScrewdriverIcon,
                title: 'Plumbing',
                description: 'Leak repairs, fixture installation, drain cleaning, and water heater services.',
                price: 'From $89',
                image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=800&auto=format&fit=crop',
              },
              {
                icon: BoltIcon,
                title: 'Electrical',
                description: 'Outlet installation, lighting fixtures, ceiling fans, and electrical troubleshooting.',
                price: 'From $99',
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
              },
              {
                icon: HomeIcon,
                title: 'Carpentry',
                description: 'Deck repairs, door installation, cabinet work, and custom woodworking.',
                price: 'From $79',
                image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
              },
              {
                icon: WrenchScrewdriverIcon,
                title: 'General Repairs',
                description: 'Drywall patching, painting, tile work, and general home maintenance.',
                price: 'From $69',
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div className="card h-full flex flex-col">
                  <div className="relative rounded-lg overflow-hidden mb-4 h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                    <service.icon className="absolute bottom-4 left-4 h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">{service.title}</h3>
                  <p className="text-secondary-600 mb-4 flex-grow">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Why Choose Mike's Handyman Services?
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                We're not just another handyman service. We're your neighbors, committed to excellence.
              </p>

              <div className="space-y-4">
                {[
                  'Licensed & insured for your peace of mind',
                  'Upfront, transparent pricing with no hidden fees',
                  '15+ years of professional experience',
                  'Same-day service available for emergencies',
                  '100% satisfaction guarantee on all work',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-secondary-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-8">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Schedule Service Today
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Image Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                    alt="Professional work"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=800&auto=format&fit=crop"
                    alt="Quality tools"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop"
                    alt="Home repair"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
                    alt="Professional service"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-secondary-900 to-secondary-800">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what your neighbors are saying about our work.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                location: 'Dearborn, MI',
                rating: 5,
                text: 'Mike fixed our leaking kitchen faucet and installed new lighting in the living room. He was professional, on time, and the pricing was exactly as quoted. Highly recommend!',
              },
              {
                name: 'Robert Martinez',
                location: 'Livonia, MI',
                rating: 5,
                text: 'Had an emergency electrical issue on a Sunday evening. Mike came out within 2 hours and had it fixed quickly. His expertise and availability saved the day. Will definitely use again!',
              },
              {
                name: 'Jennifer Chen',
                location: 'Ann Arbor, MI',
                rating: 5,
                text: 'We hired Mike for multiple projects including deck repairs and bathroom updates. Quality work, fair prices, and great communication throughout. He\'s now our go-to handyman!',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <div className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full font-semibold">
              4.9 out of 5 stars from 127+ reviews
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Ready to start your project? Fill out the form below or give us a call. We typically respond within 1 hour!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                {formStatus.submitted ? (
                  <div className="text-center py-12">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">Thank You!</h3>
                    <p className="text-secondary-600">
                      We've received your request and will contact you within 1 hour.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="(734) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-secondary-900 mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="plumbing">Plumbing</option>
                          <option value="electrical">Electrical</option>
                          <option value="carpentry">Carpentry</option>
                          <option value="general">General Repairs</option>
                          <option value="emergency">Emergency Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Please describe your project or issue..."
                      ></textarea>
                    </div>

                    {formStatus.error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        Please fill out all required fields.
                      </div>
                    )}

                    <button type="submit" className="w-full btn-primary">
                      Get Free Estimate
                    </button>

                    <p className="text-sm text-secondary-600 text-center">
                      By submitting this form, you agree to be contacted regarding your request.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Call Us</h3>
                    <a href="tel:7345777138" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
                      (734) 577-7138
                    </a>
                    <p className="text-sm text-secondary-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email Us</h3>
                    <a href="mailto:mike@mikeshandyman.com" className="text-primary-600 hover:text-primary-700">
                      mike@mikeshandyman.com
                    </a>
                    <p className="text-sm text-secondary-600 mt-1">Response within 1 hour</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Service Area</h3>
                    <p className="text-secondary-600">Metro Detroit & Surrounding Areas</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-lg p-3">
                    <ClockIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-2">Business Hours</h3>
                    <div className="text-sm text-secondary-600 space-y-1">
                      <div>Mon-Sat: 7AM - 7PM</div>
                      <div>Sunday: 9AM - 5PM</div>
                      <div className="text-primary-600 font-semibold mt-2">24/7 Emergency Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <WrenchScrewdriverIcon className="h-8 w-8 text-primary-500" />
                <h3 className="text-xl font-bold">Mike's Handyman</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted local handyman service in Metro Detroit. Quality work, fair prices, guaranteed satisfaction.
              </p>
              <div className="text-sm text-gray-400">
                MI License #123456
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-primary-500 transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-primary-500 transition-colors">
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary-500 transition-colors">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-primary-500 transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Plumbing Repairs</li>
                <li>Electrical Work</li>
                <li>Carpentry</li>
                <li>General Repairs</li>
                <li>Emergency Service</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start space-x-2">
                  <PhoneIcon className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <a href="tel:7345777138" className="hover:text-primary-500 transition-colors">
                    (734) 577-7138
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <a href="mailto:mike@mikeshandyman.com" className="hover:text-primary-500 transition-colors">
                    mike@mikeshandyman.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPinIcon className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>Metro Detroit, MI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2025 Mike's Handyman Services. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                Licensed & Insured | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
