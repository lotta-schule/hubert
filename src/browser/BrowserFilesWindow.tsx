import * as React from 'react';
import clsx from 'clsx';
import { BrowserFilesList } from './BrowserFilesList';
import { BrowserFilePreview } from './BrowserFilePreview';

import styles from './BrowserFilesWindow.module.scss';

export const BrowserFilesWindow = React.memo(() => {
  return (
    <div className={styles.root}>
      <BrowserFilesList />
      <BrowserFilesList />
      <BrowserFilesList />
      <BrowserFilePreview />
    </div>
  );
});
BrowserFilesWindow.displayName = 'BrowserFilesWindow';
