// import general from "../css/general.module.css";
import article from "../css/article.module.css";
import news from "../css/news.module.css";

function News() {
  return (
    <div className={article.wrapper}>
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>
            <a href="" className={article.title_link}>
              Test Category
            </a>
          </h1>
        </header>
        <div className={article.cards}>
          <section className={article.one_card}>
            <article className={news.only}>
              <small className={news.author}>
                by author name <span className=""></span> timestamp
              </small>
              {/* <div className={news.content__container}> */}
              <h1 className={news.title}>
                <a href="" className={news.link}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </a>
              </h1>
              {/* </div> */}
            </article>
          </section>
          <section className={article.four_cards}>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
          </section>
        </div>
      </div>
      <div className={article.wrapper}>
        <header className={article.header}>
          <h1 className={article.title}>
            <a href="" className={article.title_link}>
              Test Category
            </a>
          </h1>
        </header>
        <div className={article.cards}>
          <section className={article.one_card}>
            <article className={news.only}>
              <small className={news.author}>
                by author name <span className=""></span> timestamp
              </small>
              {/* <div className={news.content__container}> */}
              <h1 className={news.title}>
                <a href="" className={news.link}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </a>
              </h1>
              {/* </div> */}
            </article>
          </section>
          <section className={article.three_cards}>
            <article className={news.vertical}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
            <article className={news.horizontal}>
              <div className={news.img__container}>
                <a href="" className=""></a>
              </div>
              <div className={news.content__container}>
                <h4 className={news.title}>
                  <a href="" className={news.link}>
                    Lorem ipsum dolor sit amet consectetur.
                  </a>
                </h4>
                <small className={news.timestamp}>3 mins ago</small>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

export default News;
