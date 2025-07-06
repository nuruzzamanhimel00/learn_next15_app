import Image from 'next/image'
import Image1 from "./photos/1.jpg"
import imageArray from "../_lib/ImageData"
import Link from 'next/link'
export default function PhotoFood(){
    return (
        <>
        <h1>Gallery Image</h1>
        <div
        style={
            {
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                gap:'5px',
                justifyContent:'center',
                alignItems:'center',
                paddingTop:'10px'

            }
        }
        >
            {
                imageArray.map((item, index) => (
                    <Link href={`/photo-feed/${item.id}`} key={index}>
                        <div >
                                <Image src={item.src} alt="" style={
                                    {
                                        width:'300px',
                                        height:'300px'
                                    }
                                } />
                            </div>
                    </Link>
                ))
            }
        
            
        </div>
        </>
    )
}