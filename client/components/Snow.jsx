import React from 'react'

class Snow extends React.Component{
  constructor(props){
    super(props)
  }

      render(){
        return(
          <>
            {this.props.snowArr.map((snow, i) => {
              return (
                <circle key={i} fill={snow.color} cx={snow.sx} cy={snow.sy} r={snow.r} />
              )
            })}
          </>
        )
      }
}

export default Snow