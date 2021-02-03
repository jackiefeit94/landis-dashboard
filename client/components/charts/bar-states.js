import React from 'react'
import {VictoryChart, VictoryBar, Bar} from 'victory'

export const BarStates = props => {
  return (
    <VictoryChart
      height={400}
      width={500}
      domainPadding={{x: 100, y: [0, 20]}}
      scale={{x: 'time'}}
    >
      <VictoryBar
        dataComponent={<Bar />}
        data={props.data}
        style={{data: {fill: 'navy'}}}
      />
    </VictoryChart>
  )
}
