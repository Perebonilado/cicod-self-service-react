const Navbar = ({businessName, logoURL}) => {
    return ( 
        <nav>
        <div className="logo"><img src={logoURL} alt="logo" /></div>

        <div className="business-name">{businessName}</div>

        <div className="webshop-bx">
            <i className="fas fa-store"></i>
            <div>Web shop</div>
        </div>

    </nav>
     );
}
 
export default Navbar;