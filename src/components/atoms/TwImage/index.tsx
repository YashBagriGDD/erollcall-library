/* eslint-disable no-unused-vars */
import React, { FunctionComponent } from 'react'
import { IonImg } from '@ionic/react'

interface ImageProps {
  src: string
  alt?: string
  slot?: string
  className?: string
}

const TwImage: FunctionComponent<ImageProps> = ({
  src,
  alt,
  slot,
  className,
  ...otherProps
}) => {
  return (
    <IonImg
      src={src}
      alt={alt}
      slot={slot}
      className={className}
      {...otherProps}
    />
  )
}

export default TwImage
