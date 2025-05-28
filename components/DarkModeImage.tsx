'use client'

import { useTheme } from 'next-themes'

const DarkModeImage = ({ lightSrc, darkSrc, alt, ...props }) => {
  const { resolvedTheme } = useTheme()
  console.log('DarkModeImage', { lightSrc, darkSrc, resolvedTheme })
  const src = resolvedTheme === 'dark' ? darkSrc : lightSrc
  return <img src={src} alt={alt} {...props} />
}

export default DarkModeImage
