import React from 'react'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react'

interface CardInterface {
  header: string
  content: string
  [key: string]: any
}

const Card: React.FC<CardInterface> = (props) => {
  return (
    <IonCard>
      {props.img ? <img src={props.img} alt={`${props.header}`} /> : ''}
      <IonCardHeader>
        {props.subtitle ? (
          <IonCardSubtitle color='warning'>
            <span>{props.subtitle}</span>
          </IonCardSubtitle>
        ) : (
          ''
        )}
        <IonCardTitle>{props.header}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <span>{props.content}</span>
      </IonCardContent>
    </IonCard>
  )
}

export default Card
