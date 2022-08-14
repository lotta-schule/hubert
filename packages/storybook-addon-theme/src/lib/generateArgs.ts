import { Args } from '@storybook/components';
import { schema } from '@lotta-schule/theme';

export const generateArgs = (): Args =>
  Object.entries(schema).reduce(
    (acc, [property, { description, fallbackKey, type }]) => ({
      ...acc,
      [property]: {
        key: property,
        name: property,
        description,
        type: {
          name: 'string',
          required: fallbackKey ? false : true,
        },
        control: (() => {
          switch (type) {
            case 'color':
              return { type: 'color' };
            case 'fontFamily':
              return { type: 'text' };
            default:
              return { type: 'text' };
          }
        })(),
      },
    }),
    {}
  );
