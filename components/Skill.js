import Image from "next/image";
const Skill = ({ skill }) => {
  return (
    <div className=" w-1/3 md:w-40 p-4 md:m-8 flex flex-col justify-between items-center hover:bg-slate-400 rounded-md fade-in">
      {/* <img className="w-full" src={skill.img} alt="" /> */}
      <Image
        className="w-full"
        src={skill.img}
        width="100%"
        height="100%"
        objectFit="contain"
      />

      <p className="font-semibold mt-4 text-lg">{skill.title}</p>
    </div>
  );
};

export default Skill;
