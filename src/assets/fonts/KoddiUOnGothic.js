import * as Font from 'expo-font';
// import bold from '../../../assets/fonts/KoddiUDOnGothic-Bold.otf';
// import regular from '../../../assets/fonts/KoddiUDOnGothic-Regular.otf';
// import extra_bold from '../../../assets/fonts/KoddiUDOnGothic-ExtraBold.otf';

export const KODDI_FONT_BOLD = 'KoddiUDOnGothic-Bold';
export const KODDI_FONT_REGULAR = 'KoddiUDOnGothic-Regular';
export const KODDI_FONT_EXTRA_BOLD = 'KoddiUDOnGothic-ExtraBold';

export const KoddiUDOnGothic = {
  'KoddiUDOnGothic-Bold': require('../../../assets/fonts/KoddiUDOnGothic-Bold.otf'),
  'KoddiUDOnGothic-ExtraBold': require('../../../assets/fonts/KoddiUDOnGothic-ExtraBold.otf'),
  'KoddiUDOnGothic-Regular': require('../../../assets/fonts/KoddiUDOnGothic-Regular.otf'),
};

/**
 * KoddiUDOnGothic fonts 로드
 */
export const getKoddiFonts = async () => {
  return Font.loadAsync(KoddiUDOnGothic);
};
