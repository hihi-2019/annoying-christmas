import React, { Component } from 'react'
import Sound from 'react-sound'



class Carols extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            url: '/sounds/ho-ho-ho.mp3',
            nextAudio: '/mp3/rudolf.mp3'
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
                url: '/mp3/ho-ho-ho.mp3'
            })

        } else if (e.keyCode == 66) {
            this.setState({
                url: '/mp3/jingle-bells.mp3'
            })
        }
    }

    playAudio = () => {
        // const audioEl = document.getElementsByClassName("audio-element")[0]
        // console.log(audioEl)
        // audioEl.play()
        this.setState({
            playing: !this.state.playing
        })
    }

    render() {
        return (
            <div >
                <div>
                    <button onClick={this.playAudio}>
                        <span>Play Audio</span>
                    </button>
                    {/* <audio className="audio-element">
                        <source src={this.state.currentAudio}></source>
                    </audio> */}
                    <Sound
                        url={this.state.url}
                        playStatus={this.state.playing ? Sound.status.PLAYING : Sound.status.STOPPED}
                        playFromPosition={300 /* in milliseconds */}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                </div>
            </div>
        )
    }
}


export default Carols



