import './App.css';
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";




function App() {
  return (
    <div className="App">
      <header>
       
        <div className="nav-logo border">
        <div className="logo"> </div>
        </div>
       
       
        <div className="nav-add border">
          <p className='add-first'>Deliver to</p>
          <div className='add-icon'>
          <IoLocationOutline />
          <p className='add-second'>India</p>
          </div>
          </div>
         
         
          <div className='nav-search'>
            <select className='search-select'>
              <option >All</option>
            </select>
            <input placeholder='Search Amazon' className='search-input'></input>
            <div className='search-icon'>
            <IoIosSearch />
            </div>
          </div>


        <div className='laun border'> 
        <select className='laun-select'>
        <option>EN</option>
        </select>
         </div>

        <div className='nav-signin border'>
          <p><span>Hello,Cyril</span></p>
          <p className='nav-second'>Accounts & lists</p>

        </div>

        <div className='nav-return border'>
          <p><span>Returns</span></p>
          <p className='nav-second'>& Orders</p>

        </div>

        <div className='nav-cart border'>
        <BsCart3 className='cart-icon' />
        <p className='cart-left'>Cart</p>
        </div>
        
        
         
      </header>
      <div className='panel'>
          <div className='panel-all border'>
          <FaBars/> All
          </div>
          <div className='panel-ops'> 
        <p className='border'>Fresh</p>
        <p className='border'>Amazon miniTV</p>
        <p className='border'>Sell</p>
        <p className='border'>Best Sellers</p>
        <p className='border'>Mobiles</p>
        <p className='border'>Today's Deals</p>
       </div> 
       <div className='panel-deal border'>
        <p>Shop deals i n Electronics</p>
       </div>
        </div>

        <div className='hero-section'></div>
        <div className='shop-section'>
          <div className='box1 box'>
            <div className='box-contant'>
            <h2>Deals Under ₹999</h2>
            <div className='box-img_1'></div>
            <p>See more</p>
            </div>
          </div>
          <div className='box2 box'><div className='box-contant'>
            <h2>Health&personal</h2>
            <div className='box-img_2'></div>
            <p>See more</p>
            </div></div>
          <div className='box3 box'><div className='box-contant'>
            <h2>Refresh your space</h2>
            <div className='box-img_3'></div>
            <p>See more</p>
            </div></div>
          <div className='box4 box'><div className='box-contant'>
            <h2>Smart phones</h2>
            <div className='box-img_4'></div>
            <p>See more</p>
            </div></div>
        </div>
        <div className='shop-section'>
          <div className='box1 box'>
            <div className='box-contant'>
            <h2>Top Deal</h2>
            <div className='box-img_5'></div>
            <p>See more</p>
            </div>
          </div>
          <div className='box2 box'><div className='box-contant'>
            <h2>For Pet Lovers</h2>
            <div className='box-img_6'></div>
            <p>See more</p>
            </div></div>
          <div className='box3 box'><div className='box-contant'>
            <h2>Health&personal</h2>
            <div className='box-img_7'></div>
            <p>See more</p>
            </div></div>
          <div className='box4 box'><div className='box-contant'>
            <h2>Shop deals in Fashion</h2>
            <div className='box-img_8'></div>
            <p>See more</p>
            </div></div>
        </div>


        <div className='hero-section_2'></div>


        <div className='shop-section'> 
        <div className='box4 box'><div className='box-contant'>
            <h2>No Cost EMI up to 18 months | TVs for every budget</h2>
            <div className='box-img_9'></div>
            <p>See more</p>
            </div></div>
            <div className='box4 box'><div className='box-contant'>
            <h2>Buy 2 Get 10% off, freebies & more offers</h2>
            <div className='box-img_10'></div>
            <p>See more</p>
            </div></div>
            <div className='box4 box'><div className='box-contant'>
            <h2>Up to 70% off | Refurbished Products</h2>
            <div className='box-img_11'></div>
            <p>See more</p>
            </div></div>
            <div className='box4 box'><div className='box-contant'>
            <h2>Shoes, jewellery & more | Starting ₹199</h2>
            <div className='box-img_12'></div>
            <p>See more</p>
            </div></div>
            </div> 

            <div className='hero-section_3'></div>

            <footer>
              <div className='footer-panel1'>
                Back to top
              </div>
              <div className='footer-panel2'>
                <ul>
              <p>Get to Know Us</p>
              <a>About Us</a>
              <a>Careers</a>
              <a>Press Releases</a>
              <a>Amazon Science</a>
              </ul>

              <ul>
              <p>Connect with Us</p>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Instagram</a>
             
              </ul>

              <ul>
              <p>Make Money with Us</p>
              <a>Sell on Amazon</a>
              <a>Protect and Build Your Brand</a>
              <a>Amazon Pay on Merchants</a>
              <a>Advertise Your Products</a>
              <a>Become an Affiliate</a>
              <a>Amazon Global Selling</a>
              </ul>

              <ul>
              <p>Let Us Help You</p>
              <a>COVID-19 and Amazon</a>
              <a>Your Account</a>
              <a>Returns Centre</a>
              <a>Help</a>
              </ul>
</div>
<div className='foot-panel3'>
                <div className='logo'></div>
              </div>
            </footer>
        
     
    </div>
  );
}

export default App;
