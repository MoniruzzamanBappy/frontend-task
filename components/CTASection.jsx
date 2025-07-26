export default function CTASection() {
  return (
    <div className="mt-8 flex flex-col-reverse md:flex-col space-y-5 text-center md:text-left">
      <div className="space-y-4 mt-4">
        <button
          className="bg-[#FC004E] w-full md:w-fit py-3 px-10 rounded-md text-lg font-semibold md:max-w-96"
          style={{
            boxShadow: "4px 4px 8px #00E7F9",
          }}
        >
          GET STARTED →
        </button>
        <p className="text-xs md:text-sm text-gray-400">
          1-minute quiz for personalized insights
        </p>
      </div>
      <div className="text-xs text-gray-500 space-y-4">
        <p>
          By clicking "Get Started", you agree with our Terms and Conditions,
          Privacy Policy, and Subscription Terms.
        </p>
        <p>© 2025 Fametonic. All Rights Reserved.</p>
      </div>
    </div>
  );
}
