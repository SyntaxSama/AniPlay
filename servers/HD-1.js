async function fetchHD1Stream(anilistId, episode, subOrDub) {
  if (!['sub', 'dub'].includes(subOrDub.toLowerCase())) {
    throw new Error('Invalid sub/dub option. Must be "sub" or "dub".');
  }

  const url = `https://vidnest.fun/anime/${anilistId}/${episode}/${subOrDub}`;

  return url;
}

module.exports = { fetchHD1Stream };
