import { Code, Database, Smartphone } from "lucide-react";

export const About= () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Designer & Mobile App Developer
            </h3>
            <p className="text-muted-foreground">
              I’m Omindu Vivandith, a Software Engineering undergraduate at the
              Informatics Institute of Technology. I have experience with React,
              React Native, Java, and Spring Boot. I’ve worked on projects like
              MediPass, a climate action website, and booking systems.
            </p>
            <p className="text-muted-foreground">
              I enjoy building clean, user-friendly applications and learning
              new technologies. I'm a strong team player with good time
              management and problem-solving skills. I'm always excited to take
              on new challenges and grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact
              </a>

              <a
                href="../assets/Omindu_CV.pdf (4).pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile App Developer</h4>
                  <p className="text-muted-foreground">
                    Developing cross-platform mobile applications with React Native for seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Databases Card (now correctly inside the grid) */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Databases</h4>
                  <p className="text-muted-foreground">
                    Experienced with MySQL and MongoDB for managing structured and unstructured data efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Column */}
        </div>
      </div>
    </section>
  );
};
