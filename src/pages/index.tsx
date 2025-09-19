import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Welcome to Your Next.js App
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            Built with TypeScript, Tailwind CSS, Vitest, and modern tooling
          </p>

          <div className="mb-12 flex justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">TypeScript</h3>
              <p className="text-gray-600">
                Type-safe development with full IDE support
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Tailwind CSS</h3>
              <p className="text-gray-600">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Vitest</h3>
              <p className="text-gray-600">
                Lightning fast unit testing framework
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
