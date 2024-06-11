const SplitScreen = ({children}) => {
    const [left, right] = children;

    return (
        <div className="flex">
            <div className="bg-[#0070FF]">{left}</div>
            <div className="flex-1">{right}</div>
        </div>
    )
}

export default SplitScreen;