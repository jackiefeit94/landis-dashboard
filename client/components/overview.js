import React from 'react'
import {connect} from 'react-redux'
import {fetchClients} from '../store/client'
import {ProgressPie} from './charts/progress-pie'
import {BarStates} from './charts/bar-states'
import {regions} from '../regions.js'

/**
 * COMPONENT
 */
class Overview extends React.Component {
  constructor() {
    super()

    this.findCredit = this.findCredit.bind(this)
    this.findBalance = this.findBalance.bind(this)
    this.findClientsByRegion = this.findClientsByRegion.bind(this)
  }

  async componentDidMount() {
    await this.props.getClients()
  }

  findCredit(data) {
    let credit = [
      {x: '250-400', y: 0},
      {x: '400-550', y: 0},
      {x: '550-700', y: 0},
      {x: '700-850', y: 0}
    ]

    for (let i = 0; i < data.length; i++) {
      if (250 <= data[i].credit && data[i].credit < 400) {
        credit[0].y++
      } else if (400 <= data[i].credit && data[i].credit < 550) {
        credit[1].y++
      } else if (550 <= data[i].credit && data[i].credit < 700) {
        credit[2].y++
      } else if (700 <= data[i].credit && data[i].credit < 850) {
        credit[3].y++
      }
    }
    return credit
  }

  findBalance(data) {
    let balance = [
      {x: '$1k-$5k', y: 0},
      {x: '$5k-$10k', y: 0},
      {x: '$10k-$15k', y: 0},
      {x: '$15k-$20k', y: 0}
    ]

    for (let i = 0; i < data.length; i++) {
      if (0 <= Number(data[i].balance) && Number(data[i].balance) < 5000) {
        balance[0].y++
      } else if (
        5000 <= Number(data[i].balance) &&
        Number(data[i].balance) < 10000
      ) {
        balance[1].y++
      } else if (
        10000 <= Number(data[i].balance) &&
        Number(data[i].balance) < 15000
      ) {
        balance[2].y++
      } else {
        balance[3].y++
      }
    }
    return balance
  }

  findClientsByRegion(data) {
    let barRegions = {
      northeast: 0,
      southeast: 0,
      southwest: 0,
      midwest: 0,
      west: 0
    }
    let finalBarData = []
    for (let i = 0; i < data.length; i++) {
      let curr = data[i].address
      for (let key in regions) {
        let ele = regions[key]
        for (let i = 0; i < ele.length; i++) {
          if (curr.includes(ele[i])) {
            barRegions[key]++
          }
        }
      }
    }
    for (let key in barRegions) {
      finalBarData.push({x: key, y: barRegions[key]})
    }
    return finalBarData
  }

  render() {
    let credit, balance, barData
    if (this.props.clients) {
      credit = this.findCredit(this.props.clients)
      balance = this.findBalance(this.props.clients)
      barData = this.findClientsByRegion(this.props.clients)
    }
    console.log('balance: ', balance)
    return (
      <div>
        <h3>Overview Page!</h3>
        <div id="dataContainer">
          <div id="dataDiv">
            <h2>CREDIT SCORES</h2>
            <ProgressPie data={credit} id="pies" />
            <h2>ACCOUNT BALANCE</h2>
            <ProgressPie data={balance} id="pies" />
          </div>
          <div id="dataDiv">
            <h2>CLIENTS BY REGION</h2>
            <BarStates data={barData} />
          </div>
          {/* <div id="dataDiv">Scatter plot (credit v balance)</div> */}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    clients: state.clients
  }
}

const mapDispatch = dispatch => {
  return {
    getClients: () => {
      dispatch(fetchClients())
    }
  }
}

export default connect(mapState, mapDispatch)(Overview)
