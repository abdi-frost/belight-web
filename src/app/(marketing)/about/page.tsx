import Image from 'next/image';

export default function About() {
  return (
    <div>
      <VisionComponent />
      <MissionComponent />
      <TeamSection />
    </div>
  )
}



const VisionComponent = () => {
  return (
    <div className="px-4 md:px-14 lg:px-24 py-10 md:py-18 lg:py-24 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-6xl my-3 md:mb-8 font-semibold mb-4">Vision of Our Company</h2>
        <p className="text-gray-600 mb-6">
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality one of Saskatoon&apos;s premier home builders. At Properties, we take pride in building you everything you need to call The Meadows home.
        </p>
        <div className="flex space-x-8 md:space-x-16 mb-6">
          <div>
            <h3 className="text-slate-600 font-semibold">Projects</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">27</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Campaigns</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">18</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Events</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">56</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Excellency</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">13</p>
          </div>
        </div>
      </div>
      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
        <div className="relative overflow-hidden border">
          <Image src="/vision.png" alt="Image" width={500} height={500} className="w-full object-cover" />
        </div>
        <div className="absolute -top-20 -right-24 -z-10">
          <Image
            src="/decoration2.png"
            alt="Curvy decoration"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-24 -left-20 -z-10">
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
  );
};

const MissionComponent = () => {
  return (
    <div className="px-4 md:px-14 lg:px-24 py-10 md:py-18 lg:py-24 md:flex md:items-center md:justify-between">
      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
        <div className="relative overflow-hidden border">
          <Image src="/vision.png" alt="Image" width={500} height={500} className="w-full object-cover" />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h2 className="text-3xl md:text-6xl my-3 md:mb-8 font-semibold mb-4">Vision of Our Company</h2>
        <p className="text-gray-600 mb-6">
          Let our experts prepare a free home analysis for you! Just fill out our form. Surround yourself with the luxury and quality one of Saskatoon&apos;s premier home builders. At Properties, we take pride in building you everything you need to call The Meadows home.
        </p>
        <div className="flex space-x-8 md:space-x-16 mb-6">
          <div>
            <h3 className="text-slate-600 font-semibold">Projects</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">27</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Campaigns</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">18</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Events</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">56</p>
          </div>
          <div>
            <h3 className="text-slate-600 font-semibold">Excellency</h3>
            <p className="text-2xl md:text-6xl text-primary mt-2 font-bold">13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mahbubur Rahman",
      title: "Front End Developer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Tanvir Ahmed",
      title: "Product Designer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Sakib Sharier",
      title: "Workflow Developer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Rifat Shikder",
      title: "WP Developer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Mahbubur Rahman",
      title: "Front End Developer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Tanvir Ahmed",
      title: "Product Designer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Sakib Sharier",
      title: "Workflow Developer",
      image: "/person.png", // Replace with your image path
    },
    {
      name: "Rifat Shikder",
      title: "WP Developer",
      image: "/person.png", // Replace with your image path
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-16 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg pb-4 shadow-md text-center">
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-66 object-cover rounded-t-lg"
              width={300}
              height={300}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
