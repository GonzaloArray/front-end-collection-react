import { useState, useEffect } from 'react'

export const useFacCat = (getUrl) => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getUrl().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return [fact, refreshFact]
}
