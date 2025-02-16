import React from 'react'
import Image, { ImageProps } from 'next/future/image'

type DynamicSrcImageProps = ImageProps & {
  id: string
  srcString?: string
}

export function DynamicSrcImage({
  srcString,
  src,
  ...props
}: DynamicSrcImageProps) {
  const newSrc = srcString || src
  return <Image {...props} src={newSrc} />
}
