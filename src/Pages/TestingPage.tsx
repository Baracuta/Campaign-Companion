import NavButton from "../components/NavButton"
import TopBar from "../components/TopBar"
import { ASSETS_PATH } from "../constants/assets_path"
import StandardImageList from "../components/ImageList"
import { NpcImageData } from "../constants/npc_image_bank"
import { ItemImageData } from "../constants/item_image_bank"


//This is a page used for testing purposes.
function TestPage(){

    return(
         
        <div>
            <TopBar buttonNav="" name="Tater Tots" game="Huh" image={`${ASSETS_PATH}/Emblem 1 3.png`}/>

            <h1>Testing!</h1>
            <NavButton text="Go Home" destination="/"/>
            <NavButton text="Campaign List" destination="/campaign-form"/>

            
            <StandardImageList images={ItemImageData}/>
            <StandardImageList images={NpcImageData}/>
            
        </div>
    )
}

export default TestPage