import "./prod.css";
import SearchIcon from "../../../image/search.svg";
import { FaBars, FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import imag from "../../../image/vendor2.svg";

export default function Prod() {
  return (
    <div className="pro" id="prod">
      <div className="pro1">
        <div className="pro2">
          <div className="pro3">
            <div className="pro3a">
              <button className="pro3abtn">New Product</button>
              <div className="prosash">
                <label
                  htmlFor="searchInput"
                  className="pros1"
                  //   onClick={handleSearch}
                >
                  <img src={SearchIcon} alt="Search" className="pros2" />
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="Search..."
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    className="pros3"
                  />
                </label>
              </div>
            </div>
            <div className="pro3b">
              <p className="pro3bpage">1-2 of 2</p>
              <div className="pro3bnav">
                <FaCaretLeft className="lr" />
                <div className="stroke"></div>
                <FaCaretRight className="lr" />
              </div>
              <div className="pro3bview">
                <IoGrid
                //   className={`grid ${viewMode === "grid" ? "active" : ""}`}
                //   onClick={() => toggleViewMode("grid")}
                />
                <div className="stroke"></div>
                <FaBars
                //   className={`grid ${viewMode === "list" ? "active" : ""}`}
                //   onClick={() => toggleViewMode("list")}
                />
              </div>
            </div>
          </div>
          <div className="pro4">
            <div className="pro4gv">
              <div className="promage">
                <img src={imag} alt='product' className='cirmage'/>
              </div>
              <p className='proname'>productName</p>
              <p className='promount'>amount</p>
              <p className='protype'>type</p>
              <p className='procat'>category</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
