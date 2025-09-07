import { Slides } from "./component/Slides";
import styles from "./globals.css";

export default function Home() {

  return (
    <div className={styles.page}>
      <main className="main-home bg-dark text-white">
        <Slides></Slides>
      </main>
    </div>
  );
}