/* eslint-disable no-unused-vars */
import React, { FunctionComponent } from 'react'
import { IonIcon } from '@ionic/react'
import { menu, addCircleSharp, airplaneSharp } from 'ionicons/icons'

type icon = 'menu' | 'addCircleSharp' | 'airplaneSharp'

const icons = {
  menu,
  addCircleSharp,
  airplaneSharp
}
interface IconProps {
  size: string
  icon: icon
}

const TwIcon: FunctionComponent<IconProps> = ({ size, icon }) => {
  return <IonIcon size={size} icon={icons[icon]} />
}

export default TwIcon
