import React from 'react'
import { IonButton } from '@ionic/react'
export interface ButtonProps {
  label: string
  color: string
}

const Button = (props: ButtonProps) => {
  return (
    <IonButton size='small' color={props.color}>
      {props.label}
    </IonButton>
  )
}

export default Button
