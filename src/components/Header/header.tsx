"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoPerson, IoCart, IoHeart, IoSearch } from "react-icons/io5";
import {
  LeituraHeader,
  LeituraSearch,
  LeituraNav,
  Dropdown,
  AccountContent,
} from "./styles";

export default function Header() {
  const router = useRouter();
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
        <button onClick={() => router.push("/account")}>
          <IoPerson color="#00569D" size="30" />
          <Dropdown>
            <AccountContent>
              <a>Minha Conta</a>
              <a>Configurações</a>
              <a>Meus Pedidos</a>
              <a>Sair</a>
            </AccountContent>
          </Dropdown>
        </button>
        <button onClick={() => router.push("/wishlist")}>
          <IoHeart
            onClick={() => router.push("/wishlist")}
            color="#00569D"
            size="30"
          />
          <Dropdown>
            <p>Books</p>
          </Dropdown>
        </button>
        <button onClick={() => router.push("/cart")}>
          <IoCart
            onClick={() => router.push("/cart")}
            color="#00569D"
            size="30"
          />
          <Dropdown>
            <p>Cart</p>
          </Dropdown>
        </button>
      </LeituraNav>
    </LeituraHeader>
  );
}
