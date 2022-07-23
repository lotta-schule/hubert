import * as React from 'react';
import { useLabel } from '@react-aria/label';
import clsx from 'clsx';

import styles from './label.module.scss';

export type LabelProps = {
  label: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

export const Label = React.forwardRef(
  (
    { children, className, label, ...props }: LabelProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { labelProps, fieldProps } = useLabel({
      label,
      labelElementType: 'span',
      ...props,
    });
    return (
      <div {...props} ref={ref} className={clsx(className, styles.root)}>
        <span className={styles.label} {...labelProps}>
          {label}
        </span>
        <div {...fieldProps}>{children}</div>
      </div>
    );
  }
);
Label.displayName = 'Label';
