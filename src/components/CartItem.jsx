const CartItem = ({name}) => {
  return (
    <div >
      <ul>
        <li className="mb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/img/peproni.jpg" alt="pizza" />
              <span className="font-bold ml-4 w-48">{name}</span>
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                <strong>-</strong>
              </button>
              <b className="px-4">2</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                <strong>+</strong>
              </button>
            </div>
            <div>₹ 500</div>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItem;
