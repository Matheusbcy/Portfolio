import { Box } from "@mui/material";
import React from "react";
import CardSkills from "../CardSkills";
import {
  ContainerSkills,
  Organization,
  SpanSkill,
  StyledDiv,
  TitleMaior,
  TitleSkill,
} from "./style";

function Skills() {
  return (
    <ContainerSkills>
      <Box display={"inline-flex"} mt={7} >
        <StyledDiv>
          <TitleSkill>
            <SpanSkill>/</SpanSkill> MINHAS HABILIDADES
          </TitleSkill>
          <Box mt={3}>
            <TitleMaior>Minha lista de habilidades</TitleMaior>
          </Box>
        </StyledDiv>
        <Organization />
      </Box>
      <CardSkills />
    </ContainerSkills>
  );
}

export default Skills;
