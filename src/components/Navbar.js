const Navbar = ({businessName, logo}) => {
    return ( 
        <nav>
        <div className="logo"><p>Logo</p></div>

        <div className="business-name">{businessName}</div>

        <div className="webshop-bx">
            <i className="fas fa-store"></i>
            <div>Web shop</div>
        </div>

    </nav>
     );
}
 
export default Navbar;