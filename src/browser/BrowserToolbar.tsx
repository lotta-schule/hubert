import * as React from 'react';
import clsx from 'clsx';
import { Input } from './../form/input/Input';

import styles from './BrowserToolbar.module.scss';

export const BrowserToolbar = React.memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>paths</div>
      <div className={styles.searchField}>
        {' '}
        <Input />
      </div>
      <div className={styles.rightContainer}>Icons</div>
    </div>
  );
});
BrowserToolbar.displayName = 'BrowserToolbar';
