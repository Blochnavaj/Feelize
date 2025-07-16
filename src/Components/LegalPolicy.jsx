import policyData from "../data/policyData";

const LegalPolicy = () => {
  return (
    <section className="bg-gray-50 py-16 mt-20">
      <div className="w-[95%] max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">
          Last updated: {policyData.lastUpdated}
        </p>

        {policyData.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-xl font-bold mb-2">
              {idx + 1}. {section.title}
            </h2>
            {section.content.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
            {section.list && (
              <ul className="list-disc list-inside space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalPolicy;
