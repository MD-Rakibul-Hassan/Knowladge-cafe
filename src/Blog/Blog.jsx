import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleBookMark,handleReadingTime }) => {
    const { author_name, author_image, id, cover_photo, title, reading_time,post_date } = blog;
    return (
        <div className=" my-5 p-5">
            <img src={cover_photo} className="w-full" alt="" />
            <div className="my-3 flex justify-between px-3">
                <div className="flex items-center">
                    <img src={author_image} alt="" className="w-14 h-14" />
                    <div>
                        <h1 className="text-2xl font-bold">{author_name}</h1>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div> 
                    <span>{reading_time} Min read <button className="text-2xl mt-3 text-yellow-500" onClick={()=>handleBookMark(blog)}><CiBookmark /></button> </span>
                </div>
            </div>
            <h1 className="text-xl font-semibold px-3">{title}</h1>
            <button className="bg-yellow-500 text-white px-3 rounded-xl my-3" onClick={() => handleReadingTime(reading_time)}>Mark as read</button>
        </div>
    )
}
export default Blog;