import { colors } from '@/styles/colors';

export const changeTempColor = (temp: number): string => {

  const tempRanges = [
    { max: 0, color: colors.textLight },
    { max: 10, color: colors.primary },
    { max: 25, color: colors.warning },
    { max: 35, color: colors.error },
    { max: Infinity, color: colors.badRequest },

  ];

  return tempRanges.find((range) => temp <= range.max)!.color;

    
};