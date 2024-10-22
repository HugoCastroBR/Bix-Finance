import { Box } from "@mui/material";
import styled from "styled-components";

const ChartBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexGrow: 1,
  width: '100%',
  flexWrap: 'wrap',
  gap: 16,
  marginTop: 16
});

export default ChartBox;