import React from 'react'
import Star from './Star'
import Snow from './Snow'


const ChristmasTree = () => {
    return(
      <div className = 'background'>
          <Star width={window.innerWidth} height={window.innerHeight}/>
          <Snow width={window.innerWidth} height={window.innerHeight}/>
      </div>
    )
}

export default ChristmasTree
