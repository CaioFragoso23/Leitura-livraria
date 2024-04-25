"use client";

import Image from "next/image";
import { IoHeartOutline, IoCart } from "react-icons/io5";
import {
  BookCardContainer,
  BookCardTitle,
  BookCardDescription,
  BookCardAddTo,
  BookCardImage,
  BookCardSummary,
} from "./styles";

export default function BookCard() {
  return (
    <BookCardContainer>
      <BookCardImage>
        <Image
          src={"/livroCard.svg"}
          alt={"Livro Tal"}
          width={200}
          height={200}
          style={{
            zIndex: 0,
            objectFit: "fill",
          }}
        ></Image>
      </BookCardImage>
      <BookCardTitle>
        <p>A Biblioteca da Meia-Noite</p>
      </BookCardTitle>
      <BookCardDescription>
        <h2>R$00,00</h2>
        <div>
          <p>Vendido e entregue por</p>
          <b>leitura.com</b>
        </div>
      </BookCardDescription>
      <BookCardAddTo>
        <button>
          <p>
            <IoCart color="#fff" height={15} />
            Adicionar ao carrinho
          </p>
        </button>
        <button>
          <IoHeartOutline color="#00569D" height={15} />
        </button>
      </BookCardAddTo>
    </BookCardContainer>
  );
}
