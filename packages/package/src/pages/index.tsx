import React, { useState, useRef } from 'react'
import { withSiteData } from 'react-static'

export default () => {
  const a = useState('c')
  const ref = useRef(null)
  console.log(a, ref)

  return (
    <div style={{ textAlign: 'center' }} ref={ref}>
      <h1>
        Welcome to React-Static <br /> + TypeScript
      </h1>
      <p>
        Learn{' '}
        <a href="https://github.com/sw-yx/react-typescript-cheatsheet">
          React + TypeScript
          {a[0]}
        </a>
      </p>
      <p>
        <a href="https://twitter.com/swyx">Report issues with this template</a>
      </p>
    </div>
  )
}
