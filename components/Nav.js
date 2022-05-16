import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed w-full text-black ">
      <div className="flex flex-row md:justify-between md:mx-20 p-4">
        <div className="left-0 text-2xl">
          <Link href="/">JennieHuang</Link>
        </div>
        <ul className="flex flex-row right-0 justify-between text-2xl">
          <li className="ml-4">
            <Link href="/about">About</Link>
          </li>
          <li className="ml-4">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="ml-4">
            <Link href="/skills">Skills</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
