import { useState } from "react";
import SelectDropdown from "./selectDropdown/SelectDropdown";

const options = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "JavaScript",
    value: "javascript",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  {
    label: "MongoDB",
    value: "mongodb",
  },
  {
    label: "Node.js",
    value: "nodejs",
  },
  {
    label: "Express.js",
    value: "expressjs",
  },
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "NestJS",
    value: "nestjs",
  },
  {
    label: "Vite",
    value: "vite",
  },
  {
    label: "Redux Toolkit",
    value: "redux-toolkit",
  },
  {
    label: "Bootstrap",
    value: "bootstrap",
  },
  {
    label: "Sass",
    value: "sass",
  },
  {
    label: "HTML5",
    value: "html5",
  },
  {
    label: "CSS3",
    value: "css3",
  },
  {
    label: "MySQL",
    value: "mysql",
  },
  {
    label: "Docker",
    value: "docker",
  },
  {
    label: "Firebase",
    value: "firebase",
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  const handleOnChange = (e) => {
    setSelected(e);
  };

  return (
    <div class="wrapper">
      <div className="demo-wrapper">
        <h4 className="demo-display">{`You are selected ${
          selected ? selected.label : "Nothing"
        }`}</h4>

        {/* Component call */}
        <SelectDropdown
          selected={selected}
          data={options}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}

export default App;
