import Layout from "../../components/layout"

function DoPayment() {
  return (
    <Layout>
        <div className="w-8/12 md:w-6/12 bg-white mx-auto my-10 ring-slate-100 ring-1 rounded-md hover:scale-105 hover:transition-all duration-300">
            <div className="bg-slate-200 text-center p-4 rounded-tr-md rounded-tl-md">
                <h1>Detail Payment</h1>
            </div>
            <div className="grid grid-cols-2 p-4">
                <section className="space-y-2">
                    <h5 className="capitalize">No Pesanan :</h5>
                    <h5 className="capitalize">Tanggal Pembelian :</h5>
                    <h5 className="capitalize">Metode Pembayaran :</h5>
                    <h5 className="capitalize">Status Pesanan :</h5>
                    <h5 className="capitalize">Item :</h5>
                    <h5 className="capitalize">ID User :</h5>
                    <h5 className="capitalize">Harga :</h5>
                    <h5 className="capitalize">Keterangan/No Token/No Voucher :</h5>
                    <h5 className="capitalize">No Rekening :</h5>
                </section>
                <section className="space-y-2">
                    <h5>GC202311132115043238 </h5>
                    <h5>13/11/2023</h5>
                    <h5>BCA Transfer</h5>
                    <h5>Pending</h5>
                    <h5>125 Points</h5>
                    <h5>wkwk</h5>
                    <h5>10.000</h5>
                    <h5>Menunggu Pembayaran</h5>
                    <h5>14314134324</h5>
                </section>
            </div>
        </div>
    </Layout>
  )
}

export default DoPayment