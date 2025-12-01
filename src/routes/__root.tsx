import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import React from 'react'

// import Header from '../components/Header'
import '../styles.css'
import MainGrid from '../grids/main-grid'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Siraj Shaikh',
      },
    ],
    links: [],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en"
      style={{
        margin: 0,
        padding: 0,
        background: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <head>
        <HeadContent />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
        <MainGrid/>
        {children}
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Page Not Found
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
