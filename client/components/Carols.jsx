import React, { Component } from 'react'


class Carols extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentAudio: '/sounds/ho-ho-ho.mp3'
        }

        this.handleTest = this.handleTest.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleTest)
    }

    handleTest(e) {

        // console.log(e)
        if (e.keyCode == 65) {
            this.setState({
                currentAudio: '/mp3/rudolf.mp3'
            }, () => {
                this.playAudio()
            })

        } else {
            console.log("nope")
        }
    }

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        console.log(audioEl)
        audioEl.play()
    }

    render() {
        return (
            <div >
                <div>
                    <button onClick={this.playAudio}>
                        <span>Play Audio</span>
                    </button>
                    <audio className="audio-element">
                        <source src={this.state.currentAudio}></source>
                    </audio>
                </div>
            </div>
        )
    }
}


export default Carols



