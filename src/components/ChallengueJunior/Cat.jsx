import { Button } from './components/Button'
import { Fact } from './components/Fact'
import { Img } from './components/Img'
import { useFacCat } from './hooks/useFacCat'
import { getRandomCat, getRandomFact } from './services'

/*
  Facts Random: https://catfact.ninja/fact

  Imagen random: https://cataas.com/cat/says/hello

  Recupera un hecho aleatorio de gatos de la primera API

  Recuperar la primera palabra del hecho

  Muestra una imagen de un gato con la primera palabra.

*/

export const Cat = () => {
  const [fact, refreshFact] = useFacCat(getRandomFact)
  const [url, refreshImg] = useFacCat(getRandomCat)

  const handleClick = () => {
    refreshFact()
    refreshImg()
  }

  return (
    <div className='container'>
      <h1
        style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}
      >
        Facts Cats
      </h1>
      <div
        className='ct-responsive'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}
      >
        <Fact fact={fact} />

        <Img url={url} />

      </div>

      <Button event={handleClick} title='Click me, and reload img and description' />
    </div>
  )
}
