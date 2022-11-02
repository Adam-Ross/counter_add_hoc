const Counter = ({increaseCount}) => {

    const handleClick = () => {
        increaseCount()
    }

    return <button onClick={handleClick}>Click</button>
}

export default Counter