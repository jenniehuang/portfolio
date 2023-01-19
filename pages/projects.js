import Project from "../components/Project";
import Head from "next/head";

const projects = () => {
  const projectsList = [
    {
      title: "📝 Co-Edit",
      img: "/co-edit.png",
      link: "https://www.co-edit.xyz/",
      gh: "https://github.com/jenniehuang/Co-Edit",
      desc: "Co-edit is a WYSIWYG editor that allows you to co-edit the same document with others online in real-time. ",
    },
    {
      title: "🎨 color-picker",
      img: "/cp.png",
      link: "https://www.color-picker.xyz/",
      gh: "https://github.com/jenniehuang/color-picker",
      desc: "Color picker is a game that tests your eyesight. Find the odd one out in this game that gets harder with every point you get! ",
    },
    {
      title: "🏞️ Taipei-day-trip-website",
      img: "/tdtw.png",
      link: "http://13.208.55.153:3000/",
      gh: "https://github.com/jenniehuang/taipei-day-trip-website",
      desc: "Taipei-day-trip-website is an e-commerce website that allows you to find, compare, and book one-day sightseeing tours at attractions in Taipei city. ",
    },
  ];

  return (
    <div className="lg:mt-20 w-11/12 flex flex-row flex-wrap justify-center md:justify-between fade-in">
      {projectsList.map((v) => (
        <Project key={v.title} project={v} />
      ))}
    </div>
  );
};

export default projects;
