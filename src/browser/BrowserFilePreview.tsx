import * as React from 'react';
import clsx from 'clsx';
import { Button } from './../button/Button';

import styles from './BrowserFilePreview.module.scss';

export const BrowserFilePreview = React.memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.previewImage}>
        <div className={styles.deleteButton}>
          <Button />
        </div>
      </div>
      <div className={styles.infoSection}> Informationen</div>
    </div>
  );
});
BrowserFilePreview.displayName = 'BrowserFilePreview';
