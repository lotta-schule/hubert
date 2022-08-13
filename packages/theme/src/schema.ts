import { Theme } from './Theme';

export const schema: Record<
  keyof Theme,
  {
    type: 'value' | 'length' | 'color' | 'fontFamily';
    description: string;
    fallbackKey?: keyof Theme;
  }
> = {
  primaryColor: {
    type: 'color',
    description: 'Primary color',
  },
  navigationBackgroundColor: {
    type: 'color',
    description: 'Navigation background color',
  },
  errorColor: {
    type: 'color',
    description: 'Error color',
  },
  successColor: {
    type: 'color',
    description: 'Success color',
  },
  navigationColor: {
    type: 'color',
    description: 'Navigation color',
  },
  disabledColor: {
    type: 'color',
    description: 'Disabled color',
  },
  textColor: {
    type: 'color',
    description: 'Text color',
  },
  labelTextColor: {
    type: 'color',
    description: 'Label text color',
  },
  contrastTextColor: {
    type: 'color',
    description: 'Contrast text color',
  },
  boxBackgroundColor: {
    type: 'color',
    description: 'Box background color',
  },
  pageBackgroundColor: {
    type: 'color',
    description: 'Page background color',
  },
  dividerColor: {
    type: 'color',
    description: 'Divider color',
  },
  highlightColor: {
    type: 'color',
    description: 'Highlight color',
  },
  bannerBackgroundColor: {
    type: 'color',
    description: 'Banner background color',
  },
  accentGreyColor: {
    type: 'color',
    description: 'Accent grey color',
  },
  spacing: {
    type: 'length',
    description: 'Spacing',
  },
  borderRadius: {
    type: 'length',
    description: 'Border radius',
  },
  textFontFamily: {
    type: 'fontFamily',
    description: 'font family for text',
  },
  titleFontFamily: {
    type: 'fontFamily',
    description: 'font family for titles',
  },
};
