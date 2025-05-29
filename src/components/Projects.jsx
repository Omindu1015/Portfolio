import { Description } from "@radix-ui/react-toast";
import { ExternalLink, Github , ArrowRight} from "lucide-react";

const projects=[
    {
        id:1,
        title: "MediPass App",
        description:"A healthcare app designed for patients to store and view medications, prescriptions,vaccination records, and blood donation history. Doctors can access patient records securely via QR code authentication.",
        image:"/projects/project1.jpg",
        tags:["ReactNative", "Spring Boot"] ,
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:2,
        title: "Climate Action Website",
        description:"A university group project providing information on climate actions around the world. Features include a splash screen, gallery editor’s page, content pages, and an online shop.",
        image:"/projects/project2.jpg",
        tags:["HTML", "CSS", "JavaScript"] ,
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:3,
        title: "Ticket Booking Application",
        description:"A simple console-based application that allows customers to add and remove tickets from vendors.",
        image:"/projects/project3.jpg",
        tags:["Java"] ,
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:4,
        title: "Plane Management System",
        description:"A desktop application for managing flight ticket bookings. Users can book,cancel, search, and view ticket sale details efficiently.",
        image:"/projects/project4.jpg",
        tags:["Java"] ,
        demoUrl:"#",
        githubUrl:"#",
    },
    {
        id:5,
        title: "University Student Grading System",
        description:"An application that processes student marks to determine results (pass, fail, defer), displays a histogram, and stores the results in a text file.",
        image:"/projects/project5.jpg",
        tags:["Python"] ,
        demoUrl:"#",
        githubUrl:"#",
    },
];

export const Projects = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects

                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are my academic and personal projects, including mobile apps, web applications, and backend systems.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="overflow-hidden h-48">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4 items-center justify-center">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/50 text-secondary-foreground " >
                                            {tag}

                                        </span>
                                        ))}

                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-center items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"href="https://github.com/Omindu1015"> Check My GitHub<ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    );
};