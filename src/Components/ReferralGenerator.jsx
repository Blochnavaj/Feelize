import React, { useState } from "react";

const ReferralGenerator = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [referralLink, setReferralLink] = useState("");

  const webhookUrl = "https://hook.us2.make.com/i16dnbumc0f9pka8vohncrgt6dnrg8u7"; // Replace with your Make webhook

  // ✅ Generate fallback referral code (lowercase + numbers only)
  const generateReferralCode = (name) => {
    if (name && name.trim() !== "") {
      return name.replace(/\s+/g, "").substring(0, 5); // first 5 chars of name
    }
    return Math.random().toString(36).substring(2, 7); // random 5 chars
  };

  const handleGenerate = async () => {
    const finalCode = code.trim() || generateReferralCode(name);
    const link = `https://Feelize.com/?source=${finalCode}`;

    // ✅ Current date
    const dateCreated = new Date().toISOString();

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
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
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
      >
        Generate Referral
      </button>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Referral Generator</h2>

            {step === 1 && (
              <>
                <label className="block mb-2 font-medium">Enter your name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border p-2 rounded mb-4"
                />
                <button
                  onClick={() => name && setStep(2)}
                  className="w-full bg-purple-600 text-white py-2 rounded"
                >
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block mb-2 font-medium">
                  Enter custom referral code (optional):
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full border p-2 rounded mb-4"
                  maxLength={15}
                />
                <button
                  onClick={handleGenerate}
                  className="w-full bg-purple-600 text-white py-2 rounded"
                >
                  Generate Referral Link
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
                    setName("");
                    setCode("");
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

export default ReferralGenerator;
