import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <Link to="/detail">
        <div className="ring-slate-100 ring-1 rounded-md hover:scale-105 hover:transition-all duration-300 my-6">
          <div className="w-full h-60 bg-slate-100"></div>
          <div className="p-4">
            <h5 className="text-black text-lg font-semibold capitalize">Mobile Legend</h5>
          </div>
        </div>
      </Link>
    </>
  );
}

function CardsDetail() {
  return (
    <>
      <div className="ring-slate-100 ring-1 rounded-md h-fit bg-white drop-shadow-sm">
        <div className="w-full h-60 bg-slate-100"></div>
        <div className="p-4">
          <h5 className="text-black text-lg font-semibold capitalize">mobile legend</h5>
        </div>
      </div>
    </>
  )
}

export {Cards, CardsDetail};