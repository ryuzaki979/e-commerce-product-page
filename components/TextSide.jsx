import React, {useState,useContext} from "react"
import Image from "next/image"
import Cart from '../images/icon-cart.svg'
import Minus from '../images/icon-minus.svg'
import Plus from '../images/icon-plus.svg'
import Confirmation from "./Confirmation"
import { Context } from "./Context"
const price = 125
let cartData = []
    const TextSide = () => {
        const {value,setValue} = useContext(Context)
        
        const [quantity,setQuantity] = useState(1)
        if(quantity<1){
            quantity = 1
        }
        
        function handleSubmit (e) {
            e.preventDefault()
        }
        const [showConfirmation,setShowConfirmation] = useState(false)
        return (
            <div className="text-side w-full">
                <span className="text-sm color-orange font-bold">
                    SNEAKER COMPANY
                </span>
                <h1 className="text-2xl mb-5 title mt-5 leading-10 font-bold">
                    Fall Limited Edition Sneakers
                </h1>
                <p className="mt-5 mb-5 text text-slate-400">
                    These low-profile sneakers are  your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div>
                    <span className="text-3xl">
                        $125.00
                    </span>
                    <span className="ml-10">
                        50%
                    </span>
                </div>
                <div>
                    <span className="text-3s mt-5 disable-text">
                        $250
                    </span>
                </div>
                <div className="flex gap-2 mt-10 form-container w-full">
                {showConfirmation && <Confirmation/>}

                    <form action="#" onSubmit={()=>handleSubmit}>
                        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full">
                            <div className="flex input-box rounded-lg w-full bg-slate-200 p-3 md:w-1/3">
                                <button type="button" onClick={(e)=>setQuantity(parseInt(quantity)- 1)}>
                                    <Image src={Minus}></Image>
                                </button >
                                    <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                                <button type="button" onClick={(e)=>setQuantity(parseInt(quantity) + 1)}>
                                    <Image src={Plus}></Image>
                                </button>
                            </div>
                            <button type="submit" className="rounded-xl text-white font-bold bg-orange p-3 w-full block md:w-2/3 flex items-center gap-5 justify-center" onClick= {(e)=> {
                                e.preventDefault()
                    
                                setShowConfirmation(true)
                                setTimeout(()=>{setShowConfirmation(false)},1500)
                                setValue({quantity,price})
                            }} onSubmit={()=>handleSubmit}>
                                <Image src={Cart} className="mr-10"></Image>
                                Add to Cart
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
}

export default TextSide

