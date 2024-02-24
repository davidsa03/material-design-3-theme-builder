export interface MD3Tones {
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  99: string;
  100: string;
}

export interface MD3NeutralTones extends MD3Tones {
  4: string;
  6: string;
  12: string;
  17: string;
  22: string;
  24: string;
  92: string;
  94: string;
  96: string;
  98: string;
}

export interface MD3Palettes {
  primary: MD3Tones;
  secondary: MD3Tones;
  tertiary: MD3Tones;
  neutral: MD3NeutralTones;
  neutralVariant: MD3Tones;
  error: MD3Tones;
  info?: MD3Tones;
  warning?: MD3Tones;
  success?: MD3Tones;
  common?: {
    black: string;
    white: string;
  };
}

export interface MD3ColorSchemeTokens {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;

  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;

  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;

  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;

  info?: string;
  onInfo?: string;
  infoContainer?: string;
  onInfoContainer?: string;

  warning?: string;
  onWarning?: string;
  warningContainer?: string;
  onWarningContainer?: string;

  success?: string;
  onSuccess?: string;
  successContainer?: string;
  onSuccessContainer?: string;

  background: string;
  onBackground: string;

  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;

  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  surfaceTint: string;

  outline: string;
  outlineVariant: string;
  shadow: string;
}
