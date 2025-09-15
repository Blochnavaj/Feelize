import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

export function MeetingButton() {
  const lastBookingIdRef = useRef(null);
  useEffect(() => {
    let cal;
    let handler;
    (async function () {
      cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      handler = async (e) => {
        const { data } = e.detail;
        const name = data?.booking?.responses?.name || "";
        const email = data?.booking?.responses?.email || "";
        const notes = data?.booking?.responses?.notes || "";
        const eventType = data?.eventType?.title || "Discovery Call";
        const referral = localStorage.getItem('referral') || '';
        const bookingId = data?.booking?.id;
        if (email && bookingId && lastBookingIdRef.current !== bookingId) {
          lastBookingIdRef.current = bookingId;
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: import.meta.env.VITE_WEB3FORMS_KEY,
              name,
              email,
              project: "Meeting",
              message: notes,
              referral
            })
          });
          await fetch(import.meta.env.VITE_MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              project: "Meeting",
              message: notes,
              timestamp: new Date().toISOString(),
              referral
            })
          });
        }
      };
      cal("on", { action: "bookingSuccessful", callback: handler });
    })();
    return () => {
      if (cal && cal.off && handler) cal.off("bookingSuccessful", handler);
    };
  }, []);
  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="feelizeecode/30min"
      data-cal-config='{"layout":"month_view"}'
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 text-lg font-semibold"
    >
      Schedule a Discovery Call 📞
    </button>
  );
} 