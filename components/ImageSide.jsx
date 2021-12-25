import Image from "next/image"
import React, {useState} from "react";
import ShowBigImage from "./ShowBigImage";
const images = [
    "https://i.ibb.co/vsWKQDS/image-product-1.jpg",
    "https://i.ibb.co/5Gww4yM/image-product-2.jpg",
    "https://i.ibb.co/YfpdHYq/image-product-3.jpg",
    "https://i.ibb.co/H2Vsp93/image-product-4.jpg"
]
const ImageSide = () => {
    const [IsModal,SetIsModal] = useState(false)
    const [image,setImage] = useState(images[0])
    function setModal (option) {
        SetIsModal(option)
    }
    
    return (
        <div>
            {IsModal && <ShowBigImage images ={images} setModal ={setModal} ></ShowBigImage>}
            <div  >
                <Image src = {image} className="rounded-2xl " width={445} height={445} onClick={()=> SetIsModal(true)}/>
            </div>
            <div className="flex gap-5 mt-10 image-indicators">
                {images.map((img,idx) => (
                        <div key={idx}>
                            <Image className="rounded-2xl cursor-pointer" width={88} height={88} data-src= {img} src={img} onClick={(e)=>setImage(e.currentTarget.dataset.src)}></Image>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ImageSide
