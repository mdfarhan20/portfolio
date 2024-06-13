import { contactLinks } from "constants";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center gap-10 py-16 px-4 bg-zinc-950 text-white md:mt-20">
      <h2 className="heading text-2xl">MF.</h2>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        { contactLinks.map((contact, index) => (
          <li
            key={index}
            className="flex gap-4 items-center"
          >
            <contact.icon className="h-full size-max p-2 border-1 border-white rounded-md" />
            <a 
              href={contact.link}
            >
              <h3 className="heading">{ contact.platform }</h3>
              <p>{ contact.name }</p>
            </a>
          </li>
        )) }
      </ul>
    </section>
  );
}