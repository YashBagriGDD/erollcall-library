import React from 'react'

import { Button, TwIcon, Card } from 'erollcall-library'
import 'erollcall-library/dist/index.css'

const App = () => {
  return (
    <>
      <Button label='hello123' color='primary'></Button>
      <TwIcon size='small' icon='airplaneSharp'></TwIcon>
      <Card header='Hi' content='content'></Card>
    </>
  )
}

export default App
