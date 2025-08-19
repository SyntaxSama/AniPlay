async function fetchHD5Stream(malID, episodeNumber) {
  const url = `https://animeembed.com/embed/${malID}/${episodeNumber}`;
  return url;
}

module.exports = { fetchHD5Stream };
