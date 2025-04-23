// app/projects/page.tsx
export const metadata = {
  title: 'Projetos | Alan Perdomo',
}

const projects = [
  {
    title: 'VegLotus - E-commerce Vegano',
    description: 'Loja online com sistema de gerenciamento de produtos, carrinho e integração futura com meio de pagamento. Desenvolvido com Next.js, TypeScript e PostgreSQL.',
    link: 'https://github.com/alanperdomo/veglotus',
  },
  {
    title: 'Bot Heimer (Discord TCG)',
    description: 'Bot para Discord com comandos de jogo estilo TCG usando personagens do League of Legends.',
    link: 'https://github.com/alanperdomo/heimer-bot',
  },
  {
    title: 'Zap to Cloud (Z2C)',
    description: 'Projeto de armazenamento em nuvem com autenticação, upload/download de arquivos e organização de pastas.',
    link: 'https://github.com/alanperdomo/zap-to-cloud',
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="block p-4 border border-gray-300 rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
