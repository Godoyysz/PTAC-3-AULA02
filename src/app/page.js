import Link from "next/Link";
import Image from "next/image";

export default async function Home() {
  const resposta = await fetch("https://back-end-ifms.vercel.app/campi", {next: {rivalidate: 1}}); 
  const campi = await resposta.json();
  
  <Link href="https://ead.ifms.edu.br">
    <Image width={323} height={100} src={"https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"}/>
    </Link>

  return (
    <main>
      <h1>Home</h1>
      {
        campi.map( (campus)=>
          <div>
            <p>{campus.nome_campus}</p>
            <img className="imgstyle" src={campus.image_url}/>
          </div>
        )
      }
    </main>
  )
}
