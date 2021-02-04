import React from 'react'
import {VictoryPie} from 'victory'

//for both account balance and credit score
export const ProgressPie = props => {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        width={400}
        height={400}
        standalone={false}
        data={props.data}
        style={{labels: {fontSize: 20}}}
        padding={30}
      />
    </svg>
  )
}
