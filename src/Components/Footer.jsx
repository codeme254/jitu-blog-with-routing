function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
  
    let dayString;
    if (day === 1 || day === 21 || day === 31) {
      dayString = day + 'st';
    } else if (day === 2 || day === 22) {
      dayString = day + 'nd';
    } else if (day === 3 || day === 23) {
      dayString = day + 'rd';
    } else {
      dayString = day + 'th';
    }
  
    return dayString + ' ' + month + ' ' + year;
  }
  

const Footer = () => {
    const date = formatDate(new Date());
    return(
        <footer className="footer">
            <h2>&copy; 2023 Dennis Otwoma</h2>
            <p>{date}</p>
        </footer>
    )
}
export default Footer;