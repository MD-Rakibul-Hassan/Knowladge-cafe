import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBookMark,handleReadingTime}) => {
    // The state is holding blogs data 
    const [blogs, setBlogs] = useState([]);
    // The useEffect use for get data form blogs.json file 
    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    
    return (
        <div className="flex-[50%]">
            {
                blogs.map((blog) => <Blog handleBookMark={handleBookMark} blog={blog} key={blog.id} handleReadingTime={handleReadingTime} />)
            }
        </div>
    )

}
export default Blogs;