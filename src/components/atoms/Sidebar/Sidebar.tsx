import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle
} from '@ionic/react'
import React from 'react'
import { person } from 'ionicons/icons'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Sidebar.css'

interface RouteInterface {
  name: string
  path: string
  component: React.FC<{}>
  icon: string
  sidebarRender?: boolean
  tabRender?: boolean
}

interface RollCallCardInterface {
  state: string
  billNum: string
  name: string
  endDate: string
  isSoftRollCall?: boolean
  summary?: string
}

type PostsState = {
  posts: {
    list: RollCallCardInterface[]
  }
  user: {
    username: string | null
    password: string | null
    isLoggedIn: boolean
  }
}

interface Props {
  paths: RouteInterface[]
}

const NavSidebar: React.FC<Props> = (props: Props) => {
  const user = useSelector<any, PostsState['user']>((state: any) => state.user)

  const location = useLocation()

  const sidebarItems = props.paths
    .filter((routes: RouteInterface) => {
      if (routes.sidebarRender === false) return false
      return true
    })
    .map((routes) => {
      return (
        <IonMenuToggle auto-hide='false' key={routes.name}>
          <IonItem
            className={location.pathname === routes.path ? 'selected' : ''}
            routerLink={routes.path}
          >
            <IonIcon slot='start' ios={routes.icon} md={routes.icon} />
            <IonLabel>{routes.name}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      )
    })

  return (
    <IonMenu content-id='main-content'>
      <IonContent>
        <IonList>
          <IonListHeader>
            <div className='flexbox ion-align-items-center ion-nowrap ion-padding'>
              <IonIcon ios={person} md={person} size='large' color='medium' />
              <div className='ion-align-items-stretch ion-wrap'>
                <IonTitle className='username'>
                  {user.isLoggedIn ? user.username : 'Username'}
                </IonTitle>
                <IonTitle className='view-profile'>View Profile</IonTitle>
              </div>
            </div>
          </IonListHeader>
          {sidebarItems}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default NavSidebar
