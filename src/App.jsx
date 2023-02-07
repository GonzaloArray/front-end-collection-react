
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Dashboard, EcommercePage, MouseFollower, TicTacToe, Kfc, ChallengueJunior, TodoList } from './views/index.js'

import { Layout } from './components/Layout'
import { Index } from './views/Index.jsx'

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
        },
        {
          path: '/kfc',
          element: <Kfc />
        },
        {
          path: '/challenguecat',
          element: <ChallengueJunior />
        },
        {
          path: '/todolist',
          element: <TodoList />
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
