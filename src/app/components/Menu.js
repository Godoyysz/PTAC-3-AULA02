import Link from "next/Link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
    return( 
        <header className={styles.cabecalho}>

            <Link href="https://ead.ifms.edu.br"><Image width={323}
             height={100} 
            src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}/></Link>

            <h1>Menu</h1>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="registro">
                        <li>Registrar</li>
                    </Link>
                    <Link href="localizacao">
                        <li>Localização</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}