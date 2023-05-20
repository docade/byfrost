import ReactFullpage from "@fullpage/react-fullpage";
import { SectionsContainer, Section } from "react-fullpage";

let options = {
  activeClass: "active", // the class that is appended to the sections links
  anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionThree"],
  arrowNavigation: true, // use arrow keys
  className: "SectionContainer", // the class name for the section container
  delay: 1000, // the scroll animation speed
  navigation: true, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
  sectionClassName: "Section1", // the section class name
  sectionPaddingTop: "0", // the section top padding
  sectionPaddingBottom: "0", // the section bottom padding
  verticalAlign: false, // align the content of each section vertical
};
const Fullpage = ({ children }) => {
  return (
    <SectionsContainer {...options}>
      <Section>
        <h1>Welcom to Roobits</h1>
        <div>소중한 사람들과 추억을 남겨보세요!</div>
        <div>D-Day를 더 특별하게 만들어 드립니다.</div>
      </Section>
      <Section>
        <div>소개 페이지</div>
      </Section>
      <Section>
        <div>테마 및 기능 설명</div>
      </Section>
      <Section>{children}</Section>
    </SectionsContainer>
  );
};

export default Fullpage;
