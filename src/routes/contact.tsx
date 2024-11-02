import { Navbar } from "~/components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div class="pt-16 flex items-center justify-center">
        <iframe
          src={process.env.CONTACT_LINK ?? ""}
          width="640"
          height="1013"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
