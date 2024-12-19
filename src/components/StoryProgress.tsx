

const  StoryProgress = ({currentStory, stories}:{currentStory: number, stories: { image: string; date: Date; }[]}) =>{
    return (
        <div className="storyProgressContainer">
        
        {stories.map((element: { image: string; date: Date; }, index: number) =>{
            return(
                <div key={index} className={"storyProgressBar" + (index === currentStory ? " active" : "") + (index < currentStory ? " past" : "")}></div>
            )
        })}
        </div> 
    )
}

export default StoryProgress;