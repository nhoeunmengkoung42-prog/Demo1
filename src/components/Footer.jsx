function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <p>ចុះឈ្មោះឥឡូវនេះ ដើម្បីចាប់ផ្តើម</p>

      <button className="buy">
        ចុះឈ្មោះ
      </button>

      <div className="hour">
        {isOpen ? <h1>Shop is open</h1> : <h1>Shop is closed</h1>}
      </div>
    </footer>
  );
}

export default Footer;