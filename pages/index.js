import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jennie Huang</title>
      </Head>
      <div className=" md:p-16 text-2xl mt-16 leading-loose">
        <div className=" relative w-full md:w-1/2">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-80 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

          <p>
            A full stack web developer with a strong grasp of programming
            principles and a passion for coding, excellent communication skills,
            and a strong work ethic. Originally from Taiwan, currently based in
            Taipei. Fluent in Mandarin, Javascript, and Python; conversational
            in English.
          </p>
        </div>
      </div>
    </div>
  );
}
