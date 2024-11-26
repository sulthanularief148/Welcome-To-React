const Shimmer = () => {
    return (

        <div className="shimmer-container">
            {[...Array(10)].map((_, i) => (
                <ShimmerContainer key={i} />
            ))}
        </div>

    );
};


const ShimmerContainer = () => {
    return (

        <div className="shimmer">
            <h2 className="res-name-shimmer"></h2>
            <h2 className="res-cuisine-shimmer"></h2>
            <div className="rating-shimmer">
                <h3 className="res-rating-shimmer"></h3>
            </div>
            <h2 className="areaname-shimmer"></h2>
        </div>

    )
}
export default Shimmer;