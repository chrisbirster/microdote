import { Navbar } from "~/components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div class="pt-16 flex items-center justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScVEpgKmEBiByAajbov5zYDb8Z74AEng0WDQEGJwoY_u0ga0Q/viewform?embedded=true"
          width="640"
          height="786"
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
