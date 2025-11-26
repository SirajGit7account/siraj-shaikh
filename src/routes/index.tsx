import { createFileRoute } from '@tanstack/react-router'
import type {} from '../routeTree.gen'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="h-[500vh] w-full relative z-0">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Gradient sections at intervals */}
      <div 
        className="absolute top-0 left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        }}
      />
      <div 
        className="absolute top-[100vh] left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        }}
      />
      <div 
        className="absolute top-[200vh] left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        }}
      />
      <div 
        className="absolute top-[300vh] left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        }}
      />
      <div 
        className="absolute top-[400vh] left-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'linear-gradient(170deg, rgb(0, 0, 0) 0%, rgb(20, 19, 19) 70%, rgb(38, 38, 38) 100%)',
        }}
      />
    </div>
  )
}