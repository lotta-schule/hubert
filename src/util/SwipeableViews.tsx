import * as React from 'react';
import { motion } from 'framer-motion';

import styles from './SwipeableViews.module.scss';

export type SwipeableViewsProps = {
  children: React.ReactElement[];
  selectedIndex: number;
  onChange: (_index: number) => void;
};

export const SwipeableViews = ({
  selectedIndex,
  onChange,
  children,
}: SwipeableViewsProps) => {
  const views = React.Children.toArray(children) as React.ReactElement[];

  const getNewIndex = (currentIndex: number, direction: number) => {
    if (direction > 0 && (currentIndex || 0) > 0) {
      return selectedIndex - 1;
    }
    if (direction < 0 && currentIndex < views.length - 1) {
      return currentIndex + 1;
    } else {
      return currentIndex;
    }
  };

  return (
    <div className={styles.root}>
      <motion.div
        className={styles.movingStrip}
        data-testid="movingStrip"
        initial={false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{
          right: selectedIndex > 0 ? 1 : 0.25,
          left: selectedIndex < views.length - 1 ? 1 : 0.25,
        }}
        animate={{
          left: `${-selectedIndex * 100}%`,
        }}
        transition={{
          left: {
            transition: 'ease',
            ease: 'easeOut',
            damping: 25,
          },
          x: {
            type: 'easeInOut',
            damping: 2,
          },
        }}
        onDragEnd={(_e: DragEvent, { offset, velocity }) => {
          const swipeOffsetThreshold = 25;
          const swipeVelocityThreshold = 100;
          if (
            Math.abs(offset.x) > swipeOffsetThreshold ||
            Math.abs(velocity.x) > swipeVelocityThreshold
          ) {
            const newIndex = getNewIndex(selectedIndex, offset.x);
            if (newIndex !== selectedIndex) {
              onChange(newIndex);
            }
          }
        }}
        drag={'x'}
      >
        {views.map((view, i) => (
          <div key={view.key || i} className={styles.viewElement}>
            {React.cloneElement(view)}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
