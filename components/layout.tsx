import Header from "./header";

type props = {
  children: React.ReactNode
};


const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
