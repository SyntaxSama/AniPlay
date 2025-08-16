async function fetchHD2Stream(anilistId, episode, subOrDub) {
  if (!['sub', 'dub'].includes(subOrDub.toLowerCase())) {
    throw new Error('Invalid sub/dub option. Must be "sub" or "dub".');
  }

  const url = `https://vidnest.fun/animepahe/${anilistId}/${episode}/${subOrDub}`;

  return url;
}

module.exports = { fetchHD2Stream };
