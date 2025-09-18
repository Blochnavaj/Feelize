import React, { useState } from "react";

const AffiliateProgram = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    code: "",
    payoutMethod: "",
    payoutDetails: "",
    audienceType: "",
    country: "",
    socialLinks: "",
    reach: "",
    message: "",
  });
  const [referralLink, setReferralLink] = useState("");

  const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL_2 // Sheet 2 for affiliates
  console.log("Env:", import.meta.env);
console.log("Webhook 2:", import.meta.env.VITE_MAKE_WEBHOOK_URL_2);


  const generateReferralCode = (name) => {
    if (name && name.trim() !== "") {
      return name.replace(/\s+/g, "").substring(0, 5).toLowerCase(); // first 5 chars lowercase
    }
    return Math.random().toString(36).substring(2, 7);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    const finalCode = formData.code.trim() || generateReferralCode(formData.name);
    const link = `https://feelize.com/?source=${finalCode}`;
    const dateCreated = new Date().toISOString();

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          referralCode: finalCode,
          referralLink: link,
          dateCreated,
        }),
      });
    } catch (error) {
      console.error("Failed to send data to Make:", error);
    }

    setReferralLink(link);
    setStep(3);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Earn 20% Commission
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Every Customer. No Caps. Get 20% recurring commission for 12 months on
          every client you refer to Feelize.
        </p>
        <p className="text-gray-600 mt-1">
          Referrals qualify if they sign up via your link within 60 days.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-4xl bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Feelize</h2>
        <p className="text-gray-700">
          Feelize is a service-based software company that provides{" "}
          <strong>Vibe Coding as a Service</strong> — a unique way to build and
          deliver software solutions rapidly, blending automation, AI, and
          expert engineering. We work with startups, creators, and growing
          businesses to bring their ideas to life faster.
        </p>
      </div>

      {/* Target Audience */}
      <div className="max-w-4xl bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who Can Join?</h2>
        <p className="text-gray-700">
          Ideal affiliates include tech creators, founders, consultants, agency
          owners, and anyone connected to businesses or individuals who need
          software solutions, MVPs, or automation built quickly.
        </p>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Apply:</strong> Fill out a short form to join the Feelize Affiliate Program.</li>
          <li><strong>Share:</strong> Get a unique referral link and share it with your network.</li>
          <li><strong>Earn:</strong> Receive 20% recurring commission for 12 months for every paying client you bring.</li>
        </ol>
      </div>

      {/* CTA */}
      <button
        onClick={() => setOpen(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
      >
        Apply Now
      </button>

      {/* Modal Popup */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[28rem] shadow-lg max-h-[90vh] overflow-y-auto">
            <button
  onClick={() => setOpen(false)}
  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
>
  ✕
</button>

            <h2 className="text-xl font-bold mb-4">Join Affiliate Program</h2>

            {step === 1 && (
              <>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  required
                />

                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  required
                />

                <label className="block mb-2 font-medium">Custom Referral Code (optional)</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  maxLength={15}
                />
{/* 
                <label className="block mb-2 font-medium">Payout Method</label>
                <select
                  name="payoutMethod"
                  value={formData.payoutMethod}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                >
                  <option value="">Select</option>
                  <option value="paypal">PayPal</option>
                  <option value="wise">Wise</option>
                  <option value="bank">Bank Transfer</option>
                </select> */}
{/* 
                <label className="block mb-2 font-medium">Payout Details</label>
                <input
                  type="text"
                  name="payoutDetails"
                  value={formData.payoutDetails}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="PayPal email, Wise ID, Bank Info"
                /> */}

                <label className="block mb-2 font-medium">Audience Type</label>
                <select
                  name="audienceType"
                  value={formData.audienceType}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                >
                  <option value="">Select</option>
                  <option value="creators">Creators</option>
                  <option value="developers">Developers</option>
                  <option value="startups">Startups</option>
                  <option value="agencies">Agencies</option>
                  <option value="other">Other</option>
                </select>

                <label className="block mb-2 font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                />

                <label className="block mb-2 font-medium">Social Links / Website</label>
                <input
                  type="text"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Instagram, LinkedIn, Website"
                />

                <label className="block mb-2 font-medium">Estimated Reach</label>
                <input
                  type="text"
                  name="reach"
                  value={formData.reach}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Followers, subscribers, traffic"
                />

                <label className="block mb-2 font-medium">Message (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mb-4"
                  placeholder="Why do you want to be an affiliate?"
                />

                <button
                  onClick={handleGenerate}
                  className="w-full bg-purple-600 text-white py-2 rounded"
                >
                  Submit & Generate Referral Link
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <p className="mb-4">
                  🎉 Your referral link is:
                  <br />
                  <span className="text-blue-600">{referralLink}</span>
                </p>
                <button
                  onClick={handleCopy}
                  className="w-full bg-green-600 text-white py-2 rounded mb-2"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      code: "",
                      payoutMethod: "",
                      payoutDetails: "",
                      audienceType: "",
                      country: "",
                      socialLinks: "",
                      reach: "",
                      message: "",
                    });
                    setReferralLink("");
                  }}
                  className="w-full bg-gray-400 text-white py-2 rounded"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AffiliateProgram;
