import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full text-black bg-white border-b z-20  font-serif ">
      <div className="flex flex-row justify-between md:mx-20 p-4 text-xl md:text-2xl">
        <div className="left-0">
          <Link href="/">JennieHuang</Link>
        </div>
        <ul className="flex flex-row ">
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
