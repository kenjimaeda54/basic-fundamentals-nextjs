## Basico fundamentos
Repo com o básico dos fundamentos de NextJs


## Feature
- Aprendi como usar rotas dinamicas e navegar entre elas
- Exemplo abaixo como capturar rotas dinamicas atraves dos colchetes exemplos  de url **/<parametro>/search ou   /<parametro>/<parametro>  **
- O que esta dentr dos concheltes e dinamico e substitudo pela url

```javascript

//caminho 

 |
 | 
 | [id]
      |
      | search

import { useRouter } from "next/router"
import Link from "next/link"
 

export default function Search() {
  const id = useRouter().query.id



  return (
    <div>
      <h1>Ola search {id}</h1>
      <Link href="/">
        voltar
      </Link>
    </div>
  )

}


//===========

//caminho 

 |
 | 
 | [id]
      |
      | [second]
 

export default function second() {
  const id = useRouter().query.id
  const second = useRouter().query.second

  return (
    <div>
      <h1>second {id} / {second}</h1>
      <Link href="/">
        voltar
      </Link>
    </div>
  )

}

```

##
- Tambem pratiquei como pegar parametro por query, exemplo de url ** /search?name=Ricardo&old=20 **




```javascript


//===========

//caminho 

 |
 | 
 | search
      |
      | index.jsx



import { useRouter } from "next/router"
import Link from "next/link"
 

export default function search() {
  const params = useRouter().query

  return (
    <div>
      <h1>search {params.name} / {params.old}</h1>
      <Link href="/">
        voltar
      </Link>
    </div>
  )

}



```


##
- Abaixo exemplo de navegar entre rotas usando o Link




``` javascript

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



```


