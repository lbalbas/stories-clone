
function CurrentStory({ currentStory, stories, nextStory }: any) {
    return (
        <div className="currentStory">
            {
                stories.length > 0 &&
                <div onClick={nextStory}>
                    <img src={"data:image/jpeg;base64," + stories[currentStory].image} alt="" />
                </div>
            }
        </div>
    )
}

export default CurrentStory
