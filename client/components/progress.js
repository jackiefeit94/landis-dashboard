import React from 'react'
import {VictoryPie, VictoryLabel} from 'victory'

class Progress extends React.Component {
  constructor() {
    super()
    this.state = {
      percent: 0
    }
  }

  componentDidMount() {
    this.setState({percent: this.props.progress})
  }

  render() {
    return (
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          title="Progress"
          standalone={false}
          width={400}
          height={400}
          data={[
            //percent - this.state.percent
            {x: 1, y: this.state.percent},
            //100-this.state.percent
            {x: 2, y: 100 - this.state.percent}
          ]}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({datum}) => {
                const color = datum.y > 60 ? 'green' : 'red'
                return datum.x === 1 ? color : 'transparent'
              }
            }
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={200}
          text={this.state.percent}
          style={{fontSize: 45}}
        />
      </svg>
    )
  }
}

export default Progress
