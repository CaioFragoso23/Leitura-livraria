import Header from "@/components/Header/header";
import FilterMenu from "@/components/FilterMenu/filterMenu"
import { HomeContainer } from "@/components/FilterMenu/styles";
export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <FilterMenu />
    </HomeContainer>
  );
}
