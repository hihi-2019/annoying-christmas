import React from 'react'

class Star extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            starArr: [{
                cx: props.width / 2,
                cy: props.height / 2,
                r: 4
            }]
        }
    }

    circle = {
        
    }

    handleClick = () => {
        //push new cords to state array
        // get min max limits from screen size
        let offSetX = Math.random() * 100
        let offSetY = Math.random() * 100
        let offSetR = Math.random() * 4

        this.setState({
           starArr: [...this.state.starArr, {
               cx: this.props.width / 2 + offSetX,
               cy: this.props.height / 2 + offSetY,
               r: this.state.starArr[0].r + offSetR
           }] 
        })
    }

    render(){
        console.log(this.state.starArr)
        //must map over circles
        return(
            <svg width={this.props.width} height={this.props.height}>
                {this.state.starArr.map(star => {
                    return (
                        <circle cx={star.cx} cy={star.cy} r={star.r} onClick={this.handleClick}/>
                    )
                })}
            </svg>
        )
    }
}

export default Star