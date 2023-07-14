import { PropsWithChildren,ReactNode } from "react"
const Container = ({
    children,
    customStyles,
  }: {
    children: PropsWithChildren<ReactNode>;
    customStyles?: string;
  }) => {
    return (
      <section className={`max-w-[960px] mx-auto  px-4 lg:px-0  ${customStyles}`}>
        {children}
      </section>
    );
  };
  
  export default Container;
  