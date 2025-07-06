import imageArray from "../../_lib/ImageData.js"
import Image from 'next/image'
export default async function ImageDetail({ params }) {
    let { id } = await params 
    let findImage = imageArray.find(image => image.id === id)
    if(!findImage) notFound()
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '60%',
                textAlign: 'center'
            }}>
                <h1>Image Name: {findImage.name}</h1>
                    <Image src={findImage.src} alt={findImage.name} width={500} height={500} />
                    <h3>Image photographer: {findImage.photographer} </h3>
                    <h4>Image location: {findImage.location} </h4>
            </div>
        </div>
    )
}