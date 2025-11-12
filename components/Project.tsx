import Image from "next/image";

interface ProjectProps {
  project: {
    title: string;
    img: string;
    link: string;
    gh: string;
    desc: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="group relative w-full lg:w-5/12 lg:mx-8 mb-16 p-4">
      <div className="relative w-full h-64 lg:h-96 rounded-md overflow-hidden">
        <Image
          className="group-hover:filter group-hover:blur"
          src={project.img}
          fill
          style={{ objectFit: 'cover' }}
          alt={project.title}
        />
        <div className=" opacity-0 group-hover:opacity-100 absolute right-0 left-0 bottom-0 top-0 z-10 bg-zinc-700 bg-opacity-80 flex flex-col justify-center items-center text-white p-4 lg:p-16 text-center transition-all duration-300 ">
        <p className="text-2xl lg:text-4xl pb-2 lg:pb-8">{project.title}</p>
        <p className="text-sm lg:text-xl pb-2 lg:pb-8">{project.desc}</p>
        <div className="flex flex-row justify-evenly items-center">
          <a href={project.link}>
            <Image
              className=" w-10"
              src="/link.png"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
              alt="Project link"
            />
          </a>
          <a href={project.gh}>
            <Image
              className="w-16"
              src="/gh-w.png"
              width={60}
              height={60}
              style={{ objectFit: 'contain' }}
              alt="GitHub repository"
            />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

