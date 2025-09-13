'use client'
 
import { useRouter } from 'next/navigation'

import imageArray from "../../_lib/ImageData.js"
import Image from 'next/image'
import { notFound } from 'next/navigation'
export default function ImageDetails({ params }) {
    const router = useRouter()
    let { id } = params 
    let findImage = imageArray.find(image => image.id === id)
    if (!findImage) notFound()
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

                    <button
                    style={
                        {
                            padding: '10px 20px',
                            fontSize: '16px',
                            marginTop: '20px',
                            cursor: 'pointer',
                            backgroundColor: '#0070f3',
                            color: 'white',
                            border: 'none',
                            marginBottom: '20px',
                            borderRadius: '5px',
                        }
                    }
                    onClick={() => router.push('/photo-feed-one')}>Back</button>
            </div>
        </div>
    )

}   