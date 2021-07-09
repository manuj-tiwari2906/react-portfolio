import React from "react";
import myPic from "../../src/my-pic.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-sm-6 ">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={myPic} alt="my-picture" />
          </div>
        </div>
        <div className="col-sm-6 ">
          <h1 className="about-heading">About Me</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            itaque ut eos impedit, asperiores saepe sequi doloremque atque error
            beatae rerum magnam illum consequatur eligendi labore eaque
            accusamus repudiandae, laudantium voluptas ullam qui quae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit
            quaerat fugit, pariatur corporis rerum asperiores quidem dolorem
            possimus excepturi non ex et deleniti rem reiciendis, molestias
            alias, quam saepe? At laborum iure veritatis distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
