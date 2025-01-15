const Shimmer = () => {

    return (

        <div className="flex gap-5 flex-wrap md:flex-row flex-col my-5 mx-auto justify-center">
            {[...Array(20)].map((_, i) => (
                <ShimmerContainer key={i} />
            ))}
        </div>

    );
};






const ShimmerContainer = () => {
    return (
        <div className="shimmer rounded-2xl mt-2  w-1/5 h-[200px] p-5 bg-[#f0f0f0] " >
            <h2 className="w-full h-5 bg-[#ccc] rounded-2xl"></h2>
            <h2 className="w-full h-5 bg-[#ccc] rounded-2xl"></h2>
            <div className="flex items-center gap-[10px] mt-[10px] ">
                <span className="w-[80px] h-5 rounded-2xl bg-[#ccc] flex-shrink-0"></span>
                <h3 className="w-full h-5 bg-[#ccc] rounded-2xlr"></h3>
            </div>
            <h2 className="w-full h-5 bg-[#ccc] rounded-2xl"></h2>
        </div>

    )
}
export default Shimmer;


