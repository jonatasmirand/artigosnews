import Title from "./components/Title";
import Grid from "./components/Grid";
import {artigos} from '@/app/types/artigos'
import RainbowEffect from "./artigos/[id]/RainbowEffect";

export default function Home() {
  return (
  <>
  <RainbowEffect/>
  <Title title="ArtigosNews"/>
  <Grid artigos={artigos}/>
  </>
  );
}