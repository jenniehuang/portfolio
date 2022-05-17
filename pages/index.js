import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" lg:mt-20 md:p-16 text-2xl md:leading-loose fade-in">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-4xl md:text-7xl font-bold mb-8">
            👋 Hi I'm Jennie
          </p>
          <p className="text-base md:text-3xl mb-8">
            A full stack web developer with a strong grasp of programming
            principles and a passion for coding, excellent communication skills,
            and a strong work ethic. Originally from Taiwan, currently based in
            Taipei. Fluent in Mandarin, Javascript, and Python; conversational
            in English.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center md:pl-16 fade-in-1">
        <a className="mr-8" href="https://github.com/jenniehuang">
          <Image src="/github.png" width={40} height={40} objectFit="contain" />
        </a>
        <a
          className="mr-8"
          href="https://www.linkedin.com/in/yu-ting-huang-643453143/"
        >
          <Image
            src="/linkedin.png"
            width={40}
            height={40}
            objectFit="contain"
          />
        </a>
        <div className=" text-lg font-semibold">ting1236t19@gmail.com</div>
      </div>
    </div>
  );
}
