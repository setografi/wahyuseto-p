import React from "react";
import AboutMe from "./AboutMe";
import Instagramphoto from "../assets/about/instagram-color.svg";
import Twitterphoto from "../assets/about/x-color.svg";
import Linkedinphoto from "../assets/about/linkedin-color.svg";
import Readcvphoto from "../assets/about/readdotcv-color.svg";

export default function AboutMeData() {
  return (
    <>
      <div>
        <AboutMe
          title={"Instagram"}
          subtitle={". Just now"}
          content={
            "My other skills? you can visit my Instagram. You can see Instagram Typography content and some of my Photography Collections."
          }
          image={Instagramphoto}
          sociallink={"https://www.instagram.com/setografi"}
        />

        <AboutMe
          title={"Twitter"}
          subtitle={". 1m ago"}
          content={
            "You can see me here sharing design thoughts and sometimes I tell you about my daily activities and hobbies."
          }
          image={Twitterphoto}
          sociallink={"https://twitter.com/sicalondktr"}
        />

        <AboutMe
          title={"LinkedIn"}
          subtitle={". 3d ago"}
          content={"See my experience and qualifications."}
          image={Linkedinphoto}
          sociallink={
            "https://www.linkedin.com/in/wahyu-seto-pranata-553719262"
          }
        />

        <AboutMe
          title={"read.cv"}
          subtitle={". 1y ago"}
          content={"Find me and take me."}
          image={Readcvphoto}
          sociallink={"https://read.cv/setografi"}
        />
      </div>
    </>
  );
}
