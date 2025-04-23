import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alan Perdomo | Portfólio</title>
        <meta name="description" content="Desenvolvedor full stack apaixonado por tecnologia." />
      </Head>
      <main className="min-h-screen p-4 flex flex-col justify-center items-center bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Oi, eu sou o Alan 👋</h1>
        <p className="text-lg mb-6 text-center max-w-xl">
          Desenvolvedor full stack com foco em projetos web modernos e tecnologias como Next.js, TypeScript e PostgreSQL.
        </p>
        <div className="flex gap-4">
          <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded-xl">Projetos</Link>
          <Link href="/contact" className="px-4 py-2 bg-gray-800 text-white rounded-xl">Contato</Link>
        </div>
      </main>
    </>
  )
} 