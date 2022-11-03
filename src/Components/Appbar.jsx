import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div id="container">
      <Link to='./' id='link'>Home</Link>
      <Link to='./Student' id='link'>Student Details</Link>
      <Link to='./Contact' id='link'>Contact Us</Link>
    </div>
  );
}

export default Navbar;