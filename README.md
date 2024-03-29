# Hubert

> [!WARNING]
> This is the former repository of the Hubert Component Library for
> [lotta](https://lotta.schule).
> The project hast been moved to the [lotta web monorepo](https://github.com/lotta-schule/web),
> and will be developped there to ease the development and integration of
> Lotta with Hubert.
> Please see there for Updates and current development.
> Hubert is a slim component library we use for the
> [lotta project](https://lotta.schule), a modern, easy-to use open source
> solution for the educational sector which wants to get privacy and security right.

[See available components on our storybook](https://lotta-schule.github.io/hubert)

## Install

npm install @lotta-schule/hubert

## Usage

### Provider and Styles

You will need to add the provider, as well as the <GlobalStyles /> component.

The <GlobalStyles /> component is meant to be rendered only once per web page.
It is save to be rendered in a React Server Component.

The provider is a React ContextProvider.

```TSX
import { GlobalStyles, HubertProvider } from '@lotta-schule/hubert';
import { DefaultThemes } from '@lotta-schule/theme';

export const App = () => {
  const theme = DefaultThemes.default;
  return (
    <HubertProvider>
      <GlobalStyles
        theme={theme}
        fonts={[
          { name: 'Roboto Slab', url: '/roboto-slab.css', },
        ]}
      />
    </HubertProvider>
  );
}
```
