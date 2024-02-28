import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer(){
    return(
        <header className={styles.ft}>
            
            <Image width={100}
             height={100} 
            src={"http://www.ifms.edu.br/marcaifms.png"}/>

            <h1>Footer</h1>
            <nav> </nav>
        </header>
    );
}