import React from "react";
import { useRef, useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import { insertOrder } from "../../database";

function PaymentDetails(props) {
  const theForm = useRef(null);

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  function saveBillingInfo(e) {
    e.preventDefault();
    const nextData = [];

    nextData.push({
      name: theForm.current.elements.fullname.value,
      email: theForm.current.elements.email.value,
      phonenumber: theForm.current.elements.phone.value,
      streetname: theForm.current.elements.street.value,
      apartment: theForm.current.elements.apartment.value,
      city: theForm.current.elements.city.value,
      country: theForm.current.elements.country.value,
      // basket: props.
    });
    props.setBilling(nextData);
    insertOrder({
      ticketOwners: nextData,
    });
    console.log(props.billing);
  }

  return (
    <div>
      <h1>Payment Details</h1>
      <form ref={theForm} method="">
        <h2>Billing details</h2>
        <h3>Personal details</h3>
        <section>
          <label htmlFor="">Full name</label>
          <input
            defaultValue={""}
            type="text"
            name="fullname"
            id="form-fullname"
            placeholder="your name here"
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

      {/* BASKET */}
      <div>
        <h3>Items</h3>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <li key={item.name}>
                  {item.name} x {item.amount} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "extra") {
              return (
                <li key={item.name}>
                  {item.name} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "camping spot") {
              return (
                <li key={item.name}>
                  {item.name} x {item.amount} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul>
          <li>Booking fee: 99,-</li>
        </ul>
        <h3>Total: {props.totalPrice() + 99},-</h3>
      </div>
    </div>
  );
}

export default PaymentDetails;
