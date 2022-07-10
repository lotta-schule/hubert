import * as React from 'react';
import { useTooltip, useTooltipTrigger } from '@react-aria/tooltip';
import {
  useTooltipTriggerState,
  TooltipTriggerState,
} from '@react-stately/tooltip';
import { mergeProps } from '@react-aria/utils';
import clsx from 'clsx';

import styles from './Tooltip.module.scss';

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
  label?: string | React.ReactElement<{}>;
}

export const Tooltip = React.forwardRef(
  (
    { children, className, label, ...props }: TooltipProps,
    refProp: React.ForwardedRef<HTMLDivElement | null>
  ) => {
    const state = useTooltipTriggerState({});
    const ref = React.useRef<HTMLDivElement | null>(
      (refProp as React.MutableRefObject<HTMLDivElement>)?.current ?? null
    );

    let { triggerProps, tooltipProps } = useTooltipTrigger({}, state, ref);

    return (
      <div className={styles.root}>
        {React.cloneElement(children, { ref, ...triggerProps })}
        <TooltipOverlay
          className={className}
          state={state}
          label={label ?? children}
          {...mergeProps(props, tooltipProps)}
        />
      </div>
    );
  }
);
Tooltip.displayName = 'Tooltip';

export interface TooltipOverlayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | React.ReactElement<{}>;
  state: TooltipTriggerState;
}

export const TooltipOverlay = React.memo(
  React.forwardRef(
    (
      { state, label, className, ...props }: TooltipOverlayProps,
      ref: React.ForwardedRef<HTMLDivElement>
    ) => {
      const { tooltipProps } = useTooltip(props, state);
      return state.isOpen ? (
        <div
          className={clsx(className, styles.tooltip)}
          ref={ref}
          {...mergeProps(props, tooltipProps)}
        >
          {label}
        </div>
      ) : null;
    }
  )
);
TooltipOverlay.displayName = 'TooltipOverlay';
