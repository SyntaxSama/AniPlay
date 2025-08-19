async function fetchHD6Stream(animetitle, episode) {
  const safeTitle = animetitle.replace(/\s+/g, '-'); 
  const url = `https://vidapi.xyz/embed/anime/${safeTitle}-episode-${episode}`;
  return url;
}

module.exports = { fetchHD6Stream };
