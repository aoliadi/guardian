import navbar from "../css/navbar.module.css";

function Navbar() {
  return (
    <nav className={navbar.container}>
      <ul className={navbar.list_container}>
        <li className={navbar.list_logo}>
          <a href="" className={navbar.link}>
            N.
          </a>
        </li>
        <li className={navbar.list_item}>
          <a href="" className={navbar.link}>
            Business
          </a>
        </li>
        <li className={navbar.list_item}>
          <a href="" className={navbar.link}>
            Lifestyle
          </a>
        </li>
        <li className={navbar.list_item}>
          <a href="" className={navbar.link}>
            Sports
          </a>
        </li>
        <li className={navbar.list_item}>
          <a href="" className={navbar.link}>
            Politics
          </a>
        </li>
        {/* <li className={navbar.list_item}>
          <svg
            onClick={() => {
              console.log("search!");
            }}
            className={navbar.search_icon}
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">search</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g className={navbar.search_path} fill="none" stroke="#848F91">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx={8} cy={8} r={7} />
            </g>
          </svg>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
