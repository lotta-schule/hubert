import * as React from 'react';
import { styled } from '@storybook/theming';

export interface GridProps {
  columns: number;
  flow?: 'row' | 'column';
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Grid = ({ columns, style, children }: GridProps) => {
  const StyledDiv = styled.div`
    column-count: ${columns};
    padding: ${({ theme }) => theme.layoutMargin}px;
  `;

  return <StyledDiv style={style}>{children}</StyledDiv>;
};
