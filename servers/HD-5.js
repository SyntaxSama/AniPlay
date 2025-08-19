async function fetchHD5Stream(malID, episodeNumber) {
  const url = `https://animembed.com/embed/${malID}/${episodeNumber}`;
  return url;
}

module.exports = { fetchHD5Stream };
