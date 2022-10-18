import Header from "./Header/Header";

interface Props {
  children: JSX.Element | JSX.Element[];
  backIcon?: boolean
}

const Layout = ({ children, backIcon }: Props) => {
  return (
    <>
      <Header backIcon={backIcon} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
