import * as React from 'react'
import AcceptDelivery from '../../components/AcceptDelivery/index'

const locations = [{
  id: 'a',
  name: 'Mc Donalds',
  address: 'R. caralhito',
}, {
  id: 'b',
  name: 'Jorge Risco',
  address: 'R. Cantareira, 123',
}]

const products = [{
  id: 'a',
  name: 'BigMac',
  description: 'hamb',
  quantity: 3,
}, {
  id: 'b',
  name: 'BigMac 2',
  description: 'hamb',
  quantity: 3,
}, {
  id: 'c',
  name: 'BigMac 3',
  description: 'hamb',
  quantity: 3,
}]

export default () => <AcceptDelivery
  onAcceptMission={() => {
    alert('accept')
  }}
  onDeclineMission={() => {
    alert('decline')
  }}
  locations={locations}
/>
