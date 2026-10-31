const About = () => {
  const featuresData = [
    {
      title: "Push to deploy",
      description: "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero."
    },
    {
      title: "SSL certificates",
      description: "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima."
    },
    {
      title: "Simple queues",
      description: "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam."
    },
    {
      title: "Advanced security",
      description: "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum."
    },
    {
      title: "Powerful API",
      description: "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error."
    },
    {
      title: "Database backups",
      description: "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio."
    }
  ];

  return (
    <section className="min-h-screen bg-[#0C1220] text-white flex items-center justify-center px-6 py-20 font-sans">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            All-in-one platform
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam 
            voluptatem cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <h3 className="text-base font-semibold tracking-wide text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;