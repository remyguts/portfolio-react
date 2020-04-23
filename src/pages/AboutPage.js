import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Pdf from "../assets/documents/CurrentResume.pdf";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          {" "}
          I was born in 1978, I grew up in a small town in Central New York.
          I've been creating since I was 15 years old. My name is Jeremy Guts
          and I'm a junior developer and multi-platform artist. From painting,
          to design, and music, I have imagined and created in many formats and
          arenas. I work in graphic design, paint, illustration, music, and
          concept. My interests include rock n roll, coffee, conversation, and
          nature.
        </p>
        <p>
          More about my qualifications can be found on my resume. You can check
          it out here <a href={Pdf}>Download Pdf here</a>
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
