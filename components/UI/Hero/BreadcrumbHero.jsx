"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
export default function BreadcrumbHero({
  title="All Reviews",
  description,
  showBreadcrumb = true,
  showPattern=false
}) {
  return (
    <TitleWrapper className="title-wrapper ">
        {showPattern ? 
      <Container maxWidth="md" >
        {showBreadcrumb && <BreadCrumb className="justify-center" />}
      </Container>
        : 
      <Container maxWidth="md" className="wrapper">
        {showBreadcrumb && <BreadCrumb className="justify-center" />}
     
      
          <div className="title">
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
      
          <div
            className="description body1"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        </Container>
          }

     
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  background: var(--light-surface-container);
  border-bottom: 1px solid var(--light-outline);
  padding-top: 80px;
  padding-bottom: 40px;
  
  @media (max-width: 900px) {
    padding-top: 72px;
  }
  .wrapper {
    flex-direction: column;
    display: flex;
    align-items: center;
    .title h1{ 
      color: var(--light-on-surface-variant);
    }
  }
`;
