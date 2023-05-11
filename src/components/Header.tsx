
const Header = () => {
  return (
    <header>
        <div className="flex">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
        </ul>
        </div>
        <div></div>
    </header>
  )
}

export default Header