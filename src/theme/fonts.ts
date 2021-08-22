import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export const FONTS = {
  light: 'Montserrat-Light',
  regular: 'Montserrat-Regular',
  medium: 'Montserrat-Medium',
  bold: 'Montserrat-Bold',
} as const;

/**
 * Call this hook to load the fonts required by the CP Theme
 */
export const useKhFonts = () => {
  return useFonts({
    [FONTS.light]: Montserrat_300Light,
    [FONTS.regular]: Montserrat_400Regular,
    [FONTS.medium]: Montserrat_500Medium,
    [FONTS.bold]: Montserrat_700Bold,
  });
};
