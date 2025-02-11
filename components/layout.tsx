import Footer from "./footer";
import Header from "./header";

type props = {
  children: React.ReactNode
};


const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>

  );
};

export default Layout;
