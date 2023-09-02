import CustomAccordion from "@/components/UI/Accordion/CustomAccordion";
import MuiAccordion from "@/components/UI/Accordion/CustomAccordion";
import React from "react";
import styled from "styled-components";
function FaqAccordionSection({ qaData }) {
  return (
    <Container className="row-max py-8 px-4 lg:px-16 lg:py-12 ">
      <h2 className="section-title font-serif mb-12">FAQ's</h2>
      <CustomAccordion qaData={qaData} />
    </Container>
  );
}

export default FaqAccordionSection;
const Container = styled.section`
  max-width: 900px;
  border-radius: 8px;
  margin: 80px auto 0 auto;
  background: var(--material-theme-sys-light-surface-container-low, #f9f3ea);
  .section-title {
    color: var(--material-theme-sys-light-on-surface-variant, #4c4639);
    text-align: center;
    /* material-theme/display/small */
    font-size: var(--material-theme--display--small);

    font-weight: 400;
    line-height: 2.25rem; /* 122.222% */
  }
`;
