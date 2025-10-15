const Header = () => {
    return (
        <>
            <header className="bg-cf-dark-red w-full">
                <div className="container mx-auto px-4 flex items-center justify-between ">
                    <img className="my-4 h-16"
                         src="https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png"
                         alt="coding factory logo"
                    />
                    <nav className="flex gap-4 text-white text-xl font-bold ">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;

