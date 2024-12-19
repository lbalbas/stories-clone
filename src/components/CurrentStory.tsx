
function CurrentStory({ currentStory, stories, nextStory }: any) {
    return (
        <div style={{
                backgroundImage: `url(data:image/jpeg;base64,${stories[currentStory].image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }} onClick={nextStory} className="currentStory">
            
        </div>
    )
}

export default CurrentStory
