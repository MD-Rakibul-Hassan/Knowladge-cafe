import Blogs from "./Blog/Blogs";
import Header from "./Header/Header";
import BookMarks from "./Book_Marks/Book_marks";
import { useState } from "react";
const App = () => {
    const [bookmarks, setBookMarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const handleBookMark = (blog) => {
        setBookMarks([...bookmarks,blog])
    }
    const handleReadingTime = (id, time) => {
        console.log(id)
        setReadingTime(readingTime + time)
        const removeBookMark = bookmarks.filter(bookmarks => bookmarks.id !== id)
        setBookMarks(removeBookMark)
    }
    return (
        <div className="container mx-auto">
            <Header />
            <hr />
            <div className="flex justify-between  flex-col lg:flex lg:flex-row my-5">
                <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime} />
                <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
            </div>
        </div>
    )
}
export default App;