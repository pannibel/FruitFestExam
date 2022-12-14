import React from "react";
import { useRef, useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import { confirmReservation, insertOrder } from "../../database";

function PaymentDetails(props) {
  const theForm = useRef(null);
  // console.log(props.guestInfo[0].name);
  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  function saveBillingInfo(e) {
    e.preventDefault();
    const address = [];

    address.push({
      // name: theForm.current.elements.fullname.value,
      // email: theForm.current.elements.email.value,
      // phonenumber: theForm.current.elements.phone.value,

      streetname: theForm.current.elements.street.value,
      apartment: theForm.current.elements.apartment.value,
      city: theForm.current.elements.city.value,
      country: theForm.current.elements.country.value,
      // basket: props.
    });
    props.setBilling(address);
    insertOrder({
      fullname: theForm.current.elements.mainname.value,
      email: theForm.current.elements.email.value,
      phone: theForm.current.elements.phone.value,
      address: address,
      ticketOwners: props.guestInfo,
      basketContent: props.basket,
    });
    // console.log(props.billing);
    // console.log(props.idValue);
    confirmReservation({ id: props.idValue });
  }

  return (
    <div id="productList" className="box">
      <form ref={theForm} method="">
        <h2>Billing details</h2>
        <h3>Personal details</h3>
        <section className="formInput">
          <label htmlFor="">Full Name</label>
          <input
            defaultValue={""}
            type="text"
            name="mainname"
            id="form-mainname"
            placeholder="your fullname"
          />
        </section>
        <section>
          <label htmlFor="">Email address</label>
          <input
            defaultValue={""}
            type="email"
            name="email"
            id="form-email"
            placeholder="your email here"
          />
        </section>
        <section>
          <label htmlFor="">Phone number</label>
          <input
            defaultValue={""}
            type="number"
            name="phone"
            id="form-phone"
            placeholder="your number here"
          />
        </section>
        {/* <section>
          <label htmlFor="">Full name</label>
          <input
            defaultValue={""}
            type="text"
            name="fullname"
            id="form-fullname"
            placeholder="your name here"
          />
        </section> */}
        <h3>Billing address</h3>
        <section>
          <label htmlFor="">Street name</label>
          <input
            defaultValue={""}
            type="text"
            name="street"
            id="form-street"
            placeholder=""
          />
        </section>
        <section>
          <label htmlFor="">Apartment (number, floor, door, etc)</label>
          <input
            defaultValue={""}
            type="text"
            name="apartment"
            id="form-apartment"
            placeholder=""
          />
        </section>
        <section>
          <label htmlFor="">City</label>
          <input
            defaultValue={""}
            type="text"
            name="city"
            id="form-city"
            placeholder=""
          />
        </section>
        <section>
          <label htmlFor="">Country</label>
          <input
            defaultValue={""}
            type="text"
            name="country"
            id="form-country"
            placeholder=""
          />
        </section>

        <h2>Card details</h2>

        <div>
          <section>
            <label htmlFor="">Name on card</label>
            <input
              defaultValue={""}
              type="text"
              name="fullname"
              id="form-fullname"
              placeholder=""
            />
          </section>
          <section>
            <label htmlFor="">Card number</label>
            <input name="cardnumber" {...getCardNumberProps()} />
            <small>
              {erroredInputs.cardNumber && erroredInputs.cardNumber}
            </small>
          </section>

          <section>
            <label htmlFor="">Expiry date</label>
            <input name="expirydate" {...getExpiryDateProps()} />
            <small>
              {erroredInputs.expiryDate && erroredInputs.expiryDate}
            </small>
          </section>

          <section>
            <label htmlFor="">Security code</label>
            <input name="cvc" {...getCVCProps()} />
            <small>{erroredInputs.cvc && erroredInputs.cvc}</small>
          </section>

          <svg {...getCardImageProps({ images })} />
        </div>
      </form>

      <button onClick={props.changePage} name="back">
        Back
      </button>
      <button
        onClick={(e) => {
          saveBillingInfo(e);
          props.changePage(e);
        }}
        name="next"
      >
        Complete payment
      </button>
    </div>
  );
}

export default PaymentDetails;
