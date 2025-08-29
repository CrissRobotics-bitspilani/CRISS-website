import React from "react";

export default function PaymentPortal() {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_RAqn5i2Lp07Yh9",
      amount: 100, // amount in paise (₹100)
      currency: "INR",
      name: "My React App",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
        // response contains razorpay_payment_id, razorpay_order_id, razorpay_signature
      },
      prefill: {
        name: "Manas Choudhary",
        email: "manasck14@gmail.com",
        contact: "9928057474",
      },
      notes: {
        address: "BITS Pilani, Pilani Campus",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "10px 20px",
        background: "#3399cc",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Pay with Razorpay
    </button>
  );
}

