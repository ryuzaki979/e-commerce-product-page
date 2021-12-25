import Image from "next/image"
import Link from "next/link"
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import { Context } from "./Context"
import { useContext,useState } from "react"
import CartModal from "./CartModal"
import Hamburger from '../images/icon-menu.svg'
import Close from '../images/icon-close.svg'
const Navbar = () => {
    const {value,setValue} = useContext(Context)
    const [cartModal,setCartModal ]= useState(false)
    function closeModal () {
        setCartModal(false)
    }
    const [IsMenu,SetIsMenu] = useState(false)
    return (
    <>
        <header className="flex pl-10 pr-10  justify-between  items-center w-full pt-5 pb-5 md:pl-0 md:pr-0 h-65">
            <div className="flex  items-center  h-full basis-full">
                <button className="md:hidden block mr-5" onClick={()=> SetIsMenu(true)}>
                    <Image src={Hamburger} ></Image>
                </button>
                <h1 className=" text-2xl md:text-4xl font-bold cursor-pointer mr-10 mb-3">
                    <Link href="./">
                    sneakers
                    </Link>
                </h1>
                <nav className="basis-5/12 hidden md:block">
                    <ul className="flex  justify-between text-slate-400 gap-5">
                        <li className="hover:text-black">
                            <Link href="./collections">
                                Collections
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./men">
                                Men
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./women">
                                Women
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./about">
                                About
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                {IsMenu && <nav className="basis-5/12 fixed top-0 left-0 h-full z-50 w-2/3 md:relative bg-white md:hidden">
                    <button className="block md:hidden ml-10 mt-9 cursor-pointer" onClick={()=>SetIsMenu(false)}>
                        <Image src={Close}></Image>
                    </button>
                    <ul className="flex ml-10 md:ml-0 mt-16 md:mt-0 md:items-center flex-col md:flex-row justify-between text-slate-400 gap-5">
                        <li className="hover:text-black">
                            <Link href="./collections">
                                Collections
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./men">
                                Men
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./women">
                                Women
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./about">
                                About
                            </Link>
                        </li>
                        <li className="hover:text-black">
                            <Link href="./contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>}
            </div>
            <div className="flex justify-between items-center basis-32" >
                <div className="relative ml-2 button"
                    >
                        <button onClick={(e)=>{
                            setCartModal(true)
                        }}>
                            
                            <Image class="cursor-pointer " src={Cart}
                            
                            ></Image>
                        </button>
                    {cartModal && <CartModal  closeModal={closeModal}  data = {value}/>}
                    <span className="absolute rounded-full flex items-center justify-center bg-orange text-white -top-5 -right-5" style={{width:"25px",height:"25px"}}>
                        {value.quantity}
                    </span>
                </div>
                <Image src={Avatar} className="rounded-full cursor-pointer w-1/2 " width={50} height={50}></Image>
            </div>
        </header>
        <hr className="bg-slate-100" />
        </>
    )
}

export default Navbar
