import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    // The state is holding blogs data 
    const [blogs, setBlogs] = useState([]);
    // The useEffect use for get data form blogs.json file 
    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    console.log(blogs)

}
export default Blogs;