import * as React from 'react';
import { Icon } from '../icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './BrowserFilePreview.module.scss';

export const BrowserFilePreview = React.memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.previewImage}></div>
      <div className={styles.infoSection}>
        {' '}
        Informationen Informationen Informationen Informationen Informationen
        Informationen Informationen Informationen Informationen Informationen
        Informationen Informationen Informationen Informationen Informationen
        Informationen Informationen Informationen Informationen Informationen
        Informationen Informationen Informationen Informationen Informationen
        Informationen Informationen Informationen Informationen Informationen
        Informationen
      </div>
    </div>
  );
});
BrowserFilePreview.displayName = 'BrowserFilePreview';
