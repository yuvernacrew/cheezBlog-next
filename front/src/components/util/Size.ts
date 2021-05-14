const kyes = [
  'xxxsmall',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
  'xxxlarge',
] as const;

type SizeKeys = typeof kyes[number];

type SizeType = {
  [key in SizeKeys]: number;
};

export const Size = kyes.reduce<SizeType>((acc, key, index) => {
  return { ...acc, [key]: (index + 1) * 4 };
}, {});
