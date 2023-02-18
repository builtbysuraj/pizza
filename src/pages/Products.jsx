const Products = () => {
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        <div>
          <img src="/img/peproni.jpg" alt="pizza-products" />
          <div className="">
            <div>peproni</div>
            <div>small</div>
          </div>
          <div>
            <span>₹500</span>
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
