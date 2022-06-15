import styles from "../css/article.module.css";
import general from "../css/general.module.css";
import News from "./News";

function Main() {
  return (
    <main className={general.container}>
      <News />
    </main>
  );
}

export default Main;
