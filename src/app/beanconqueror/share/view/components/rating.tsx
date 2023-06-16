type Fill = "full" | "half" | "none";

const FlameOpen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={"0 0 24 24"} strokeWidth={1.5} stroke="currentColor"
         className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"/>
    </svg>
)

const FlameClosed = ({fill, position}: { fill: Fill, position: number }) => {
    let maskWidth;

    switch (fill) {
        case "none":
            maskWidth = "0";
            break;
        case "half":
            maskWidth = "12";
            break;
        case "full":
        default:
            maskWidth = "24";
            break;
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <defs>
                <mask id={`mask${position}`} x="0" y="0" width="24" height="24">
                    <rect x="0" y="0" width={maskWidth} height="24"
                          style={{stroke: "none", fill: "#fff"}}/>
                </mask>
            </defs>
            <path
                fillRule="evenodd"
                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                clipRule="evenodd"
                mask={`url(#mask${position})`}
            />
        </svg>
    )
}

const RatingItem = ({fill, position}: { fill: Fill, position: number }) => (
    <div className={"relative"}>
        <div>
            <FlameOpen/>
        </div>
        <div className={"absolute top-0"}>
            <FlameClosed fill={fill} position={position}/>
        </div>
    </div>
)

const Rating = ({value}: { value: number }) => {
    // Note: rating seems to discard decimal points, as the protobuf field type is
    // uint64 instead of float, so for now don't use half masks
    return (
        <div className={"flex"}>
            {[1, 2, 3, 4, 5].map(number => {
                const fill: Fill = value >= number ? "full" : "none";
                return (
                    <RatingItem key={number} position={number} fill={fill}/>
                )
            })}
        </div>
    )
}

export default Rating;