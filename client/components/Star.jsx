import React from 'react'


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

    render(){

        //must map over circles
        return(
            <svg width={this.props.width} height={this.props.height} onClick={this.handleClick}>
                {this.state.starArr.map((star, i) => {
                    return (
                        <circle key = {i} cx={star.cx} cy={star.cy} r={star.r} fill = {star.color}  />
                    ) 
                })}
            </svg>
        )
    }
}

export default Star