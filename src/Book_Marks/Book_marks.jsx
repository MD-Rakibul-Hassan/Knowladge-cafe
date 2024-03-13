import BookMark from "./Book_mark";
const BookMarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="flex-[50%] ">
            <div className="px-3 bg-gray-300 p-5 rounded-xl mt-10">
                <h1 className="text-3xl font-bold">Reading time : {readingTime}</h1>
            </div>
            <div className="px-3 bg-gray-300 rounded-xl py-3 my-2"> 
                <h1 className="text-3xl font-bold">Book Marks Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmarks => <BookMark bookmark={bookmarks} key={bookmarks.id}/>)
                }
            </div>
        </div>
    )
}
export default BookMarks;