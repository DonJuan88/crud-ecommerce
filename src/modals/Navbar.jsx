

function Navbar ()  {

    return (
      <>
        <nav className="bg-purple-700 ">
          <div className="">
            <div className="flex justify-between h-16 px-10 shadow items-center">
              <div className="flex items-center space-x-8 text-white ">
                <h1 className="text-purple-600 text-xl lg:text-2xl font-bold cursor-pointer bg-white">
                  Logo
                </h1>
                <div className="hidden md:flex justify-around space-x-4">
                  <a
                    href="/"
                    className="rounded-sm hover:bg-white hover:text-purple-600"
                  >
                    Home
                  </a>
                  <a
                    href="/shop"
                    className="rounded-sm hover:bg-white hover:text-purple-600"
                  >
                    Shop
                  </a>
                  <a
                    href="/about"
                    className="rounded-sm hover:bg-white hover:text-purple-600"
                  >
                    About
                  </a>
                  <a
                    href="/contact"
                    className="rounded-sm hover:bg-white hover:text-purple-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <a
                  href="/cart"
                  className="px-4 py-2 rounded  text-sm bg-transparent text-white "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </a>
                <a
                  href="/login"
                  className="px-4 py-2 rounded text-gray-800 text-sm bg-white"
                >
                  LOGIN
                </a>
                {/*   <a
                  href="/signup"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-purple-300 text-sm"
                >
                  SIGNUP
                </a> */}
              </div>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;

