import {
  faFileImage,
  faFilePdf,
  faFileWord,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Icon } from '../icon';

import styles from './BrowserFilesList.module.scss';

export const BrowserFilesList = React.memo(() => {
  return (
    <ul className={styles.root}>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 1</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
          <Icon icon={faTrashCan} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFilePdf} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFilePdf} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFilePdf} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFilePdf} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileWord} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileWord} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileWord} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileWord} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
      <li>
        <div className={styles.fileIcon}>
          <Icon icon={faFileImage} />
        </div>
        <div className={styles.fileName}>Dateiname 2</div>
        <div className={styles.fileEdit}>
          <Icon icon={faPen} />
        </div>
      </li>
    </ul>
  );
});
BrowserFilesList.displayName = 'BrowserFilesList';
