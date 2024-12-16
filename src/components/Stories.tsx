import { useRef } from 'react'

function Stories({ stories, addNewStory, setCurrentStory }: any) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    return (
        <div className="storiesRow">
            {stories.map((element: { image: string; date: Date; }, index: number) => {
                return<div onClick={()=>{setCurrentStory(index)}} key={index} className="story" style={{backgroundImage: `url(data:image/jpeg;base64,${element.image})`}}>
                </div>
            })}
            <div onClick={handleButtonClick} className="story">
                +
      <input
        type="file"
        id="fileId"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={addNewStory}
        name=''
      />            </div>
        </div>
    )
}

export default Stories