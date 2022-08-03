import article from "../css/article.module.css";
import general from "../css/general.module.css";
import Test from "./Test";

function Main({ category, newsParams, isQuery }) {
  return (
    <main className={general.container}>
      <div className={article.wrapper}>
        {category.map((item, index) => {
          return (
            <Test
              key={item}
              newsParams={newsParams}
              category={item}
              isQuery={isQuery}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
