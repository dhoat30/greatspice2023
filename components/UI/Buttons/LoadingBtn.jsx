import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
function LoadingBtn({
  align,
  isLoading,
  onClick,
  isSuccess,
  className,
  label,
}) {
  let labelText = label ? label : "Submit";
  return (
    <LoadingButtonStyle
      className={className}
      onClick={onClick}
      align={align}
      size="large"
      variant="contained"
      disableElevation
      loading={isLoading}
      disabled={isSuccess}
    >
      {isSuccess ? <DoneIcon /> : labelText}
    </LoadingButtonStyle>
  );
}

export default LoadingBtn;
const LoadingButtonStyle = styled(LoadingButton)`
  background: var(--dark-primary, #e7c446) !important;
  border-radius: 100px;
  color: var(--dark-on-primary, #3c2f00);
  margin: ${(props) => (props.align === "right" ? "0 0 0 auto" : "0")};
  display: block;
  .MuiLoadingButton-loadingIndicator {
    top: 15px;
  }
`;
