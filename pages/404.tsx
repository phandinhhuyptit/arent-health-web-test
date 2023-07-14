import React from "react";
import { Container } from "@/layouts";
const NotFound = () => {
  return (
    <Container customStyles="h-[85vh] flex items-center justify-center ">
      <div className="">
        <h1 className="text-dark-orange-700 text-center text-[clamp(15rem,40vw,54vh)] ">404</h1>
      </div>
    </Container>
  );
};

export default NotFound;
