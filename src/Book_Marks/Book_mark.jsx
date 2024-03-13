

const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-slate-400 p-3 m-2 rounded-xl">
            <h1 className="text-2xl font-semibold text-center text-white">{title}</h1>
        </div>
    )
}
export default BookMark;