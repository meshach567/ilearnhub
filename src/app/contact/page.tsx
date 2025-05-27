import ContactForm from "@/components/base/contact/ContactForm";
import { Toaster } from "react-hot-toast";

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}
