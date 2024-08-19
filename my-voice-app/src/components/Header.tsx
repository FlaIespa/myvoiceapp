const Header = () => (
    <header className = "bg-blue-600" p-4 justify-between item-center> 
        <div> Logo </div>
        <nav> 
            <ul className="flex space-x-4">
                <li><a href = "#" className= "text-white">Home</a></li>
                <li><a href = "#" className= "text-white">Voices</a></li>
                <li><a href = "#" className= "text-white">About</a></li>
            </ul>
        </nav>
    </header>
)

export default Header;