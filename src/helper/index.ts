export const makeLinkSearchWiki = (namePlayer: string) => {
  const nameConvert = namePlayer.replace(/\s/g, '_');
  const linkWiwi = `https://vi.wikipedia.org/wiki/${nameConvert}`;
  return linkWiwi;
};

export const makeScollToId = (id: string) => {
  return `#${id}`;
};
