import ReactFullpage from "@fullpage/react-fullpage";
import { Content } from "antd/es/layout/layout";
import { SectionsContainer, Section } from "react-fullpage";
import FirstContainer from "./FirstContainerLayOut/FirstContainerLayOut";
import ThirdContainerLayOut from "./ThirdContainer/ThirdContainerLayOut";
import { One, Two, Three, Four, Five, Six } from "../img/Index";
import SecondContainerLayOut from "./secondContainerLayOut/SecondContainerLayOut";

let options = {
  activeClass: "active", // the class that is appended to the sections links
  anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"], // the anchors for each sections
  arrowNavigation: true, // use arrow keys
  className: "SectionContainer", // the class name for the section container
  delay: 1000, // the scroll animation speed
  navigation: false, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
  sectionClassName: "Section", // the section class name
  sectionPaddingTop: "0", // the section top padding
  sectionPaddingBottom: "0", // the section bottom padding
  verticalAlign: false, // align the content of each section vertical
};

const Fullpage = ({ children }) => {
  return (
    <Content>
      <SectionsContainer {...options}>
        <Section>
          <FirstContainer />
        </Section>
        <Section>
          <SecondContainerLayOut />
        </Section>
        <Section>
          <ThirdContainerLayOut />
        </Section>
        <Section>
          <p>4번째 페이지 네이션</p>
        </Section>
      </SectionsContainer>
    </Content>
  );
};

export default Fullpage;

// const style = {
//   display: "flex",
//   justifyContent: "center",
//   width: "300px",
// };
