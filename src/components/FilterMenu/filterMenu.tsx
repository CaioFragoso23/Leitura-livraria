"use client";
import { FilterContainer, HomeContainer, Filter, FilterList } from "./styles";
export default function FilterMenu() {
  return (
    <FilterContainer>
      <Filter>
        <a>
          Livros
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Papelaria
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Presentes
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Informática
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Jogos e Boardgames
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Ofertas Especiais
          <FilterList>
            <li>Livro 1</li>
            <li>Livro 2</li>
          </FilterList>
        </a>
        <a>
          Promoções
        </a>
        <a>
          Pré Venda
        </a>
        <a>
          Listas Escolares
        </a>
      

     
      </Filter>
    </FilterContainer>
  );
}
