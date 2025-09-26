
import Grid from "./components/Grid";
import Sobre from "./components/Sobre";
import {artigos} from '@/app/types/artigos'

export default function Home() {
  return (
  <>
  <Sobre/>
  <Grid artigos={artigos}/>
  </>
  );
}