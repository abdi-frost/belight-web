"use client";
import { useState } from "react";
import Image from "next/image";
import serviceImage from "../../../public/service.png";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  return (
    <div className="bg-inherit md:py-8 overflow-x-hidden">
      <Hero />
      <Services />
      <Testimonials />
      <Partners />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-8 md:px-20 md:py-20 md:my-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:max-h-96">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-[2px] bg-blue-700"></div>
              <p className="text-lg">Welcome To BeLight</p>
            </div>

            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6">
              Unleash Your Digital Potential with BeLight
            </h1>

            <p className="text-gray-600 mb-8 md:mr-12">
              At Be Light, we are dedicated to empowering businesses with cutting-edge software solutions and digital marketing strategies. Our team of experts combines technical prowess.
            </p>

            <button className="btn btn-lg bg-primary2 hover:bg-primary border-none text-white">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2 flex gap-4 max-h-[480px] relative">
            <div className="flex flex-col gap-2">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/hero1.png"
                  alt="Working professional"
                  layout="responsive"
                  width={400}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/hero1.png"
                  alt="Working professional"
                  layout="responsive"
                  width={400}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/hero2.png"
                alt="Professional at work"
                layout="responsive"
                width={400}
                height={400}
                className="h-full object-contain"
              />
            </div>

            {/* Curvy Decoration */}
            <div className="absolute -top-28 -right-24 -z-10">
              <Image
                src="/circledecoration.png"
                alt="Curvy decoration"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Services() {

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build responsive and user-friendly websites that are tailored to your business needs.",
      icon: "web-development.svg"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "We develop mobile applications that are fast, secure, and scalable.",
      icon: "mobile-development.svg"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "We help you reach your target audience and grow your business online.",
      icon: "digital-marketing.svg"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "We design intuitive and visually appealing interfaces that enhance user experience.",
      icon: "ui-ux-design.svg"
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "We optimize your website to rank higher on search engine results pages.",
      icon: "seo-optimization.svg"
    },
    {
      id: 6,
      title: "E-commerce Solutions",
      description: "We build e-commerce platforms that are secure, scalable, and easy to manage.",
      icon: "ecommerce-solutions.svg"
    }
  ];

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto p-10 md:px-20 md:py-26">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.title} id={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  )
}



function Testimonials() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
      company: "ABC Corp",
      location: "New York, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Smith",
      company: "XYZ Inc",
      location: "San Francisco, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Alice Johnson",
      company: "Tech Solutions",
      location: "Austin, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Bob Brown",
      company: "Innovate Now",
      location: "Miami, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Alice Johnson",
      company: "Tech Solutions",
      location: "Austin, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Alice Johnson",
      company: "Tech Solutions",
      location: "Austin, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Bob Brown",
      company: "Innovate Now",
      location: "Miami, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Alice Johnson",
      company: "Tech Solutions",
      location: "Austin, USA",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Bob Brown",
      company: "Innovate Now",
      location: "Miami, USA",
      image: "https://via.placeholder.com/150"
    },
    // Add more testimonials as needed
  ];

  const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
      <div className="relative w-full mx-auto px-4 py-8">
        <button
          onClick={prevTestimonial}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 p-2 transition font-bold text-lg text-primary"
        >
          &#8592;
        </button>
        <div className="flex overflow-hidden">
          {testimonials.slice(currentIndex, currentIndex + itemsToShow).map((testimonial, index) => (
            <div key={index} className="p-2 transition-transform duration-500 ease-in-out w-1/3">
              <div className="card bg-white rounded-md p-6 h-full">
                <p className="text-lg mb-4">{testimonial.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4"
                    width={64}
                    height={64}
                  />
                  <div className="">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 p-2 transition font-bold text-lg text-primary rounded-full"
        >
          &#8594;
        </button>
      </div>
    );
  };

  return (
    <div className="bg-primarylight">
      <div className="container mx-auto px-4 py-8 md:px-20 md:py-16">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-[2px] bg-blue-700"></div>
          <p className="text-md">Testimonials</p>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Customers Talk About Us
        </h1>
        <p className="text-md text-gray-700 mb-8 md:w-3/5">
          Customer support represents the resources within your company that provide technical assistance
          to consumers after they purchase a product or service.
        </p>
        <TestimonialCarousel />
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div className="container  mx-auto px-4 py-8 md:px-20 md:py-12">
      <div>
        <h2 className="text-center font-bold text-slate-700 text-2xl md:text-4xl tracking-wide my-4">Our Partners</h2>
        <p className="text-center text-slate-500">We have some amazing Partners.</p>
      </div>
      <div className="mt-10 md:mx-10 flex flex-wrap gap-4 sm:gap-8 md:gap-12 lg:gap-16 justify-center">
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
        <div className="mx-6">
          <Image src={serviceImage} width={100} height={100} alt={"partner logo"} className="object-fit" />
        </div>
      </div>
    </div>
  )
}