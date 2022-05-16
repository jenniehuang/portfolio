import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className=" w-full h-screen flex flex-col items-center justify-center px-20">
        {children}
      </div>
    </>
  );
};

export default Layout;
