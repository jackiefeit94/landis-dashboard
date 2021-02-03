import React from 'react'
import {VictoryChart, VictoryBar, Bar} from 'victory'

export const BarStates = props => {
  return (
    <VictoryChart
      height={400}
      width={400}
      domainPadding={{x: 50, y: [0, 20]}}
      scale={{x: 'time'}}
    >
      <VictoryBar
        dataComponent={<Bar />}
        //style={this.state.style}
        data={[
          {x: new Date(1986, 1, 1), y: 2},
          {x: new Date(1996, 1, 1), y: 3},
          {x: new Date(2006, 1, 1), y: 5},
          {x: new Date(2016, 1, 1), y: 4}
        ]}
      />
    </VictoryChart>
  )
}
