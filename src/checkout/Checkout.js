import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Checkout = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getDataFromLocalStorage = () => {
      // Retrieve the array from localStorage
      const storedData = localStorage.getItem("dataForComp2");

      if (storedData) {
        const dataArray = JSON.parse(storedData);

        const retrievedData1 = dataArray[0];
        const retrievedData2 = dataArray[1];

        setData1(retrievedData1);
        setData2(retrievedData2);
      }
    };

    getDataFromLocalStorage();
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle the selection of a radio button
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    country: "",
    house: "",
    apartmant: "",
    suburb: "",
    state: "",
    postcode: "",
    number: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    sendEmail(event); // Call sendEmail function passing the event
    navigate("/thnk");
  };

  const [shippingCost, setShippingCost] = useState("");

  const handleChange2 = (event) => {
    const selectedCost = event.target.value;
    const costAsNumber = parseFloat(selectedCost); // Convert to float (decimal number)

    setShippingCost(costAsNumber);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    console.log("Selected shipping cost:", shippingCost);
    // Additional logic for handling form submission
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const templateParams = Object.fromEntries(formData.entries());

    console.log("Template Params:", templateParams);

    emailjs
      .sendForm(
        "service_jqm9fjb",
        "template_m5ngaej",
        form.current,
        "yg2K7q36ASuFRqbXt",
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="hero mt-2 ">
        <img
          className="object-cover w-full"
          src="https://i.ibb.co/wszrkB7/11.jpg"
          alt=""
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-extrabold text-white">
              Checkout
            </h1>
            <div className="text-sm breadcrumbs text-white">
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="divider bg-[#689311]"></div>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="container mx-auto md:grid grid-cols-12 mt-24 gap-10 "
      >
        <div className="col-span-2"></div>
        <div className="col-span-4">
          <p className="text-4xl font-bold mb-5 text-left ">Billing Details</p>
          <div className="md:flex gap-4">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">
                  First name <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="First name "
                value={formData.firstname}
                onChange={handleChange}
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Last name <span className="text-red-500">*</span>{" "}
                </span>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={formData.lastname}
                onChange={handleChange}
                className="input input-bordered rounded-none"
                required
              />
            </div>
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Company name (optional)</span>
            </label>
            <input
              type="
"
              name="company"
              placeholder="Company name
"
              value={formData.company}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Country <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="
"
              name="country"
              placeholder="Country
"
              value={formData.country}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">House number and street name</span>
            </label>
            <input
              type="
"
              name="house"
              placeholder="House number and street name
"
              value={formData.house}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Apartment,Suite,unit,etc (optional)
              </span>
            </label>
            <input
              type="text"
              name="apartment"
              placeholder="Apartment,Suite,unit,etc (optional)"
              value={formData.apartment}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Suburb <span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="
"
              name="suburb"
              placeholder="Suburb
"
              value={formData.suburb}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                State <span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="
"
              name="state"
              placeholder="State
"
              value={formData.state}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Postcode <span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="number"
              name="postcode"
              placeholder="Postcode
"
              value={formData.postcode}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <input type="hidden" name="productName" value={data1} />
          <input
            type="hidden"
            name="totalAmount"
            value={shippingCost + parseFloat(data2)}
          />
          <input type="hidden" name="paymentMethod" value={selectedOption} />

          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Phone <span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="Phone number with CountryCode
"
              value={formData.number}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">
                Email address<span className="text-red-500">*</span>{" "}
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered rounded-none w-full"
              required
            />
          </div>
        </div>
        <div className="col-span-4">
          <p className="text-4xl font-bold text-left">Your Order</p>
          <div className="border border-gray-200 p-4 mt-5 ">
            <div className="divider"></div>
            <div className="flex gap-24 mt-4">
              <p className=" font-medium">Product:</p>
              <p className="font-medium">{data1}</p>
            </div>
            <div className="divider"></div>
            <div className="flex gap-24 mt-4">
              <p className=" font-medium">Subtotal:</p>
              <p className="font-medium">$ {data2}</p>
            </div>
            <div className="divider"></div>
            <div className="flex gap-24 mt-4">
              <p className=" font-medium">Shipping:</p>
              <div>
                <div>
                  <form onSubmit={handleSubmit2}>
                    <div>
                      <div className="text-left">
                        <label>
                          <input
                            type="radio"
                            id="20"
                            name="radiogroup"
                            value="20"
                            onChange={handleChange2}
                            required
                          />
                          <span className="ml-1 font-medium">
                            {" "}
                            Flat rate/ Normal Shipping:{" "}
                            <span className="font-bold">$20.00</span>
                          </span>
                        </label>
                      </div>
                      <div className="text-left">
                        <label>
                          <input
                            type="radio"
                            id="0"
                            name="radiogroup"
                            value="0"
                            onChange={handleChange2}
                            required
                          />
                          <span className="ml-1 font-medium text-left">
                            {" "}
                            Free shipping
                          </span>
                        </label>
                      </div>
                      <div className="text-left">
                        <label>
                          <input
                            type="radio"
                            id="50"
                            name="radiogroup"
                            value="50"
                            onChange={handleChange2}
                            required
                          />
                          <span className="ml-1 font-medium ">
                            {" "}
                            Discreet Express Overnight Delivery:{" "}
                            <span className="font-bold"> $50.00</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex gap-24 mt-4">
              <p className=" font-medium">Total:</p>
              <p className="font-medium">$ {data2 + shippingCost}</p>
            </div>
            <div className="divider"></div>
          </div>
          <div className="border border-gray-200 p-4 mt-5">
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="option1"
                  name="radiogroup"
                  value="Make your order and contact support for bank transfer details. We accept all Banks having instant transfer Osko system. Order will only be processed when funds are with us. Do not order if you’re not ready to make payment."
                  onChange={handleOptionChange}
                  required
                  className="mr-2"
                />
                <span className="font-bold ">Bank Transfers</span>
              </label>
            </div>

            <div className="mb-4 ">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="option2"
                  name="radiogroup"
                  value="Make your order and contact support for payments. Cardless cash is only offered by Westpac, St. George, Bank SA, Bank of Melbourne and CommBank.
Make sure to have any of the above banks before choosing this method.Only Paid orders will be processed. Do not place an order if you have no intentions of making payments."
                  onChange={handleOptionChange}
                  required
                  className="mr-2"
                />
                <span className="font-bold">Cardless Cash</span>
              </label>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="option3"
                  name="radiogroup"
                  value="We accept just the physical steam and google gift cards. you can purchase them at Woolies, Coles, Kmart, JB HIFI, EB Games, & 7-Eleven stores.
Once you make your order be sure you already have cards purchased and send us pictures of of the card codes for validation and processing of your order."
                  onChange={handleOptionChange}
                  required
                  className="mr-2"
                />
                <span className="font-bold">Steam & Google Gift Cards</span>{" "}
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="option4"
                  name="radiogroup"
                  value="Make your order and pay with Bitcoins, USDT and Ethereum to our wallets below
BTC: bc1qv2tqkvu9n7hjpksvulzzayjejq7pfnekn3jqmr
USDT(TRC-20): THMsXPiCx6PcouVjWe7MgM24RtyGviKdto s
ETH: 0x95E68bdF62d4DbECC585FA6D34730544bCbC2D2e
and send screenshot of payment to us via Email, Wickr or Whatsapp so we can Process your order.
all orders not paid will not be process. NB: do not place an order if you’re not ready to make payment immediately."
                  onChange={handleOptionChange}
                  className="mr-2"
                />
                <span className="font-bold">Bitcoins, USDT and Ethereum</span>{" "}
              </label>
            </div>

            {/* Display area for selected option */}
            <div>
              <div>
                {selectedOption && (
                  <div className="font-thin mt-5 text-left">
                    <span className="font-bold"></span>{" "}
                    <span>
                      {selectedOption.split("\n\n").map((part, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}{" "}
                          {/* Add double line break except for the first part */}
                          {part.split("\n").map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              <br /> <br />
                            </React.Fragment>
                          ))}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className=" bg-[#689311] text-white px-4 py-2 rounded mt-12 w-full "
              >
                Place order
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </form>
    </div>
  );
};

export default Checkout;
