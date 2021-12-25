import React from 'react'
import Image from 'next/image'
import CartImage from '../images/image-product-1-thumbnail.jpg'
import DeleteIcon from '../images/icon-delete.svg'
import CloseIcon from '../images/icon-close.svg'
import { Context } from "./Context"
import { useContext } from 'react'
const EmptyModal = () => {
    return (
        <div className="w-full h-full text-black flex items-center justify-center">
            There is no Item <br />
            in Your Cart
        </div>
    )
}

const ShowModalData = ({data}) => {
    const {value,setValue} = useContext(Context)
    return (
        <div className=" w-full text-black" >
            <header className="p-2 pt-3 pb-3 ">
                Cart
            </header>
            <hr/>
            <div className="  p-2 pt-3 pb-3 ">
                <div className="flex gap-5 justify-between items-center">
                   
                        <Image className="rounded-lg" src={CartImage} width={50} height={50}></Image>
                    
                    <div className="text-md ">
                        {`Fall Limited Edition Sneakers
                        $${value.price} x ${value.quantity} = $${value.price * value.quantity}`}
                    </div>
                    <button onClick= {( )=>{
                        setValue({quantity : 0})
                    }}>
                        <Image src={DeleteIcon} width ={25} height={35} className="object-cover"></Image>
                    </button>
                    
                </div>
                <button className="w-full bg-orange p-2 rounded-lg mt-10 text-white">
                    Checkout
                </button>
            </div>
        </div>
    )
}



const CartModal = ({data,closeModal}) => {
    return (
        <div>
            <div className=" modal-cart w-80 mh-48 h-48 p-2 rounded-lg absolute t-5 -left-10 z-50" style={{background: "#F6F8FD"}}>
                {data.quantity ===0 && <EmptyModal/>}
                {data.quantity >0 && <ShowModalData data = {data}></ShowModalData>}
                <button className="absolute top-0 right-0 p-2" onClick={()=>closeModal()}>
                        <Image src={CloseIcon}></Image>
                </button>
            </div>
        </div>
    )
}

export default CartModal
