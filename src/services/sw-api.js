const baseUrl = "https://swapi.dev/api/starships/"

export function getAllStarships() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}

export async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()));
  const pilotObjects = await Promise.all(promises);
  return pilotObjects;
}