import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mb-12">
        <p className="mb-2 text-sm uppercase tracking-wide">Local coffee shop in the neighborhood</p>
        
        <h1 className="mb-4 text-4xl font-bold">Cozy coffee, fresh waffles, and late-night vibes.</h1>
        
        <p className="mb-6 max-w-xl">
          A warm little spot for espresso, waffles, pastries, and unhurried conversations.
        </p>

        <div className="flex gap-4">
          <Link href="/menu">Explore our menu</Link>
          <Link href="/visit">Plan your visit</Link>
        </div>
      </section>

      <section>
        <h2>Customer favorites</h2>
        <ul>
          <li>Honey cinammon latte</li>
          <li>Classic cappuccino</li>
          <li>Strawberry waffles</li>
        </ul>
        <Link href="/menu">See full menu</Link>
      </section>

      <section>
        <h2>Visit us</h2>
        <p>Open daily for coffee, waffles, and cozy table time.</p>
        <p>123 Coffee Street, Your City</p>
        <Link href="/visit">Hours and directions</Link>
      </section>

      <section>
        <h2>Our little corner</h2>
        <p>
          We are a one-branch local coffee shop built around warm drinks,
          simple food, and a calm place to pause.
        </p>
        <Link href="/about">Read our story</Link>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>Reach out for reservations, events, or general questions.</p>
        <Link href="/contact">Contact us</Link>
      </section>

    </main>
  )
}