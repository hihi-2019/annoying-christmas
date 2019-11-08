import React from 'react'
import Snow from './Snow'



class Star extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            starArr: [{
                cx: props.width / 2,
                cy: props.height / 2,
                r: 6,
                color: 'red'
                //make it transparent
            }],
            snowArr: [{
                sx: props.width / 2,
                sy: props.height / 3,
                r: 2,
                color: 'yellow'
              }]
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.moveSnow()
            this.changeColors()
        }, 300)
    }

    changeColors() {
        this.setState({
            starArr: this.state.starArr.map(item => {
                item.color = this.randomHexColor()
                return item
        })
    })
    }

    moveSnow() {
        console.log('moving the snow')

        this.setState({
            snowArr: this.state.snowArr.map(item => {
                item.sy = item.sy + (Math.random() * 20)
                item.sx = item.sx + (Math.random() * 5)
                return item
            }),
         })
    }

    
    randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

    handleClick = (event) => {
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


    

    render(){
        console.log(this.state.snowArr)
        //must map over circles
        return(
            <svg width={this.props.width} height={this.props.height} onClick={this.handleClick} onMouseMove={this.handleMove}>
                {this.state.starArr.map((star, i) => {
                    return (
                        <circle key = {i} cx={star.cx} cy={star.cy} r={star.r} fill = {star.color}  />
                    ) 
                })}
                <Snow width={this.props.width} height={this.props.height} snowArr={this.state.snowArr} func={this.move}/>
            </svg>
        )
    }
}

export default Star