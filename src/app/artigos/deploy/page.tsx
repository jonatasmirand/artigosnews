import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import { artigosDeploy } from "@/app/types/deployArtigos";



const ExplicandoDeploy = () =>{

    return(
        <>
        <Title title=" Deploy"/>
        <Grid artigos={artigosDeploy}/>
        </>
    )
}

export default ExplicandoDeploy;    