
export const getRandomCat = async () => {
  const URL_FACT = 'https://api.thecatapi.com/v1/images/search'

  const req = await fetch(URL_FACT)
  const rep = await req.json()
  const { url } = rep[0]
  return url
}
