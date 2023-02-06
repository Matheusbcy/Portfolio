import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
