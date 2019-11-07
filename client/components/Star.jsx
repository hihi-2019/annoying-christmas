import React from 'react'
import Snow from './Snow'



class Star extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            starArr: [{
                cx: props.width / 2,
                cy: props.height / 2,
                r: 4,
                color: 'red'
                //make it transparent
            }],
            snowArr: [{
                sx: props.width / 2,
                sy: props.height / 3,
                r: 3,
                color: 'yellow'
              }]
        }
    }

    
    randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    handleClick = (event) => {
        console.log(event.pageX)
        let x = event.pageX
        let y = event.pageY - 56

        //push new cords to state array
        // get min max limits from screen size
        
        this.setState({
           starArr: [...this.state.starArr, {
               cx: x,
               cy:  y,
               r: this.state.starArr[0].r,
               color: this.randomHexColor()
           }],
        })
    }

    handleMove = (event) => {
        if(event.pageY < 120){
            console.log(event.pageY)
            let x = event.pageX
        let y = event.pageY - 56

        //push new cords to state array
        // get min max limits from screen size
        
        this.setState({
           snowArr: [...this.state.snowArr, {
               sx: x,
               sy: y,
               r: this.state.snowArr[0].r,
               color: 'gold'
           }],
        })
        }
    }

    moveSnow = () => {
        console.log(snowArr)
        this.state.snowArr.map((snow, i) => {
            return snow
        })
        console.log(snowArr)
            
    }

    render(){
        //must map over circles
        return(
            <svg width={this.props.width} height={this.props.height} onClick={this.handleClick} onMouseMove={this.handleMove}>
                {this.state.starArr.map((star, i) => {
                    return (
                        <circle key = {i} cx={star.cx} cy={star.cy} r={star.r} fill = {star.color}  />
                    ) 
                })}
                <Snow width={this.props.width} height={this.props.height} snowArr={this.state.snowArr} func={this.moveSnow}/>
            </svg>
        )
    }
}

export default Star