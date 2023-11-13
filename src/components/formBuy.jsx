import { Input } from "antd"
import { Radio } from 'antd';
import { Link } from "react-router-dom";

function FormBuy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <section className="p-4 rounded-md border border-slate-100 bg-white shadow-sm h-fit space-y-4">
                <h5>Data Tujuan</h5>
                <div className="flex flex-col gap-y-2">
                    <Input className="py-2" placeholder="Masukkan User ID"/>
                    <Input className="py-2" placeholder="Masukkan Server ID"/>
                </div>
            </section>
            <section className="p-4 rounded-md border border-slate-100 bg-white shadow-sm h-fit space-y-4">
                <h5>Masukkan Email</h5>
                <Input className="py-2" placeholder="Masukkan User ID"/>
            </section>
            <section className="p-4 rounded-md border border-slate-100 bg-white shadow-sm h-fit space-y-4">
                <h5>Pilih Layanan</h5>
                <div className="grid grid-cols-2 gap-2">
                    <Radio.Group defaultValue="a">
                      <Radio.Button value="a" buttonStyle="solid">200 Diamond</Radio.Button>
                    </Radio.Group>
                    <Radio.Group defaultValue="b">
                      <Radio.Button value="b" buttonStyle="solid">200 Diamond</Radio.Button>
                    </Radio.Group>
                    <Radio.Group defaultValue="c">
                      <Radio.Button value="c" buttonStyle="solid">200 Diamond</Radio.Button>
                    </Radio.Group>
                    <Radio.Group defaultValue="d">
                      <Radio.Button value="d" buttonStyle="solid">200 Diamond</Radio.Button>
                    </Radio.Group>
                </div>
            </section>
        </div>
        <section className="p-4 rounded-md border border-slate-100 bg-white shadow-sm h-fit space-y-4">
            <h5>Metode Pembayaran</h5>
            <div className="grid grid-cols-2 gap-2 mb-4">
                <Radio.Group defaultValue="a">
                  <Radio.Button value="a" className="h-fit w-full" buttonStyle="solid">Bank Transfer</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="b">
                  <Radio.Button value="b" className="h-fit w-full" buttonStyle="solid">QRIS</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="c">
                  <Radio.Button value="c" className="h-fit w-full" buttonStyle="solid">E-Wallet</Radio.Button>
                </Radio.Group>
                <Radio.Group defaultValue="d">
                  <Radio.Button value="d" className="h-fit w-full" buttonStyle="solid">V. Account</Radio.Button>
                </Radio.Group>
            </div>
            <Link to="/detail-payment">
              <button className="w-full py-2 rounded-md capitalize bg-[#7000FD] text-white">buy now</button>
            </Link>
        </section>
    </div>
  )
}

export default FormBuy