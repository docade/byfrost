import ReactFullpage from "@fullpage/react-fullpage";
import { Content } from "antd/es/layout/layout";
import { SectionsContainer, Section } from "react-fullpage";
import FirstContainer from "./FirstContainerLayOut/FirstContainerLayOut";

let options = {
  activeClass: "active", // the class that is appended to the sections links
  anchors: ["sectionOne", "sectionTwo", "sectionThree"],
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
          <FirstContainer />
        </Section>
        <Section>
          <div>3번째 박스</div>
        </Section>
      </SectionsContainer>
    </Content>
  );
};

export default Fullpage;
