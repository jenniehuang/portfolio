import Image from "next/image";

interface SkillProps {
  skill: {
    title: string;
    img: string;
  };
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className=" w-1/3 md:w-40 p-4 md:m-8 flex flex-col justify-between items-center hover:bg-slate-400 rounded-md">
      <Image
        className="w-full"
        src={skill.img}
        width={200}
        height={200}
        style={{ objectFit: 'contain' }}
        alt={skill.title}
      />

      <p className="font-semibold mt-4 text-lg">{skill.title}</p>
    </div>
  );
};

export default Skill;

