import React, {useState} from 'react'
import Image from 'next/image'
import Close from '../images/icon-close.svg'
import Next from '../images/icon-next.svg'
import Prev from '../images/icon-previous.svg'
const ShowBigImage = ({images,setModal}) => {
    const [index,SetIndex] = useState(0)
    if(index>images.length-1){
        index = 0
    }
    else if(index<0){
        index = images.length-1
    }
    return (
        <div className="w-full h-full big-image pr-10 pl-10">
            <div className="big-image-case">
                <button className="close-button">
                    <Image src={Close}  onClick={()=>setModal(false)} className="close-icon"></Image>
                </button>
                <div className="flex">
                    <button onClick={()=>SetIndex(index-1)}>
                        <Image src={Prev}></Image>
                    </button>
                    <Image src= {images[index]}  className="rounded-2xl "  width={600} height={450} ></Image>
                    <button onClick={()=>SetIndex(index+1)}>
                        <Image src={Next}></Image>
                    </button>
                </div>
                <div className="flex gap-5 mt-10  image-indicators justify-center">
                {images.map((img,inx) => (
                        <div>
                            <Image  data-key={inx} width={88} height={88} data-src= {img} src={img} onClick={
                                (e)=>{
                            SetIndex(e.currentTarget.dataset.key)
                                }
                            
                            } className={`rounded-2xl cursor-pointer ${index!==inx ? "" : "active"}`}></Image>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowBigImage
