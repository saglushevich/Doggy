export const makeCardFormat = (
  value: string,
  length: number,
  insert: string
) => {
  const newValue = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

  const parts = [];

  for (let i = 0; i < newValue.length; i += length) {
    parts.push(newValue.slice(i, i + length));
  }

  return parts.length > 1 ? parts.join(insert) : newValue;
};
