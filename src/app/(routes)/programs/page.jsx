 export const dynamic = 'force-static'
 
 export const metadata = {
  title: 'Programs | iAcademy',
}

const programs = [
  { name: 'Computer Science', degree: 'B.Sc', desc: 'Core CS fundamentals, AI, and systems.' },
  { name: 'Business Administration', degree: 'BBA', desc: 'Leadership, finance, and entrepreneurship.' },
  { name: 'Data Science', degree: 'M.Sc', desc: 'Statistics, ML, and data engineering.' },
]

export default function ProgramsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Academic Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <div key={p.name} className="rounded-lg border p-6 bg-white">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{p.degree}</p>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
