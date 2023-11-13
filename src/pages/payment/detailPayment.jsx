import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function DetailPayment() {
  return (
    <Layout>
        <div className="w-8/12 md:w-4/12 mx-auto my-10 ring-slate-100 ring-1 rounded-md hover:scale-105 hover:transition-all duration-300">
            <div className="bg-slate-200 text-center p-4 rounded-tr-md rounded-tl-md">
                <h1>Detail Payment</h1>
            </div>
            <div className="grid grid-cols-2 p-4">
                <section className="space-y-2">
                    <h5 className="capitalize">kategori Layanan :</h5>
                    <h5 className="capitalize">nominal Layanan :</h5>
                    <h5 className="capitalize">UserId :</h5>
                    <h5 className="capitalize">payment method :</h5>
                </section>
                <section className="space-y-2">
                    <h5>valorant</h5>
                    <h5>125 points</h5>
                    <h5>wkkwk</h5>
                    <h5>BCA Transfer</h5>
                </section>
            </div>
            <div className="flex flex-col space-y-2 p-4">
                <Link to="/payment">
                  <button className="w-full py-2 rounded-md capitalize bg-[#7000FD] text-white">buy now</button>
                </Link>
                <Link to="/">
                  <button className="w-full py-2 rounded-md capitalize bg-slate-100">Cancel</button>
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default DetailPayment