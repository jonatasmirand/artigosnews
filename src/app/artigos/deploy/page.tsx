import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { artigosDeploy } from "@/app/types/deployArtigos";
import RainbowEffect from "../[id]/RainbowEffect";



const ExplicandoDeploy = () =>{

    return(
        <>
        <RainbowEffect/>
        <Title title=" Deploy"/>
        <Grid artigos={artigosDeploy}/>
        </>
    )
}

export default ExplicandoDeploy;    