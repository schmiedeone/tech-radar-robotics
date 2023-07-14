function getEntries() {
  const entries = fetch(
    "https://api.buttercms.com/v2/content/dcj-tech-radar/?locale=de&auth_token=f07ae6384c65da8195f7d48d0bc2db5e7948fe0d"
  ).then((response) => {
    return response.json().then((data) => {
      const entries = data.data["dcj-tech-radar"];
      return entries.map((entry) => {
        const moddedEntry = Object.assign({}, entry);
        moddedEntry.ring = Number(entry.ring);
        moddedEntry.quadrant = Number(entry.quadrant);
        return moddedEntry;
      });
    });
  });
  return entries;
}
