export default function Visit() {
    return (
        <main className="site-container page-spacing">
            <section className="mb-10">
                <p className="mb-2 text-sm uppercase tracking-wide">Visit us</p>
                <h1 className="mb-4 text-4xl font-bold">Come by for coffee and waffles.</h1>
                <p className="max-w-xl">
                    Cozy Coffles is a one-branch neighborhood coffee shop with warm drinks, fresh waffles, and a calm place to settle in.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="mb-3 text-2xl font-semibold">Hours</h2>
                <ul className="space-y-2">
                    <li>Monday - Friday: 7am - 8pm</li>
                    <li>Saturday: 8am - 6pm</li>
                    <li>Sunday: 8am - 4pm</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="mb-3 text-2xl font-semibold">Address</h2>
                <p>123 Coffee Street</p>
                <p>Your City, Your State</p>
            </section>

            <section>
                <h2 className="mb-3 text-2xl font-semibold">Good to know</h2>
                <ul className="list-disc space-y-2 pl-5">
                    <li>Free Wi-Fi is available for guests.</li>
                    <li>Indoor seating is first come, first served.</li>
                    <li>Takeout is available at the counter.</li>
                </ul>
            </section>
        </main>
    )
}