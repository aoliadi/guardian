import footer from "../css/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footer.container}>
        &copy; aoliadi, {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default Footer;
