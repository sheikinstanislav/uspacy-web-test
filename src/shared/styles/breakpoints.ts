export enum Dimensions {
  Sm = 576,
  Md = 768,
  Lg = 992,
  Xl = 1170,
}

export const Breakpoints = {
  SM: `@media (max-width: ${Dimensions.Sm}px)`,
  MD: `@media (max-width: ${Dimensions.Md}px)`,
  LG: `@media (max-width: ${Dimensions.Lg}px)`,
  XL: `@media (max-width: ${Dimensions.Xl}px)`,
};
