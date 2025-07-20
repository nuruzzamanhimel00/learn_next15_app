'use client'

import {ImageSlider} from "@/components/ImageSlider"


// import {serverSideFunction} from "@/utils/server-utils"
export default function ClientRoutePage(){

    // const result = serverSideFunction();

    return (
        <>
        <h1>Client Route Page. result: </h1>
        <ImageSlider />
        </>
    )
}