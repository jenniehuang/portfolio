import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className=" w-full flex flex-col justify-center items-center px-4 md:px-20  mt-20   font-serif ">
        {children}
      </div>
    </>
  );
};

export default Layout;
