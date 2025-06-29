import { Key } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "React Native", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  //backend
  { name: "Java", level: 85, category: "Backend" },
  { name: "MySQL", level: 90, category: "Backend" },
  { name: "MongoDB", level: 75, category: "Backend" },

  //Tools
  { name: "Git", level: 85, category: "Tools" },
  { name: "Bitbucket", level: 80, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "IntelliJ IDEA", level: 90, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {" "}
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={
                cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ?"bg-primary text-primary-foreground":"bg-secondary/70 text-foreground hover:bd-secondary"

                )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, Key) => (
            <div
              key={Key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
