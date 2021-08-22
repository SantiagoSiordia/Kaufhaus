import { FONTS } from '../fonts';

export const textVariants = {
  h2: {
    fontFamily: FONTS.medium,
    FONTSize: 20,
    lineHeight: 28,
  },
  h3: {
    fontFamily: FONTS.medium,
    FONTSize: 18,
    lineHeight: 28,
  },
  'body-bold': {
    fontFamily: FONTS.bold,
    FONTSize: 14,
    lineHeight: 20,
  },
  'body-regular': {
    fontFamily: FONTS.regular,
    FONTSize: 14,
    lineHeight: 20,
  },
  'subtitle-1': {
    fontFamily: FONTS.regular,
    FONTSize: 12,
    lineHeight: 16,
  },
  'subtitle-2': {
    fontFamily: FONTS.bold,
    FONTSize: 10,
    lineHeight: 12,
  },
  overline: {
    fontFamily: FONTS.bold,
    FONTSize: 12,
    lineHeight: 16,
  },
  btn: {
    fontFamily: FONTS.regular,
    FONTSize: 16,
    lineHeight: 16,
    textShadowOffset: { height: 2, width: 0 },
    textShadowRadius: 4,
  },
  'btn-bold': {
    fontFamily: FONTS.bold,
    FONTSize: 16,
    lineHeight: 24,
    textShadowOffset: { height: 2, width: 0 },
    textShadowRadius: 4,
  },
  'price-from': {
    fontFamily: FONTS.regular,
    FONTSize: 12,
    lineHeight: 16,
    textDecorationLine: 'line-through',
  },
  'price-regular': {
    fontFamily: FONTS.regular,
    FONTSize: 16,
    lineHeight: 24,
  },
  'price-offer': {
    fontFamily: FONTS.bold,
    FONTSize: 16,
    lineHeight: 24,
    textShadowOffset: { height: 2, width: 0 },
    textShadowRadius: 4,
  },
  'price-total': {
    fontFamily: FONTS.bold,
    FONTSize: 20,
    lineHeight: 28,
    textShadowOffset: { height: 2, width: 0 },
    textShadowRadius: 4,
  },
} as const;
