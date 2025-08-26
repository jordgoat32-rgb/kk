"use client";

export default function FleetPage() {
  return (
    <div className="min-h-screen px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Flotte</h1>
      <div className="rounded-xl border overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-3 text-left">Véhicule</th>
              <th className="p-3 text-left">Année</th>
              <th className="p-3 text-left">KM</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[{ make: "Toyota", model: "Corolla", year: 2020, km: 82500 }, { make: "Tesla", model: "Model 3", year: 2022, km: 40200 }, { make: "Renault", model: "Clio", year: 2019, km: 102300 }].map((v) => (
              <tr key={v.make + v.model} className="border-t">
                <td className="p-3">{v.make} {v.model}</td>
                <td className="p-3">{v.year}</td>
                <td className="p-3">{v.km.toLocaleString()}</td>
                <td className="p-3"><button className="px-3 py-1 rounded-lg border text-xs">Suivi</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

