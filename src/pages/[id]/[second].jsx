import { useRouter } from "next/router"
import Link from "next/link"


//exemplo de como criar rota com dois valores dinamicos 
//exemplo: http://localhost:3000/<parametro>/<parametro>

export default function second() {
  //valor query e sempre subescrito e não concatenado
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