import { Paper } from "@mui/material";
import styled from "styled-components";

const ChartPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  flexBasis: 'calc(33.33% - 16px)',
  minWidth: 300,
  height: 400,
  padding: 8,
  minHeight: 300,
  '@media (max-width: 900px)': {
    flexBasis: 'calc(50% - 16px)',
  },
  '@media (max-width: 600px)': {
    flexBasis: 'calc(100% - 16px)',
  },
});

export default ChartPaper;