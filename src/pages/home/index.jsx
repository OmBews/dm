/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "../../components/layout"
import { Cards } from "../../components/card";

function Home() {

  return (
    <Layout>
      <div className="mt-6 space-y-4">
        <h5 className="text-4xl font-bold capitalize tracking-tight">dont feel noob,<br /> upgrade now</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
    </Layout>
  )
}

export default Home