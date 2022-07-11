import React from 'react'
import Navigation from '../navigation/Navigation'

export default function Layout({children}) {
  return (
    <div>
        <Navigation/>
        <main>
            {children}
        </main>
    </div>
  )
}
