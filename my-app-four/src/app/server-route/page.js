import {serverSideFunction} from "@/utils/server-utils"
import {ImageSlider} from "@/components/ImageSlider"

export default function ServerRoutePage(){
    const result = serverSideFunction();
    return (
        <>
        <h1>Server Route Page. result: {result}</h1>
        <ImageSlider />
        </>
    )
}