import Image from 'next/image'
import imageArray from "../_lib/ImageData"
import Link from 'next/link'

export default function PageFeedOne(){
  return (
    <> 
        <h1>Gallery List:-</h1>
        <div  style={
                {
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    gap:'5px',
                    justifyContent:'center',
                    alignItems:'center',
                    paddingTop:'10px'

                }
            }>
            {imageArray.map((image, index) => (
                <Link key={index} href={`/photo-feed-one/${index}`}>
                <Image src={image.src} alt={image.alt} width={300} height={300} />
                </Link>
            ))}
        </div>
    </>
  )
}