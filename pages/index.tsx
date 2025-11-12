import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className=" lg:mt-20 md:p-16 text-2xl md:leading-loose fade-in">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-4xl md:text-7xl font-bold mb-8">
            👋 Hi I'm Jennie
          </p>
          <p className="text-base md:text-3xl mb-8">
            A web developer with good communication skills, and a strong work
            ethic. Like to solve problems in different ways, and challenge
            myself to do better.
            <br /> Originally from Taiwan.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:pl-16 fade-in-1">
        <a className="mb-4 md:mr-8" href="https://github.com/jenniehuang">
          <Image src="/github.png" width={45} height={45} style={{ objectFit: 'contain' }} alt="GitHub" />
        </a>
        <a
          className="mb-4 md:mr-8"
          href="https://www.linkedin.com/in/yu-ting-huang-643453143/"
        >
          <Image
            src="/linkedin.png"
            width={45}
            height={45}
            style={{ objectFit: 'contain' }}
            alt="LinkedIn"
          />
        </a>
        <a className="mb-4 md:mr-8" href="https://medium.com/@tingt">
          <Image src="/medium.png" width={40} height={40} style={{ objectFit: 'contain' }} alt="Medium" />
        </a>
        <a
          className="mb-4 -mt-1 md:mr-8 border-2 border-black rounded-md px-4 py-1 text-lg font-semibold"
          href="/Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
        <div
          onClick={() => {
            window.open("mailto:ting1236t19@gmail.com");
          }}
          className="mb-4 md:mr-8 cursor-pointer underline text-lg font-semibold"
        >
          ting1236t19@gmail.com
        </div>
      </div>
    </div>
  );
}

