import {
  argbFromHex,
  hexFromArgb,
  TonalPalette,
} from '@material/material-color-utilities';
import { MD3ColorSchemeTokens, MD3Palettes } from './theme.types';

export function generateTheme({
  primary,
  secondary,
  tertiary,
  error,
  neutral,
  neutralVariant,
}: {
  primary: string;
  secondary: string;
  tertiary: string;
  error: string;
  neutral: string;
  neutralVariant: string;
}) {
  const primaryTonal = TonalPalette.fromInt(argbFromHex(primary));
  const secondaryTonal = TonalPalette.fromInt(argbFromHex(secondary));
  const tertiaryTonal = TonalPalette.fromInt(argbFromHex(tertiary));
  const errorTonal = TonalPalette.fromInt(argbFromHex(error));
  const neutralTonal = TonalPalette.fromInt(argbFromHex(neutral));
  const neutralVariantTonal = TonalPalette.fromInt(argbFromHex(neutralVariant));

  const palette: MD3Palettes = {
    primary: {
      0: hexFromArgb(primaryTonal.tone(0)),
      10: hexFromArgb(primaryTonal.tone(10)),
      20: hexFromArgb(primaryTonal.tone(20)),
      30: hexFromArgb(primaryTonal.tone(30)),
      40: hexFromArgb(primaryTonal.tone(40)),
      50: hexFromArgb(primaryTonal.tone(50)),
      60: hexFromArgb(primaryTonal.tone(60)),
      70: hexFromArgb(primaryTonal.tone(70)),
      80: hexFromArgb(primaryTonal.tone(80)),
      90: hexFromArgb(primaryTonal.tone(90)),
      95: hexFromArgb(primaryTonal.tone(95)),
      99: hexFromArgb(primaryTonal.tone(99)),
      100: hexFromArgb(primaryTonal.tone(100)),
    },
    secondary: {
      0: hexFromArgb(secondaryTonal.tone(0)),
      10: hexFromArgb(secondaryTonal.tone(10)),
      20: hexFromArgb(secondaryTonal.tone(20)),
      30: hexFromArgb(secondaryTonal.tone(30)),
      40: hexFromArgb(secondaryTonal.tone(40)),
      50: hexFromArgb(secondaryTonal.tone(50)),
      60: hexFromArgb(secondaryTonal.tone(60)),
      70: hexFromArgb(secondaryTonal.tone(70)),
      80: hexFromArgb(secondaryTonal.tone(80)),
      90: hexFromArgb(secondaryTonal.tone(90)),
      95: hexFromArgb(secondaryTonal.tone(95)),
      99: hexFromArgb(secondaryTonal.tone(99)),
      100: hexFromArgb(secondaryTonal.tone(100)),
    },
    tertiary: {
      0: hexFromArgb(tertiaryTonal.tone(0)),
      10: hexFromArgb(tertiaryTonal.tone(10)),
      20: hexFromArgb(tertiaryTonal.tone(20)),
      30: hexFromArgb(tertiaryTonal.tone(30)),
      40: hexFromArgb(tertiaryTonal.tone(40)),
      50: hexFromArgb(tertiaryTonal.tone(50)),
      60: hexFromArgb(tertiaryTonal.tone(60)),
      70: hexFromArgb(tertiaryTonal.tone(70)),
      80: hexFromArgb(tertiaryTonal.tone(80)),
      90: hexFromArgb(tertiaryTonal.tone(90)),
      95: hexFromArgb(tertiaryTonal.tone(95)),
      99: hexFromArgb(tertiaryTonal.tone(99)),
      100: hexFromArgb(tertiaryTonal.tone(100)),
    },
    error: {
      0: hexFromArgb(errorTonal.tone(0)),
      10: hexFromArgb(errorTonal.tone(10)),
      20: hexFromArgb(errorTonal.tone(20)),
      30: hexFromArgb(errorTonal.tone(30)),
      40: hexFromArgb(errorTonal.tone(40)),
      50: hexFromArgb(errorTonal.tone(50)),
      60: hexFromArgb(errorTonal.tone(60)),
      70: hexFromArgb(errorTonal.tone(70)),
      80: hexFromArgb(errorTonal.tone(80)),
      90: hexFromArgb(errorTonal.tone(90)),
      95: hexFromArgb(errorTonal.tone(95)),
      99: hexFromArgb(errorTonal.tone(99)),
      100: hexFromArgb(errorTonal.tone(100)),
    },
    neutral: {
      0: hexFromArgb(neutralTonal.tone(0)),
      4: hexFromArgb(neutralTonal.tone(4)),
      6: hexFromArgb(neutralTonal.tone(6)),
      10: hexFromArgb(neutralTonal.tone(10)),
      12: hexFromArgb(neutralTonal.tone(12)),
      17: hexFromArgb(neutralTonal.tone(17)),
      20: hexFromArgb(neutralTonal.tone(20)),
      22: hexFromArgb(neutralTonal.tone(22)),
      24: hexFromArgb(neutralTonal.tone(24)),
      30: hexFromArgb(neutralTonal.tone(30)),
      40: hexFromArgb(neutralTonal.tone(40)),
      50: hexFromArgb(neutralTonal.tone(50)),
      60: hexFromArgb(neutralTonal.tone(60)),
      70: hexFromArgb(neutralTonal.tone(70)),
      80: hexFromArgb(neutralTonal.tone(80)),
      90: hexFromArgb(neutralTonal.tone(90)),
      92: hexFromArgb(neutralTonal.tone(92)),
      94: hexFromArgb(neutralTonal.tone(94)),
      95: hexFromArgb(neutralTonal.tone(95)),
      96: hexFromArgb(neutralTonal.tone(96)),
      98: hexFromArgb(neutralTonal.tone(98)),
      99: hexFromArgb(neutralTonal.tone(99)),
      100: hexFromArgb(neutralTonal.tone(100)),
    },
    neutralVariant: {
      0: hexFromArgb(neutralVariantTonal.tone(0)),
      10: hexFromArgb(neutralVariantTonal.tone(10)),
      20: hexFromArgb(neutralVariantTonal.tone(20)),
      30: hexFromArgb(neutralVariantTonal.tone(30)),
      40: hexFromArgb(neutralVariantTonal.tone(40)),
      50: hexFromArgb(neutralVariantTonal.tone(50)),
      60: hexFromArgb(neutralVariantTonal.tone(60)),
      70: hexFromArgb(neutralVariantTonal.tone(70)),
      80: hexFromArgb(neutralVariantTonal.tone(80)),
      90: hexFromArgb(neutralVariantTonal.tone(90)),
      95: hexFromArgb(neutralVariantTonal.tone(95)),
      99: hexFromArgb(neutralVariantTonal.tone(99)),
      100: hexFromArgb(neutralVariantTonal.tone(100)),
    },
  };

  const lightScheme: MD3ColorSchemeTokens = {
    // primary
    primary: palette.primary[40],
    onPrimary: palette.primary[100],
    primaryContainer: palette.primary[90],
    onPrimaryContainer: palette.primary[10],

    // secondary
    secondary: palette.secondary[40],
    onSecondary: palette.secondary[100],
    secondaryContainer: palette.secondary[90],
    onSecondaryContainer: palette.secondary[10],

    // tertiary
    tertiary: palette.tertiary[40],
    onTertiary: palette.tertiary[100],
    tertiaryContainer: palette.tertiary[90],
    onTertiaryContainer: palette.tertiary[10],

    // error
    error: palette.error[40],
    onError: palette.error[100],
    errorContainer: palette.error[90],
    onErrorContainer: palette.error[10],

    // surface
    surface: palette.neutral[98],
    onSurface: palette.neutral[10],
    surfaceVariant: palette.neutralVariant[90],
    onSurfaceVariant: palette.neutralVariant[30],
    surfaceContainerLowest: palette.neutral[100],
    surfaceContainerLow: palette.neutral[96],
    surfaceContainer: palette.neutral[94],
    surfaceContainerHigh: palette.neutral[92],
    surfaceContainerHighest: palette.neutral[90],
    surfaceTint: palette.primary[40],

    // outline
    outline: palette.neutralVariant[50],
    outlineVariant: palette.neutralVariant[80],

    shadow: palette.neutral[0],

    // background
    background: palette.neutral[98],
    onBackground: palette.neutral[10],

    // inverse
    inversePrimary: palette.primary[80],
    inverseSurface: palette.neutral[20],
    inverseOnSurface: palette.neutral[95],
  };

  const darkScheme: MD3ColorSchemeTokens = {
    // primary
    primary: palette.primary[80],
    onPrimary: palette.primary[20],
    primaryContainer: palette.primary[30],
    onPrimaryContainer: palette.primary[90],

    // secondary
    secondary: palette.secondary[80],
    onSecondary: palette.secondary[20],
    secondaryContainer: palette.secondary[30],
    onSecondaryContainer: palette.secondary[90],

    // tertiary
    tertiary: palette.tertiary[80],
    onTertiary: palette.tertiary[20],
    tertiaryContainer: palette.tertiary[30],
    onTertiaryContainer: palette.tertiary[90],

    // error
    error: palette.error[80],
    onError: palette.error[20],
    errorContainer: palette.error[30],
    onErrorContainer: palette.error[90],

    // surface
    surface: palette.neutral[6],
    onSurface: palette.neutral[90],
    surfaceVariant: palette.neutralVariant[30],
    onSurfaceVariant: palette.neutralVariant[80],
    surfaceContainerLowest: palette.neutral[4],
    surfaceContainerLow: palette.neutral[10],
    surfaceContainer: palette.neutral[12],
    surfaceContainerHigh: palette.neutral[17],
    surfaceContainerHighest: palette.neutral[24],
    surfaceTint: palette.primary[80],

    // outline
    outline: palette.neutralVariant[60],
    outlineVariant: palette.neutralVariant[30],

    shadow: palette.neutral[0],

    // background
    background: palette.neutral[6],
    onBackground: palette.neutral[90],

    // inverse
    inversePrimary: palette.primary[40],
    inverseSurface: palette.neutral[90],
    inverseOnSurface: palette.neutral[20],
  };

  return {
    palette,
    lightScheme,
    darkScheme,
  };
}

async function run() {
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

  console.log(theme);
}

run();
