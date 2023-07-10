import React from "react";
import OfferOneModal from "./OfferOneModal";
import OfferTwoModal from "./OfferTwoModal";
import OfferThreeModal from "./OfferThreeModal";
import { Link } from "react-router-dom";

const OfferPackage = () => {
  return (
    <section className="py-20 text-gray-800 px-5">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracki uppercase text-blue-600">Pricing</span>
          <h2 className="text-4xl font-bold lg:text-5xl">Plans and Offers</h2>
        </div>

        <div className="flex flex-wrap items-stretch -mx-4">
          <form className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded shadow-lg sm:p-8 bg-gray-100">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" className="w-7" value={5} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" value={4000} className="w-32" disabled />
                  TK
                </span>
              </div>
              <p className="mt-3 leadi text-gray-600">💥Flat Discount Offer! Buy 5 tickets to get Discount on each ticket up to 1000TK.</p>
              <ul className="flex-1 mb-6 text-gray-600">
                <li className="text-xl text-black font-medium">Destinations:</li>
                <li className="">
                  • <input type="text" value="Dhaka to Cox's Bazar" disabled />
                </li>
                <li className="">
                  • <input type="text" value="Dhaka to Chittagong" disabled />
                </li>
                <li className="">
                  • <input type="text" value="Dhaka to Sreemongol" disabled />
                </li>
                <li className="">
                  • <input type="text" value="Dhaka to Sylhet" disabled />
                </li>
                <li className="">
                  • <input type="text" value="Dhaka to Khagrachari" disabled />
                </li>
                <li className="">
                  • <input type="text" value="Dhaka to Khulna" disabled />
                </li>
              </ul>
              <OfferOneModal />
            </div>
          </form>
          {/* 2 */}
          <form className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded shadow-lg sm:p-8 bg-blue-400 text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" name="offerTwoTicket" className="w-11 bg-blue-400" value={10} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" name="offerTwoTicketPrice" value={8000} className="w-32 bg-blue-400" disabled />
                  TK
                </span>
              </div>
              <p className="mt-3 leadi text-white">💥Flat Discount Offer! Buy 10 tickets to get Discount on each ticket up to 2000TK.</p>
              <ul className="flex-1 mb-6 text-gray-600">
                <li className="text-xl text-white font-medium">Destinations:</li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationOne" value="Dhaka to Cox's Bazar" className="bg-blue-400" disabled />
                </li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationTwo" value="Dhaka to Chittagong" className="bg-blue-400" disabled />
                </li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationThree" value="Dhaka to Sreemongol" className="bg-blue-400" disabled />
                </li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationFour" value="Dhaka to Sylhet" className="bg-blue-400" disabled />
                </li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationFive" value="Dhaka to Khagrachari" className="bg-blue-400" disabled />
                </li>
                <li className="text-white">
                  • <input type="text" name="offerTwoDestinationSix" value="Dhaka to Khulna" className="bg-blue-400" disabled />
                </li>
              </ul>
              <OfferTwoModal />
            </div>
          </form>
          {/* 3 */}
          <form className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded shadow-lg sm:p-8 bg-gray-100">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">
                  <input type="number" name="offerThreeTicket" className="w-11" value={20} disabled />
                  Tickets
                </h4>
                <span className="text-5xl font-bold">
                  Only <input type="number" name="offerThreeTicketPrice" value={15000} className="w-40" disabled />
                  TK
                </span>
              </div>
              <p className="mt-3 leadi text-gray-600">💥Flat Discount Offer! Buy 20 tickets to get Discount on each ticket up to 5000Tk.</p>
              <ul className="flex-1 mb-6 text-gray-600">
                <li className="">
                  • <input type="text" name="offerThreeDestinationOne" value="Dhaka to Cox's Bazar" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationTwo" value="Dhaka to Chittagong" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationThree" value="Dhaka to Sreemongol" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationFour" value="Dhaka to Sylhet" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationFive" value="Dhaka to Khagrachari" disabled />
                </li>
                <li className="">
                  • <input type="text" name="offerThreeDestinationSix" value="Dhaka to Khulna" disabled />
                </li>
              </ul>
              <OfferThreeModal />
            </div>
          </form>
        </div>
        <p className="text-2xl mt-5 text-center font-medium">
          Already a subscribed user? Then click <Link to="/myprofile" className="text-blue-600">here</Link>
        </p>
      </div>
    </section>
  );
};

export default OfferPackage;
