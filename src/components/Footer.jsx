function Footer() {
  return (
    <footer className="page-footer green darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/AnastasiiaKuropatkina/recipe-book-app" target='_blank' rel="noreferrer">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
