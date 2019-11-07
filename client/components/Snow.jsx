import React from 'react'

class Snow extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      snowArr: [{
        sx: props.width / 2,
        sy: props.height / 3,
        r: 5,
        color: 'yellow'
      }]
    }
  }
      render(){
        return(
          <svg width={this.props.width} height={this.props.height}>
            {this.state.snowArr.map((snow, i) => {
              <circle key={i} fill={snow.color} cx={snow.sx} cy={snow.sy} r={snow.r}></circle>
            })}
          </svg>
        )
      }
}

export default Snow