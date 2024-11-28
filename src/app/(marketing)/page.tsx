/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
      <div className="mx-auto px-4 py-8 md:px-20 md:py-20 md:my-10">
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

          <div className="w-full lg:w-1/2 flex gap-4 max-h-[480px] relative">
            <div className="w-2/5 flex flex-col gap-2">
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
            <div className="w-full rounded-xl overflow-hidden">
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
    <div className="">
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
      text: "Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedicated support have helped us achieve unprecedented growth.",
      author: "Sarah Chen",
      company: "Innovate Tech",
      location: "Singapore",
      image: "/person.png"
    },
    {
      text: "The level of professionalism and expertise they bring to the table is unmatched. Our productivity has increased by 200% since implementing their solutions.",
      author: "James Wilson",
      company: "Digital Dynamics",
      location: "London, UK",
      image: "/person.png"
    },
    {
      text: "Outstanding service and exceptional results. They don't just deliver solutions; they become a valuable partner in your business journey.",
      author: "Maria Rodriguez",
      company: "Global Solutions",
      location: "Madrid, Spain",
      image: "/person.png"
    }
  ];

  return (
    <div className="container bg-primarylight mx-auto p-10 md:px-20 md:py-26">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-[2px] bg-primary"></div>
          <p className="text-primary font-medium">Testimonials</p>
        </div>

        <h1 className="text-4xl font-bold mb-6 text-primary-1">
          What Our Clients Say
        </h1>

        <p className="text-lg text-primary-2 mb-12 max-w-2xl">
          Discover how we&apos;ve helped businesses transform their operations and achieve remarkable success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full 
                ${index === 0 ? 'bg-primary/10' :
                  index === 1 ? 'bg-secondary-1/10' : 'bg-secondary-2/10'}`}
              ></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Quote icon */}
                <svg className="w-10 h-10 text-primary-2/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-primary-2 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-bold text-primary-1">{testimonial.author}</p>
                    <p className="text-sm text-primary-2">
                      {testimonial.company}
                      <span className="mx-2">•</span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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