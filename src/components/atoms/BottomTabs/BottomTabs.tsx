import React from 'react'
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react'

interface RouteInterface {
  name: string
  path: string
  component: React.FC<{}>
  icon: string
  sidebarRender?: boolean
  tabRender?: boolean
}

interface Props {
  paths: RouteInterface[]
}

const BottomTabs: React.FC<Props> = (props: Props) => {
  const tabsMap = props.paths
    .filter((routes: RouteInterface) => {
      if (routes.tabRender === false) return false
      return true
    })
    .map((routes, index) => {
      const tabName = routes.name.replaceAll('\\/', '')

      return (
        <IonTabButton tab={tabName} href={routes.path} key={index}>
          <IonIcon icon={routes.icon} />
          <IonLabel>{routes.name}</IonLabel>
        </IonTabButton>
      )
    })

  return (
    <div className='ion-hide-sm-up'>
      <IonTabs>
        <IonRouterOutlet />
        <IonTabBar slot='bottom'>{tabsMap}</IonTabBar>
      </IonTabs>
    </div>
  )
}

export default BottomTabs
