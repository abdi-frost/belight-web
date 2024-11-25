import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-inherit p-4 md:py-8 md:px-12">
      <Hero />
      <Services />
      <Testimonials />
      <Partners />
    </div>
  );
}


function Hero() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 md:py-20 md:my-10">
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

          <div className="lg:w-1/2 flex gap-4 max-h-[480px]">
            <div className="flex flex-col gap-2">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/hero1.png"
                  alt="Working professional"
                  layout="responsive"  // Ensures responsiveness
                  width={400}         // Set the width as the natural width of the image
                  height={400}         // Set height as the natural height of the image
                  className="object-cover w-full h-auto"  // Ensures the image doesn't stretch and keeps the aspect ratio
                />
              </div>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/hero1.png"
                  alt="Working professional"
                  layout="responsive"  // Ensures responsiveness
                  width={400}         // Set width as the natural width of the image
                  height={400}         // Set height as the natural height of the image
                  className="object-contain w-full h-auto"  // Ensures image stays contained within its container
                />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/hero2.png"
                alt="Professional at work"
                layout="responsive"
                width={400}    // Set appropriate size
                height={400}   // Set appropriate size
                className="h-full object-contain" // Ensures the image doesn't stretch and keeps the aspect ratio
              />
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-4 -z-10">
          <div className="w-24 h-24 rounded-full bg-secondary opacity-50"></div>
          <div className="w-20 h-20 rounded-full bg-secondary opacity-50 absolute top-2 right-2"></div>
          <div className="w-16 h-16 rounded-full bg-secondary opacity-80 absolute top-4 right-4"></div>
          <div className="w-12 h-12 rounded-full bg-secondary absolute top-6 right-6"></div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div>
      Services
    </div>
  )
}

function Testimonials() {
  return (
    <div>
      Testimonials
    </div>
  )
}

function Partners() {
  return (
    <div>
      Partners
    </div>
  )
}