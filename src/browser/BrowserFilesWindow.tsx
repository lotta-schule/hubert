import * as React from 'react';
import { BrowserFilesList } from './BrowserFilesList';
import { BrowserFilePreview } from './BrowserFilePreview';

import styles from './BrowserFilesWindow.module.scss';

export const BrowserFilesWindow = React.memo(() => {
  const [isShowPreview, setIsShowPreview] = React.useState(false);
  return (
    <div>
      <input
        type={'checkbox'}
        checked={isShowPreview}
        onChange={(e) => {
          setIsShowPreview(e.currentTarget.checked);
        }}
      />{' '}
      Vorschau anzeigen
      <div className={styles.root}>
        <div className={styles.BrowserColumns}>
          <BrowserFilesList narrow={!isShowPreview} />
          <BrowserFilesList narrow={!isShowPreview} />
          <BrowserFilesList narrow={!isShowPreview} />
          <BrowserFilesList narrow={!isShowPreview} />
        </div>
        {isShowPreview && <BrowserFilePreview />}
      </div>
    </div>
  );
});
BrowserFilesWindow.displayName = 'BrowserFilesWindow';
