import React, { Component } from 'react'
import Sound from 'react-sound'



class Carols extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playing: true,
            url: '/sounds/ho-ho-ho.mp3',
            nextAudio: '/mp3/rudolf.mp3',
            image: '',
            classForImage: ''
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
                url: '/mp3/ho-ho-ho.mp3',
                image: '/images/royals.jpeg',
                classForImage: 'royals'
            })

        } else if (e.keyCode == 66) {
            this.setState({
                url: '/mp3/jingle-bells.mp3',
                image: '/images/nsync.jpeg',
                classForImage: 'nsync'

            })
        } else if (e.keyCode == 67) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/mariah.jpg',
                classForImage: 'mariah'
            })
        } else if (e.keyCode == 68) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/ozzie.jpeg',
                classForImage: 'ozzie'

            })
        } else if (e.keyCode == 69) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/rock.jpeg',
                classForImage: 'rock'
            })
        } else if (e.keyCode == 70) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/bieber.jpg',
                classForImage: 'bieber'
            })
        } else if (e.keyCode == 71) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/britney.jpg',
                classForImage: 'britney'
            })
        } else if (e.keyCode == 72) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/beyonce.jpg',
                classForImage: 'beyonce'
            })
        } else if (e.keyCode == 73) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/kimk.jpg',
                classForImage: 'kim'
            })
        } else if (e.keyCode == 74) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/kanye.jpg',
                classForImage: 'kanye'
            })
        } else if (e.keyCode == 75) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/kanye.jpg',
                classForImage: 'kanye'
            })
        } else if (e.keyCode == 76) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/kimk.jpg',
                classForImage: 'kim'
            })
        } else if (e.keyCode == 77) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/beyonce.jpg',
                classForImage: 'beyonce'
            })
        } else if (e.keyCode == 78) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/britney.jpg',
                classForImage: 'britney'
            })
        } else if (e.keyCode == 79) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/ozzie.jpeg',
                classForImage: 'ozzie'
            })
        } else if (e.keyCode == 80) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/kimk.jpg',
                classForImage: 'kim'
            })
        } else if (e.keyCode == 81) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/kanye.jpg',
                classForImage: 'kanye'
            })
        } else if (e.keyCode == 82) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/beyonce.jpg',
                classForImage: 'beyonce'
            })
        } else if (e.keyCode == 83) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/bieber.jpg',
                classForImage: 'bieber'
            })
        } else if (e.keyCode == 84) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/britney.jpg',
                classForImage: 'britney'
            })
        } else if (e.keyCode == 85) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/ozzie.jpeg',
                classForImage: 'ozzie'
            })
        } else if (e.keyCode == 86) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/bieber.jpg',
                classForImage: 'bieber'
            })
        } else if (e.keyCode == 87) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/kanye.jpg',
                classForImage: 'kanye'
            })
        } else if (e.keyCode == 88) {
            this.setState({
                url: '/mp3/rudolf.mp3',
                image: '/images/kimk.jpg',
                classForImage: 'kim'
            })
        } else if (e.keyCode == 89) {
            this.setState({
                url: '/mp3/grandma-got-run-over.mp3',
                image: '/images/beyonce.jpg',
                classForImage: 'beyonce'
            })
        } else if (e.keyCode == 90) {
            this.setState({
                url: '/mp3/sleigh-bells.mp3',
                image: '/images/bieber.jpg',
                classForImage: 'bieber'
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
                    {/* <button onClick={this.playAudio}>
                        <span>Play Audio</span>
                    </button> */}
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
                    <img className={this.state.classForImage} src={this.state.image} />
                </div>
            </div>
        )
    }
}


export default Carols



