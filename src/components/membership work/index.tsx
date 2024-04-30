import React from "react";
import { FlexCard, FlexParent } from "./style";
import Cphone from "../../assets/Cphone.png";
import Clocation from "../../assets/CLocation.png";
import Cflag from "../../assets/Cflag.png";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";

const MembershipWork = () => {
  const cardObj = [
    {
      id: 1,
      title: "Create Store",
      info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      profile: work1,
      bg: "#ffffff",
      fcolor1: "black",
      fcolor2: "#616161",
    },
    {
      id: 2,
      title: "List Products",
      info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      profile: work2,
      bg: "#FFBA3F",
      fcolor1: "black",
      fcolor2: "white",
    },
    {
      id: 3,
      title: "Meet Customers",
      info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      profile: work3,
      bg: "#ffffff",
      fcolor1: "black",
      fcolor2: "#616161",
    },
    {
      id: 4,
      title: "Sell At Your Price",
      info: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      profile: work4,
      bg: "#ffffff",
      fcolor1: "black",
      fcolor2: "#616161",
    },
  ];

  return (
    <>
      <h1 className="m-auto text-2xl md:text-4xl text-center font-bold">
        How It Works
      </h1>
      <FlexParent>
        {cardObj.map((e) => {
          return (
            <div key={e.id}>
              <FlexCard style={{ backgroundColor: e.bg }}>
                <div className="imageContainer">
                  <img className="profileimg" src={e.profile} alt="profile1" />
                  <h2 style={{ color: e.fcolor1 }}>{e.title}</h2>
                </div>
                <div>
                  <p style={{ color: e.fcolor2 }}>
                    <small>{e.info}</small>
                  </p>
                </div>
              </FlexCard>
            </div>
          );
        })}
      </FlexParent>
      <div className="px-7 pb-9">
        <h1 className="mb-5 text-xl font-semibold">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="leading-6 text-sm md:text-[16px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <h1 className="mb-5 text-xl font-semibold">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="leading-6 text-sm md:text-[16px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
        <p className="leading-6 text-sm md:text-[16px]" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus
          iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
          Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum
          nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
          nulla. Neque convallis a cras semper auctor neque vitae tempus quam.
        </p>
      </div>
    </>
  );
};
export default MembershipWork;
