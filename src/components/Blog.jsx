import { useEffect, useState } from "react"
import "../style/blog.css"

function Blog(){
    const [bloglist, setBlogList] = useState([])
    const [openBlogId, setOpenBlogId] = useState(null)
    useEffect(()=>{
        fetch("https://win25-jsf-assignment.azurewebsites.net/api/blogs")
        .then(res => res.json())
        .then(data => {
            console.log("blogs fetched: ", data)
            setBlogList(data)
        })
        .catch(err => {
            console.log("something went wrong", err)
        })
    }, [])
    function readMore(id){
        if(openBlogId === id){
            setOpenBlogId(null)
        } else {
            setOpenBlogId(id)
        }
    }
    return(
        <div className="blog-container">
            <div className="blog-left">
                <p className="blog-lable">Latest Blog and News</p>
                <h3 className="blog-title">Check Out Our Latest Blog <span>and News Update</span></h3>
            </div>
            <div className="blog-right">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui
                  <span>lacinia gravida. Nulla quis nulla leo.</span>
                    Mauris ac blandit nisi non sodales augue.</p>
            </div>
            <div className="blog-updates">
                {bloglist && bloglist.map(blog => {
                    const bigText = blog.id === openBlogId
                    return (
                        <div className="blog-news" key={blog.id}>
                            <div className="blog-img">
                              <img src={blog.imageUrl} alt={blog.title}/>
                            </div>
                            <div className="blog-created">
                              <p className="blog-time-created">{blog.created}</p>
                              <h6 className="blog-small-text">{blog.title}</h6>
                            <div className={`blog-description-wrapper ${bigText ? "expanded" : ""}`}>
                              <p className="blog-description">{blog.description}</p>
                            </div>
                            <button className="read-more-btn" onClick={()=>readMore(blog.id)}>
                              {bigText ? "Read less" : "Read more"}
                          </button>
                        </div>
                    </div>
                  )
                })}
          </div>
        </div>
    )
}

export default Blog