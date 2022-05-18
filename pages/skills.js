import Skill from "../components/Skill";

const skills = () => {
  const skillsList = [
    {
      title: "HTML5",
      img: "/HTML5.png",
    },
    {
      title: "CSS3",
      img: "/CSS3.png",
    },
    {
      title: "Javascript",
      img: "/Javascript.png",
    },
    {
      title: "Sass",
      img: "/Sass.png",
    },
    {
      title: "Tailwind.css",
      img: "/Tailwind_CSS_Logo.svg",
    },
    {
      title: "Bootstrap",
      img: "/bootstrap.png",
    },
    {
      title: "React",
      img: "/React.png",
    },
    {
      title: "Next.js",
      img: "/NextJS.svg",
    },
    {
      title: "Redux",
      img: "/redux.png",
    },
    {
      title: "Python",
      img: "/Python.png",
    },
    {
      title: "Node.js",
      img: "/NodeJS.png",
    },
    {
      title: "Flask",
      img: "/Flask.svg",
    },
    {
      title: "SQL",
      img: "/SQL.png",
    },
    {
      title: "MongoDB",
      img: "/MongoDB.png",
    },
    {
      title: "Linux",
      img: "/Linux.png",
    },
    {
      title: "git",
      img: "/git.svg",
    },
    {
      title: "Docker",
      img: "/docker.png",
    },
    {
      title: "AWS",
      img: "/aws.png",
    },
    {
      title: "GCP",
      img: "/gcp.jpeg",
    },
    {
      title: "Firebase",
      img: "/firebase.png",
    },
  ];
  return (
    <div className="lg:-mt-8 flex flex-row flex-wrap justify-center  fade-in">
      {skillsList.map((v) => (
        <Skill key={v.title} skill={v} />
      ))}
    </div>
  );
};

export default skills;
