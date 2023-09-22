import livroData from '@/data/livroData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Livro' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Livro
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Conteúdo escrito para auxiliar em seu desenvolvimento profissional
            {/* Showcase your projects with a hero image (16 x 9) */}
          </p>
        </div>
        

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Compre o eBook "Método PPA"</h1>
        <p className="mb-4">Preencha os campos abaixo para receber o eBook em seu email:</p>
        <form>
        
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-600">Nome:</label>
            <input
              type="text"
              id="nome"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              // value={nome}
              // onChange={handleNomeChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
              // value={email}
              // onChange={handleEmailChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:ring focus:ring-indigo-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
        

      </div>
    </>
  )
}
