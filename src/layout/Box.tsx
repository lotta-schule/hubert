import * as React from 'react';
import clsx from 'clsx';

import styles from './Box.module.scss';

export type BoxProps = React.HTMLProps<HTMLDivElement>;

export const Box = ({ children, className, ...props }: BoxProps) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      {children}
    </div>
  );
};
