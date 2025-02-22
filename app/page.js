import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Md. Rabbi Hasan | SQA Engineer</title>
        <meta name="description" content="Portfolio of Md. Rabbi Hasan, SQA Engineer" />
      </Head>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}