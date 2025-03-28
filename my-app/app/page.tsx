export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Levis</h1>
      <p className="text-xl mb-6">A passionate software developer with a degree in Information Technology.</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript, TypeScript, Python</li>
          <li>React, Next.js, Tailwind CSS</li>
          <li>MySQL, Firebase, Git</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p>Coming soon!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: Levisdavid47@gmail.com</p>
      </section>
    </main>
  );
}
