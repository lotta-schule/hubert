import { standardTheme } from './standard';
export * from './standard';

export const DefaultThemes = {
  standard: standardTheme,
};

export type ThemeName = keyof typeof DefaultThemes;
