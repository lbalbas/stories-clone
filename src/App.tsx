import { useState, useRef, useEffect } from 'react'
import CurrentStory  from './components/CurrentStory'
import Stories from './components/Stories'
import './App.css'

const getStories = () => {
  if (!localStorage.getItem('stories')) {
    return []
  }
  return JSON.parse(localStorage.getItem('stories') as string) as { image: string, date: Date }[]
}
function App() {
  const [stories, setStories] = useState(getStories())
  const [currentStory, setCurrentStory] = useState(0)
  const intervalRef = useRef<number | null>(null);

  const addNewStory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.item(0)
    let reader = new FileReader();
    reader.onload = function () {
        let base64String: string;
        let imageBase64Stringsep: string;

        base64String = (reader.result as string).replace("data:", "").replace(/^.+,/, "");

        imageBase64Stringsep = base64String;
        let newStory = {
            image: imageBase64Stringsep,
            date: new Date()
        }
        setStories([...stories, newStory])
        localStorage.setItem('stories', JSON.stringify([...stories, newStory]))
    }
    if (file) {
        reader.readAsDataURL(file);
      }
}
  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1)
    }else {
      setCurrentStory(0)
    }
    iterateStory()
  }

  const iterateStory = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextStory, 3000);
  }

  const removeOldStories = () => {
    const now = new Date()
    const newStories = stories.filter((story: { date: Date; }) => now.getTime() - new Date(story.date).getTime() < 86400000)
    if (newStories.length !== stories.length) {
      setStories(newStories)
      localStorage.setItem('stories', JSON.stringify(newStories))
    }
  }

  useEffect(() => {
    removeOldStories()
  })
  
  const changeCurrentStory = (index: number) => {
    setCurrentStory(index)
    iterateStory()
  }

  iterateStory()

  return (
    <div>
      <Stories setCurrentStory={changeCurrentStory} stories={stories} addNewStory={addNewStory} />
      <CurrentStory
        currentStory={currentStory}
        setCurrentStory={setCurrentStory}
        stories={stories}
        nextStory={nextStory}
      /> 
    </div>
  )
}

export default App
