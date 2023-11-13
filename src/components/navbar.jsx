import { Drawer } from "antd"
import { useState } from "react";
import { Link } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false);
  const [placement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="z-50 relative py-4 px-16 hidden md:grid grid-cols-2 bg-transparent border-b border-slate-100">
          <section className="flex flex-row items-center justify-between gap-x-4 bg-transparent">
            <img className="w-6 h-6 animate-spin" src="/logo.svg" alt="" />
            <div className="flex flex-row items-center gap-x-4 mx-auto bg-transparent">
              <Link to="/" className="text-base bg-transparent">HOME</Link>
              <Link to="/" className="text-base bg-transparent">TRACK ORDER</Link>
              <Link to="/" className="text-base bg-transparent">HOW TO ORDER</Link>
            </div>
          </section>
          <Link to="/" className="w-fit ml-auto px-4 py-2 border border-slate-200 rounded-md text-base">CONTACT US</Link>
      </div>
      {/* Mobile */}
      <div className="z-50 relative py-4 px-6 flex md:hidden flex-row items-center justify-between bg-transparent border-b border-slate-100">
          <img className="w-6 h-6 animate-spin" src="/logo.svg" alt="" />
          <section>
            <button onClick={showDrawer}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
            <Drawer placement={placement} width={500} onClose={onClose} open={open}>
              <div className="flex flex-col gap-y-4">
                <Link to="/" className="text-base bg-transparent">HOME</Link>
                <Link to="/" className="text-base bg-transparent">TRACK ORDER</Link>
                <Link to="/" className="text-base bg-transparent">HOW TO ORDER</Link>
                <Link to="/" className="px-4 py-2 border border-slate-200 rounded-md text-base">TRACK PROFILE</Link>
                <Link to="/" className="px-4 py-2 border border-slate-200 rounded-md text-base">CONTACT US</Link>
              </div>
            </Drawer>
          </section>
      </div>
    </>
    
  )
}

export default Navbar