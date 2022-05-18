import Image from "next/image";

const Project = ({ project }) => {
  return (
    <div className="group relative w-full lg:w-5/12 lg:mx-8 mb-16 p-4">
      <Image
        className=" left-0 right-0 top-0 bottom-0 group-hover:filter group-hover:blur "
        src={project.img}
        width={600}
        height={400}
        objectFit="contain"
      />
      <div className=" opacity-0 group-hover:opacity-100 absolute right-0 left-0 bottom-0 top-0 z-10 bg-zinc-700 bg-opacity-80 flex flex-col justify-center items-center text-white p-4 lg:p-16 text-center rounded-md transition-all duration-300 ">
        <p className="text-2xl lg:text-4xl pb-2 lg:pb-8">{project.title}</p>
        <p className="text-sm lg:text-xl pb-2 lg:pb-8">{project.desc}</p>
        <div className="flex flex-row justify-evenly items-center">
          <a href={project.link}>
            <Image
              className=" w-10"
              src="/link.png"
              width={40}
              height={40}
              objectFit="contain"
            />
          </a>
          <a href={project.gh}>
            <Image
              className="w-16"
              src="/gh-w.png"
              width={60}
              height={60}
              objectFit="contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
