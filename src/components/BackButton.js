const BackButton = ({resetCount}) => {
    const handleClick = () => {
        resetCount()
    }

    return <button onClick={handleClick}>Back</button>
}

export default BackButton