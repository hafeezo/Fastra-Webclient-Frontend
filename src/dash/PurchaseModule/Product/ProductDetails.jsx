import "./ProductDetails.css";

export default function ProductDetails({ product, onClose }) {
  if (!product) return null;
  return (
    <div id="prodetails" className="prodet">
      <form className="prodet1">
        <div className="prodet2">
          <p style={{ fontSize: "20px" }}>Basic Information</p>
          <div className="prodet2a">
            <button type="button" className="prodet2but" onClick={onClose}>
              Cancel
            </button>
            <button className="prodet2btn">Edit</button>
          </div>
        </div>
        <div className="prodet3">
          <div className="prodet3a">
            <label>Product Name</label>
            <p className='prodet3b'>{product.name}</p>
          </div>
          <div className="prodet3a">
            <label>Unit of Measure</label>
            <p className='prodet3b'>{product.unt}</p>
          </div>
          <div className="prodet3a">
            <label>Type</label>
            <p className='prodet3b'>{product.type}</p>
          </div>
          <div className="prodet3a">
            <label>Category</label>
            <p className='prodet3b'>{product.category}</p>
          </div>
          <div className="prodet3a">
            <label>Company</label>
            <p className='prodet3b'>{product.company}</p>
          </div>
        </div>
        <div>
        <div className="prodet1a2">
              <p style={{ fontSize: "20px" }}>Pricing</p>
            </div>
          <div className="prodet4">
            <div className="prodet4a">
              <label>Selling Price</label>
              <p className="prodet4b">{product.sp}</p>
            </div>
            <div className="prodet4a">
              <label>Cost Price</label>
              <p className="prodet4b">{product.cp}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
