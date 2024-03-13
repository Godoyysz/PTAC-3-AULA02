import Link from "next/Link";
import Image from "next/image";

export default async function Home() {
  const resposta = await fetch("http://localhost:3000/api", {next: {rivalidate: 1}}); 
  const campus = await resposta.json();
  
  <Link href="https://ead.ifms.edu.br"><Image width={323}
             height={100} 
            src={"https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"}/></Link>

  return (
    <main>
      <h1>Home</h1>
      {
        campus.map( (campi)=>
          <div>
            <p>{campi.nome_campi}</p>
            <img className="imgstyle" src={campi.imagem_url}/>
          </div>
        )
      }
    </main>
  )
}
