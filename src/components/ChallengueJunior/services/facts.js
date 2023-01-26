const URL_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const req = await fetch(URL_FACT)
  const rep = await req.json()
  const { fact } = rep
  return fact
}
