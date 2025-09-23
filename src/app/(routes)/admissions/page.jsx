 export const dynamic = 'force-static'
 
 export const metadata = {
  title: 'Admissions | iAcademy',
}

export default function AdmissionsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Admissions</h1>
      <p className="text-gray-600 max-w-2xl">
        Discover how to apply to iAcademy, review entry requirements, and learn
        about important dates and financial aid options.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">Undergraduate</h3>
          <p className="text-gray-600">Freshman and transfer admissions process.</p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">Graduate</h3>
          <p className="text-gray-600">Masters and PhD requirements & deadlines.</p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">Financial Aid</h3>
          <p className="text-gray-600">Scholarships, grants, and assistantships.</p>
        </div>
      </div>
    </main>
  )
}
