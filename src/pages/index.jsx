import React from "react";
import Link from "next/link";

export default function route() {

  return (
    <li>
      <Link href="/search?name=Ricardo&old=10" >
        <ul>Ir a rota search pega a query</ul>
      </Link>
      <Link href="/34343/search" >
        <ul>Ir a rota que pega o id e busca</ul>
      </Link>
      <Link href="/34343/joaao" >
        <ul>Ir a rota que pega o id e segundo parametro</ul>
      </Link>
    </li>
  )

}