
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './views/Dashboard'
import { EcommercePage } from './views/EcommercePage'
import { Index } from './views/Index'
import { MouseFollower } from './views/MouseFollower'
import { TicTacToe } from './views/TicTacToe'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: '/Dashboard',
          element: <Dashboard />
        },
        {
          path: '/TicTacToe',
          element: <TicTacToe />
        },
        {
          path: '/MouseFollower',
          element: <MouseFollower />
        },
        {
          path: '/ecommercepage',
          element: <EcommercePage />
        }
      ]
    }
  ])

  return (

    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
