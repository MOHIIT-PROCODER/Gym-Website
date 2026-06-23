import React, { useState, useEffect } from "react";
import axios from "axios";

function Plans() {

  const [billing, setBilling] = useState("monthly");
  const [dbPlans, setDbPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/plans/all`);
        setDbPlans(res.data);
      } catch (err) {
        console.error("Failed to fetch plans from DB:", err);
      }
    };
    fetchPlans();
  }, []);

  const plans = [
    {
      name: "Basic",
      monthly: 999,
      yearly: 8390,
      features: [
        "Access to workout programs",
        "Basic nutrition guide",
        "Community access",
        "Email support"
      ]
    },
    {
      name: "Pro",
      monthly: 1999,
      yearly: 16790,
      features: [
        "Everything in Basic",
        "Personalized workout plan",
        "Custom diet plan",
        "Progress tracking",
        "Priority support"
      ]
    },
    {
      name: "Elite",
      monthly: 3999,
      yearly: 33590,
      features: [
        "Everything in Pro",
        "1-on-1 coaching",
        "Weekly video consultation",
        "Supplement guidance",
        "24/7 support"
      ]
    }
  ];

  const choosePlan = async (planName, type, amount) => {

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to purchase a plan.");
      return;
    }

    try {

      const dbPlanObj = dbPlans.find(p => p.name.toLowerCase() === planName.toLowerCase());
      const planId = dbPlanObj ? dbPlanObj._id : null;

      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/payment/create`,
        { amount: amount * 100 }
      );

      if (!data.success || !data.order) {
        throw new Error("Order creation failed on backend");
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_SNB6oJE0JEnxv2",
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: "Fitips Gym",
        description: `${planName} ${type} Plan`,

        handler: async function (response) {

          try {
            await axios.post(
              `${import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'}/api/payment/success`,
              {
                name: user.name,
                email: user.email,
                phone: user.phone || "0000000000",
                planId: planId,
                planName: planName,
                planType: type,
                paymentId: response.razorpay_payment_id
              }
            );

            // Update user in local storage immediately
            const updatedUser = {
              ...user,
              planName: planName,
              planType: type === "yearly" ? "Yearly" : "Monthly",
              membershipStatus: "Active",
              paymentStatus: "Success"
            };
            localStorage.setItem("user", JSON.stringify(updatedUser));

            alert("Payment Successful");
            window.location.reload();
          } catch (err) {
            console.error("Failed to save payment success:", err);
            alert("Payment recorded by Razorpay, but failed to sync membership. Please contact support.");
          }

        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {

      console.error("Payment error:", error);
      alert("Payment Failed: " + (error.response?.data?.message || error.message));

    }

  };

  return (

    <div className="bg-white dark:bg-slate-950 text-slate-800 dark:text-white min-h-screen py-20 px-6 md:px-20 transition-colors duration-300">

      <h1 className="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        Choose Your <span className="text-lime-600 dark:text-[#00E676]">Plan</span>
      </h1>

      <p className="text-center text-slate-600 dark:text-gray-400 mb-10">
        Flexible pricing options designed for every fitness level.
      </p>

      {/* Toggle */}

      <div className="flex justify-center mb-14">

        <div className="bg-slate-100 dark:bg-gray-800 rounded-full p-1 flex">

          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full transition font-medium cursor-pointer ${
              billing === "monthly"
                ? "bg-lime-500 text-black"
                : "text-slate-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full transition font-medium cursor-pointer ${
              billing === "yearly"
                ? "bg-lime-500 text-black"
                : "text-slate-600 dark:text-gray-300 hover:text-lime-600 dark:hover:text-white"
            }`}
          >
            Yearly
          </button>

        </div>

      </div>

      {/* Discount badge */}

      {billing === "yearly" && (
        <p className="text-center text-green-600 dark:text-green-400 mb-10 font-medium">
          Save 30% with yearly subscription 🎉
        </p>
      )}

      {/* Plans */}

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, index) => {

          const price =
            billing === "monthly"
              ? plan.monthly
              : plan.yearly;

          return (

            <div
              key={index}
              className={`bg-slate-50 dark:bg-[#141414] p-8 rounded-2xl border transition duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-lime-500/25 ${
                plan.name === "Pro"
                  ? "border-lime-500 scale-105"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >

              {plan.name === "Pro" && (
                <div className="bg-lime-500 text-black text-sm px-3 py-1 font-bold w-fit mb-4">
                  Most Popular
                </div>
              )}

              {billing === "yearly" && (
                <div className="bg-green-600 text-white text-xs px-3 py-1 rounded-full w-fit mb-3">
                  Save 30%
                </div>
              )}

              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white font-bold uppercase">
                {plan.name}
              </h2>

              <h1 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                ₹{price}
                <span className="text-slate-600 dark:text-gray-400 text-lg font-normal">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              </h1>

              <ul className="space-y-3 text-slate-600 dark:text-gray-300 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>

              <button
                onClick={() =>
                  choosePlan(plan.name, billing, price)
                }
                className={`w-full py-3 rounded-lg font-bold uppercase transition cursor-pointer ${
                  plan.name === "Pro"
                    ? "bg-lime-500 hover:bg-lime-600 text-black"
                    : "bg-slate-200 dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-gray-700 text-slate-850 dark:text-white"
                }`}
              >
                {plan.name === "Basic"
                  ? "Get Started"
                  : plan.name === "Pro"
                  ? "Join Pro"
                  : "Go Elite"}
              </button>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default Plans;