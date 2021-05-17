type breakpointsType = Array<{
  id: 'tablet' | 'pc';
  breakpoint: number;
}>;

const breakpoints: breakpointsType = [
  {
    id: 'tablet',
    breakpoint: 960,
  },
  {
    id: 'pc',
    breakpoint: 560,
  },
];

export const MediaQuery = breakpoints.reduce((acc, { id, breakpoint }) => {
  return {
    ...acc,
    [id]: `@media (min-width: ${breakpoint}px)`,
  };
}, {});
