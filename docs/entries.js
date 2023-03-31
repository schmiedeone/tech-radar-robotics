function getEntries() {
  const entries = fetch(
    "https://mocki.io/v1/f28f1c01-081c-480e-893a-b804f6dc8cd4"
  ).then((response) => response.json());
  return entries;
}
