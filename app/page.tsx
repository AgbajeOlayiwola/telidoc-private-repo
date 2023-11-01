import Layout from "@/component/Layout"
import LandingPage from "./LandingPage"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <Layout>
        <LandingPage />
      </Layout>
    </main>
  )
}
