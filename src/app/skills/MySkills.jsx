import React from "react";
import HoverCard from "../component/HoverCard";

const skillGroups = [
  {
    title: "UI/UX & Product Design",
    items: [
      "User Research",
      "Information Architecture",
      "User Flows & Journey Mapping",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Design Systems & Developer Handoff",
      "Dashboard & Data Visualization",
      "Responsive & Cross-Platform Design",
      "Accessibility",
    ],
  },
  {
    title: "Design Tools",
    levels: [
      ["Figma", "Advanced"],
      ["Adobe Photoshop", "Expert"],
      ["Adobe Illustrator", "Expert"],
      ["Canva", "Proficient"],
      ["CorelDRAW", "Proficient"],
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "SASS",
      "JavaScript (Working Knowledge)",
      "React (UI Implementation Support)",
      "Bootstrap",
      "Tailwind CSS",
      "Ant Design",
    ],
  },
  {
    title: "Platforms & CMS",
    items: ["WordPress", "Shopify", "OpenCart", "Ghost", "Webflow"],
  },
];

const competencies = [
  { name: "UI/UX Design", level: 95 },
  { name: "Figma & Design Tools", level: 90 },
  { name: "Dashboard Design", level: 92 },
  { name: "Frontend Development", level: 80 },
  { name: "Design Systems", level: 88 },
  { name: "WordPress / CMS", level: 85 },
];

function MySkills() {
  return (
    <section className="section section--band bg-[#faf9fb] dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              style={{ "--reveal-delay": `${(index % 2) * 120}ms` }}
            >
              <HoverCard>
                <h2 className="mb-4 border-b border-gray-200 pb-3 text-2xl font-bold dark:border-slate-600">
                  {group.title}
                </h2>

                {group.items && (
                  <ul className="bullet-list space-y-2 text-gray-700 dark:text-gray-300">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {group.levels && (
                  <ul className="space-y-1">
                    {group.levels.map(([tool, level]) => (
                      <li
                        key={tool}
                        className="flex justify-between rounded-md border-b border-gray-100 px-2 py-2 transition-colors duration-300 last:border-b-0 hover:bg-purple-50 dark:border-slate-600 dark:hover:bg-slate-600/60"
                      >
                        <span>{tool}</span>
                        <span className="text-gray-600 dark:text-gray-400">{level}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </HoverCard>
            </div>
          ))}
        </div>

        {/* -------------------- CORE COMPETENCIES -------------------- */}
        <div className="mx-auto mt-16 max-w-3xl" data-reveal>
          <h2 className="text-center text-3xl font-bold text-purple-700 dark:text-purple-300">
            Core Competencies
          </h2>

          <p className="mt-2 mb-10 text-center text-gray-500 dark:text-gray-400">
            Key areas where I deliver the most value
          </p>

          <div className="space-y-8">
            {competencies.map((skill) => (
              <div key={skill.name} className="group">
                <div className="mb-2 flex justify-between">
                  <span className="font-medium text-purple-700 transition-colors duration-300 group-hover:text-[#07bdd5] dark:text-purple-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
                  <div
                    className="skill-fill h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
                    style={{ width: `${skill.level}%`, "--level": `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
