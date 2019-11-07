import React, { Component } from 'react'


class Carols extends Component {
    constructor(props) {
        super(props)

        this.handleTest = this.handleTest.bind(this)
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleTest)
    }

    handleTest(e) {
        // console.log(e)
        if (e.keyCode == 65) {
            console.log("a has been pressed")
        } else {
            console.log("nope")
        }
    }

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
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
                        <source src="/sounds/ho-ho-ho.mp3"></source>
                    </audio>
                </div>
            </div>
        )
    }
}


export default Carols



