import { useNavigate } from "react-router-dom";
import { project } from "../assets";

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project?id=${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {[1].map((id) => (
        <div
          key={id}
          onClick={() => handleClick(id)}
          className="p-6 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
        >
          <img src={project} alt="project preview" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
