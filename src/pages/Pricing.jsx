// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./pricing.module.css";

export default function Product() {
  return (
    <main className={styles.pricing}>
      <PageNav />

      <section>
        <div>
          <h2>
            BRICONEX
            <br />
          </h2>
          <p>
            phone : <span>+212666727531</span>
          </p>
          <p>
            Email: <span>briconex@gmail.com</span>
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
