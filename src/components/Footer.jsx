import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      <p>
        Built with ❤️ using React + Django
      </p>
    </footer>
  );
}

export default Footer;
