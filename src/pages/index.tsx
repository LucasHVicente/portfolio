import Head from 'next/head';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { LinkButton } from '../components/LinkButton';

export default function Home() {
  return (
    <div className="h-[100vh] flex-1 bg-bg-dark text-gray-300">
      <Header
        links={[
          {
            label: 'Sobre',
            url: '#about',
          },
          {
            label: 'Experência',
            url: '#experience',
          },
          {
            label: 'Projetos',
            url: '#projects',
          },
          {
            label: 'Contact',
            url: '#contato',
          },
        ]}
      />
      <section className="flex justify-center">
        <div className="w-[60%] pb-4 border-b border-blue-500 py-[10%]">
          <h2 className="text-blue-700 text-2xl">Olá, meu nome é</h2>
          <h1 className="text-blue-500 font-semibold text-5xl">
            {'<Lucas Vicente/>'}
          </h1>
          <h2 className="text-blue-700 text-3xl">
            e eu sou um desenvolvedor web.
          </h2>
          <p>
            Sou desenvolvedor com foco em desenvolvimento front-end e mobile.
          </p>
        </div>
      </section>
      <section id="about">About section</section>
      <section id="experience">experience section</section>
      <section id="projects">projects section</section>
      <section id="contacts">contacts section</section>
    </div>
  );
}
