'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Product remove:"+error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Error: {error.message}</p>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
