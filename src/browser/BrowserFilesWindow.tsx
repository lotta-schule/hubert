import * as React from 'react';
import { BrowserFilesList } from './BrowserFilesList';
import { BrowserFilePreview } from './BrowserFilePreview';

import styles from './BrowserFilesWindow.module.scss';

export const BrowserFilesWindow = React.memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.BrowserColumns}>
        <BrowserFilesList />
        <BrowserFilesList />
        <BrowserFilesList />
      </div>
      <BrowserFilePreview />
    </div>
  );
});
BrowserFilesWindow.displayName = 'BrowserFilesWindow';
