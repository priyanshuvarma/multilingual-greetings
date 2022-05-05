import {Component} from 'react'
import Button from '../Button'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeButtonId: languageGreetingsList[0].id,
  }

  setActiveButtonId = id => {
    this.setState({activeButtonId: id})
  }

  getActiveImg = () => {
    const {activeButtonId} = this.state
    const filteredImg = languageGreetingsList.filter(
      each => each.id === activeButtonId,
    )
    console.log(filteredImg)
    return filteredImg
  }

  render() {
    const {activeButtonId} = this.state
    const filterImage = this.getActiveImg()
    const image = filterImage[0].imageUrl
    const imageAlt = filterImage[0].imageAltText

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="button-list">
          {languageGreetingsList.map(each => (
            <Button
              key={each.id}
              buttonDetails={each}
              setActiveButtonId={this.setActiveButtonId}
              isActive={activeButtonId === each.id}
            />
          ))}
        </ul>
        <img alt={imageAlt} className="image" src={image} />
      </div>
    )
  }
}

export default Home
