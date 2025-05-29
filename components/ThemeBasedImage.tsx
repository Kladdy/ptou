'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeBasedImage = ({ lightSrc, darkSrc, alt, ...props }) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  console.log('ThemeBasedImage', { lightSrc, darkSrc, resolvedTheme })
  const src = resolvedTheme === 'dark' ? darkSrc : lightSrc
  return <img src={src} alt={alt} {...props} />
}

export default ThemeBasedImage
