import Link from "next/Link";
import Image from "next/image";


const url = "https://back-end-ifms.vercel.app/campi";
export default async function Home() {

  const resposta = await fetch(url, {
    cache: "no-cache",
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  }); 
  const campi = await resposta.json();


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
