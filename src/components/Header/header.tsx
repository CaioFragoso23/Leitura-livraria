"use client";
import Image from "next/image";
import { IoPerson, IoCart, IoHeart, IoSearch } from "react-icons/io5";
import { LeituraHeader, LeituraSearch, LeituraNav } from "./styles";

export default function Header() {
  return (
    <LeituraHeader>
        <Image src={"/LeituraLogo.svg"} width={180} height={30} alt="Leitura" />
        <LeituraSearch>
          <input
            type="text"
            name=""
            id=""
            placeholder="Pesquisar por título, autor, editora ou código de barras"
          />
          <button>
            <IoSearch color="white" />
          </button>
        </LeituraSearch>
        <LeituraNav>
          <IoPerson color="#00569D" size="30" />
          <IoHeart color="#00569D" size="30" />
          <IoCart color="#00569D" size="30" />
        </LeituraNav>
      </LeituraHeader>
  );
}
