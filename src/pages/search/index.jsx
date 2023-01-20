import { useRouter } from "next/router"
import Link from "next/link"

//consigo também pegar querys na url
//exemplo: http://localhost:3000/search?name=Ricardo&old=45

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