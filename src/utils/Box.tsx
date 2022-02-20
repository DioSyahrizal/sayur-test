import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  border,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  GridProps,
  SpaceProps,
  ColorProps,
  typography,
  TypographyProps,
  BorderProps,
  ShadowProps,
  shadow,
} from "styled-system";

export interface BoxProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    SpaceProps,
    ColorProps,
    TypographyProps,
    BorderProps,
    ShadowProps {
  /** Additional CSS classes to add to the component. */
  className?: string;
  /** Additional CSS properties to add to the component. */
  style?: React.CSSProperties;
  /**
   * Extended color props. We need this because default `color` prop clashes with `styled-system`.
   */
  color?: string;
}

const Box = styled.div<BoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  shadow
);

export default Box;
