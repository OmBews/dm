import { CardsDetail } from "../../components/card"
import FormBuy from "../../components/formBuy"
import Layout from "../../components/layout"

function Detail() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <CardsDetail/>
        <FormBuy/>
      </div>
    </Layout>
  )
}

export default Detail