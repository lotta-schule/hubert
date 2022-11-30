import * as React from 'react';
import clsx from 'clsx';

import styles from './BrowserFilesList.module.scss';

export const BrowserFilesList = React.memo(() => {
  return (
    <ul className={styles.root}>
      <li>
        <div className={styles.fileIcon}>Icon</div>
        <div className={styles.fileName}>Dateiname 1</div>
        <div className={styles.fileEdit}>Pen</div>
      </li>
      <li>
        <div className={styles.fileIcon}>Icon</div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>Pen</div>
      </li>
    </ul>
  );
});
BrowserFilesList.displayName = 'BrowserFilesList';
