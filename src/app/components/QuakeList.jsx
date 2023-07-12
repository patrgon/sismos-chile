import QuakeItem from "./QuakeItem";

async function getData() {
  const res = await fetch("https://api.gael.cloud/general/public/sismos", { next: { revalidate: 10 } });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function QuakeList() {
  const data = await getData();
  return (
    <section className="flex flex-col gap-4 p-4 pt-10 w-full max-w-xl">
      {data.map((sismo) => (
        <QuakeItem sismo={sismo} />
      ))}
    </section>
  );
}
