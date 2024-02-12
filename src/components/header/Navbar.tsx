import storeFont from '../../assets/images/Storefront.png'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <nav className=" bg-[#2B2B2B] fixed w-full z-20 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={storeFont} className="h-8" alt="Flowbite Logo" />
            <span className="tracking-widest gap:10px font-semibold whitespace-nowrap dark text-white">NFT Marketplace</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="mt-1 text-white bg-[#A259FF] font-medium rounded-lg text-sm px-4 py-2 text-center ">sign Up</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="pl-96 items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="tracking-widest space-x-12 ul flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white md:p-0 " aria-current="page">Marketplace</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white md:p-0 ">Rankings</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white md:p-0">Connect a Wallet</a>
              </li>
              <li>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
