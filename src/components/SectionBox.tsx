import styled from "styled-components";
import { Box } from "../utils";

const SectionBox = styled(Box)`
  border: 1px solid #d1d5db;
  cursor: pointer;
  border-radius: 15px;
  padding: 20px;
  &:hover {
    box-shadow: 10px 12px 10px -5px rgba(201, 201, 201, 0.75);
    -webkit-box-shadow: 10px 12px 10px -5px rgba(201, 201, 201, 0.75);
    -moz-box-shadow: 10px 12px 10px -5px rgba(201, 201, 201, 0.75);
  }
`;

export default SectionBox;
