import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

    const {data,loading,error} = useFetch("/hotels/countByCity?cities=tokyo,new york,london")

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
                ) : (
                <>
                <div className="featuredItem">
                <div className="featuredImgContainer">
                    <img src="https://images.unsplash.com/photo-1448317846460-907988886b33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York Img" className="featuredImg" />
                </div>
                <div className="featuredTitles">
                    <h1>New York</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <div className="featuredImgContainer">
                    <img src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="London Img" className="featuredImg" />
                </div>
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div>

            <div className="featuredItem">
                <div className="featuredImgContainer">
                    <img src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Tokyo Img" className="featuredImg" />
                </div>
                <div className="featuredTitles">
                    <h1>Tokyo</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            </>)}
        </div>
    )
}

export default Featured