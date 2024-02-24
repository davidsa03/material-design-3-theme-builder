# Material Design 3 Theme Builder

This is a tool to help you build a Material Design 3 theme for your application. It is based on the [Material Design 3 theme builder](https://material-foundation.github.io/material-theme-builder/) and the [Material Design 3 color system](https://m3.material.io/styles/color/system/overview). Some more reading on the color system can be found at [The Science of Color in Design](https://material.io/blog/science-of-color-design).

The color palettes and schemes are built using the color utilities from here [Material Design 3 color utilities](https://github.com/material-foundation/material-color-utilities)

This tool will generate a color palette, light theme, and dark theme for your application.

## Getting Started
`npm i material-design-3-theme-builder`

```typescript
import { generateTheme } from 'material-design-3-theme-builder';

/**
 * The color keys are the keys that will be used to reference the colors in the theme.
 * The values are the hex values of the colors.
 */
const colorKeys = {
  primary: '#007680',
  secondary: '#000000',
  tertiary: '#80CDFA',
  error: '#DA291C',
  neutral: '#DDDDDD',
  neutralVariant: '#DDDDDD',
};

/**
 * This will generate the theme object that can be used to style the application.
 * The theme object will contain the color scheme for both light and dark mode.
 */
const theme = generateTheme(colorKeys);

```
