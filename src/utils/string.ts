export const singularOrPlural = (
  array: string[],
  minLength: number,
  letter: string
) => {
  return array.length > minLength ? letter : null;
};
