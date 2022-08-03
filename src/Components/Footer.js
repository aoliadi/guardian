import footer from "../css/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footer.container}>
        <span className="">&copy; aoliadi, {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}

export default Footer;
