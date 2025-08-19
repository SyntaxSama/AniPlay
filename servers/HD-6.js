async function fetchHD3Stream(animetitle, episode) {
  const safeTitle = animetitle.replace(/\s+/g, '-'); 
  const url = `https://vidapi.xyz/embed/anime/${safeTitle}-episode-${episode}`;
  return url;
}

module.exports = { fetchHD3Stream };
