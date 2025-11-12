import { ReactNode } from "react";
import Meta from "./Meta";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className=" w-full flex flex-col justify-center items-center px-4 md:px-20  mt-20 font-serif">
        {children}
      </div>
    </>
  );
};

export default Layout;

