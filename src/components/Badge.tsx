import styled, { css } from "styled-components";
import colors from "../common/colors";
import { Box } from "../utils";

enum Color {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
}

interface BadgeProps {
  variant: "red" | "yellow" | "green";
}

const variantRed = css`
  background-color: ${colors.redLight};
  color: ${colors.redDark};
`;

const variantYellow = css`
  background-color: ${colors.yellowLight};
  color: ${colors.yellowDark};
`;

const variantGreen = css`
  background-color: ${colors.greenLight};
  color: ${colors.greenDark};
`;

const Badge = styled(Box)<BadgeProps>`
  border-radius: 24px;
  font-size: 12px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: fit-content;
  ${(props) => props.variant === Color.RED && variantRed}
  ${(props) => props.variant === Color.YELLOW && variantYellow}
  ${(props) => props.variant === Color.GREEN && variantGreen}
`;

export default Badge;
