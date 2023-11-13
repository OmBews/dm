import { Carousel } from 'antd'

function Slider() {
  return (
    <div className='absolute top-0 left-0 w-full -translate-y-4'>
        <Carousel autoplay className='w-full h-[28rem] mt-4'>
            <img className='w-full h-[28rem] object-cover bg-center' src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww" alt="" />
            <img className='w-full h-[28rem] object-cover bg-center' src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww" alt="" />
            <img className='w-full h-[28rem] object-cover bg-center' src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww" alt="" />
        </Carousel>
    </div>
  )
}

export default Slider