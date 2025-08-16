async function fetchHD4Stream(episodeID, subOrDub) {
  const url = `https://megaplay.buzz/stream/s-2/${episodeID}/${subOrDub}`;
  return url;
}

module.exports = { fetchHD4Stream };
