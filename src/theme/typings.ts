import { Theme } from './';

export const GRADIENT_CONTAINERS_KEYS = [
  'primary',
  'secondary',
  'grey',
  'alert',
  'success',
] as const;

/**
 * Utility type for inferring array element types.
 * @see https://stackoverflow.com/questions/41253310/typescript-retrieve-element-type-information-from-array-type#comment113940662_57447842
 * */
export type ArrayElement<ArrayType> = ArrayType extends readonly (infer T)[]
  ? T
  : never;

type Gradient = ArrayElement<typeof GRADIENT_CONTAINERS_KEYS>;

export type ThemeColor = keyof Theme['colors'];
export type ThemeContainer = Exclude<
  keyof Theme['containerVariants'],
  'defaults'
>;
export type ThemeGradient = Gradient;
export type ThemeText = keyof Theme['textVariants'];
