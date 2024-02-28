import Link from "next/Link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
    return( 
        <header className={styles.cabecalho}>
            <Image width={100}
             height={100} 
            src={"http://www.ifms.edu.br/marcaifms.png"}/>

            <h1>Menu</h1>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="registro">
                        <li>Registrar</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}