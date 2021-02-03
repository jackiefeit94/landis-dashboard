import React from 'react'
import {VictoryPie} from 'victory'

export const ProgressPie = props => {
  return (
    <svg viewBox="0 0 300 300" width="100%" height="100%">
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        width={300}
        height={300}
        standalone={false}
        data={props.data}
        style={{labels: {fontSize: 15}}}
        padding={30}
      />
    </svg>
  )
}
