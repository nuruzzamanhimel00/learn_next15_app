import Image from 'next/image'
import Image1 from "./photos/1.jpg"
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
            <div>
                 <Image src={Image1} alt="" style={
                    {
                        width:'300px;',
                        height:'300px;'
                    }
                 } />
            </div>
            
        </div>
        </>
    )
}