'use client'

import { useState } from 'react';
import imageArray from "../../../_lib/ImageData.js"
import Image from 'next/image'
import Modal from "../../../../components/Modal.js"
import { notFound } from 'next/navigation'

export default function ImageDetail({ params }) {
    const [isOpen, setIsOpen] = useState(true);
    const { id } = params;
    const findImage = imageArray.find(image => image.id.toString() === id.toString());

    if (!findImage) notFound();

    const onClose = () => setIsOpen(false);


    return (
        <div>
            {/* Button to reopen modal */}
        

            {/* Modal itself */}
            <Modal isOpen={isOpen} onClose={onClose} title="Image Detail">
                
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
                        <h1>Intercepting Image Name: {findImage.name}</h1>
                        <Image src={findImage.src} alt={findImage.name} width={300} height={300} />
                        <h3>Image photographer: {findImage.photographer}</h3>
                        <h4>Image location: {findImage.location}</h4>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
