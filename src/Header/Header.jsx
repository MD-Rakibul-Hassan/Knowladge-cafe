import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <h1 className='text-3xl font-bold'>Knowadge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    )
}
export default Header;