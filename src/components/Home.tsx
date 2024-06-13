
import photoMobile from "assets/photo-mobile.jpeg";
import photoDesktop from "assets/photo-desktop.png";

export default function Home() {
  return (
    <section 
      id="home" 
      className="section-layout md:w-4/5 md:mx-auto lg:w-full lg:flex-row lg:justify-between lg:h-90v lg:px-40 xl:mb0 lg:bg-vignette"
    >
      <picture 
        className="mb-6 lg:absolute lg:-bottom-5 lg:1/3 xl:w-1/2 lg:left-[45%] xl:left-1/2 lg:-translate-x-1/2"
      >
        <source media="(width > 1024px)" srcSet={photoDesktop} />
        <img 
          src={photoMobile}
          alt="Picture of Mohamed Farhan"
          className="rounded-full border-black border-4 lg:border-none lg:rounded-none lg:-z-20"
        />
      </picture>

      <div className="self-start lg:w-1/3">
        <p className="mb-2">Hi, My name is</p>
        <h1 className="heading text-4xl uppercase xl:text-6xl">Mohamed Farhan</h1>
      </div>

      <div className="text-right self-end z-10 lg:w-1/3">
        <p className="mb-2">And I'm a</p>
        <h1 className="heading text-4xl uppercase xl:text-6xl">Full Stack Developer</h1>
      </div>
    </section>
  );
}