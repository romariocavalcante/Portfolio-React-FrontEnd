/* eslint-disable react/no-children-prop */
import Botao from "../components/botao";
import Layout from "../components/layout";


export default function Home() {



  return (
    <div className={` flex justify-center items-center h-screen
   text-purple-600`}>
      <Layout titulo='Portfólio'>
        <Botao cor = 'green'/>
      </Layout>
      
    </div>
  )
}

