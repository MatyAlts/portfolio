import { OrbitingCircles } from "./OrbitingCircles";
import { memo } from "react";

export const Frameworks = memo(function Frameworks() {
  const skills = [
    "auth0",
    "azure",
    "python",
    "java",
    "cpp",
    "css3",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "n8n",
    "postgresql",
    "react",
    "sql",
    "tailwindcss",
    "typescript",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
});

const Icon = memo(({ src }) => (
  <img src={src} alt="" className="duration-200 rounded-sm hover:scale-110" />
));

Icon.displayName = 'Icon';
