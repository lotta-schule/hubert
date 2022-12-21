import * as React from 'react';
import { Icon } from '../icon';
import { Input } from './../form/input/Input';

import styles from './BrowserToolbar.module.scss';
import { faCloudUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';

export const BrowserToolbar = React.memo(() => {
  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>paths</div>
      <div className={styles.searchField}>
        {' '}
        <Input placeholder="Datei suchen" />
      </div>
      <div className={styles.rightContainer}>
        <Icon icon={faFolderPlus} />
        <Icon icon={faCloudUpload} />
      </div>
    </div>
  );
});
BrowserToolbar.displayName = 'BrowserToolbar';
