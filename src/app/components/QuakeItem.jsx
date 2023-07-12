import Date from "./Date";

export default function QuakeItem({ sismo }) {

  const { RefGeografica, Fecha, Magnitud } = sismo;

  return (
    <article className="h-20 bg-zinc-800 text-white flex justify-between items-center p-3 rounded">
      <img
        src="/alerta-media.png"
        alt="icono alerta media"
        className="h-16 w-auto items-center"
      />
      <div className="flex flex-col items-center justify-center">
        <h1>{RefGeografica}</h1>
        <p className="font-bold text-center">{<Date dateString={Fecha}/>}</p>
      </div>
      <div className="flex items-center p-4">
        <h1 className="font-bold text-3xl">{Magnitud}</h1>
      </div>
    </article>
  );
}
