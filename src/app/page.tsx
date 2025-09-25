import Title from "./components/Title";
import Grid from "./components/Grid";
import {artigos} from '@/app/types/artigos'

export default function Home() {
  return (
  <>
  <Title title="ArtigosNews"/>
  <Grid artigos={artigos}/>
  </>
  );
}