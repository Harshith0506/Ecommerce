import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-200 ">
      <div className="flex">
        <div>
          <div className="object-contain cursor-pointer mx-16 my-8 border-b-2 w-[250px] px-6">
            <img
              src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135331201.jpg"
              alt="zensar"
              className="h-36 w-48"
            />
          </div>
          <p className="w-[290px] px-4 mx-12 font-medium text-sm text-justify text-gray-500">
            ShopCart brings you the joy of discovery with a huge selection of
            original products from mobiles, fashion,home appliances, groceries,
            ...
          </p>
        </div>

        <div className=" mx-16 w-[160px] my-9">
          <h2 className="font-bold text-base text-[#050533]">Department</h2>
          <div>
            <ul className="text-xs font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              <li className="flex items-center">Fashion</li>
              <li className="flex items-center">Education product</li>
              <li className="flex items-center">Frozen food</li>
              <li className="flex items-center">Beverages</li>
              <li className="flex items-center">Organic Grocery</li>
              <li className="flex items-center">Office Supplies</li>
              <li className="flex items-center">Beauty Products</li>
              <li className="flex items-center">Books</li>
            </ul>
          </div>
        </div>

        <div className=" mx-5 my-9 w-[170px]">
          <h2 className="font-bold text-base text-[#050533]">About US</h2>
          <div>
            <ul className="text-xs font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              <li className="flex items-center">About shopcart</li>
              <li className="flex items-center">Careers</li>
              <li className="flex items-center">News & Blog</li>
              <li className="flex items-center">Help</li>
              <li className="flex items-center">Press Center</li>
              <li className="flex items-center">Shop by location</li>
              <li className="flex items-center">Ideas & guides</li>
            </ul>
          </div>
        </div>

        <div className=" mx-5 my-9 w-[180px]">
          <h2 className="font-bold text-base text-[#050533]">Services</h2>
          <div>
            <ul className="text-xs font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              <li className="flex items-center">Gift Card</li>
              <li className="flex items-center">Mobile App</li>
              <li className="flex items-center">Shipping and Delivery</li>
              <li className="flex items-center">Order Pickup</li>
            </ul>
          </div>
        </div>

        <div className=" mx-3 my-9 w-[160px]">
          <h2 className="font-bold text-base text-[#050533]">Help</h2>
          <div>
            <ul className="text-xs font-medium space-y-5 cursor-pointer -mx-2 font-poppins my-5">
              <li className="flex items-center">ShopCart help</li>
              <li className="flex items-center">Returns</li>
              <li className="flex items-center">Track orders</li>
              <li className="flex items-center">Contact us</li>
              <li className="flex items-center">Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
