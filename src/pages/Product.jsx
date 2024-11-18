import PageNav from "../components/PageNav";
import styles from "./Product.module.css";
export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div className="container">
          <h1>Nos produits</h1>
          <ul className={styles.Product}>
            <li>
              <h2>Produit 1</h2>
              <img src="table.jpg" alt="Produit 1" />
            </li>
            <li>
              <h2>Produit 2</h2>
              <img src="table-1.jpg" alt="Produit 2" />
            </li>
            <li>
              <h2>Produit 3</h2>
              <img src="table-2.jpg" alt="Produit 3" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
