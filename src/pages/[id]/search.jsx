import { useRouter } from "next/router"
import Link from "next/link"

// com [] consigo capturar o valor passado na url
// exemplo: http://localhost:3000/<parametro>/search

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