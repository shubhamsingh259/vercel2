import Head from 'next/head';
import Home from '../component/home'

function IndexPage() {
       return (
         <>
         <Head>
        <title>My Little Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
           <div className="bg-red-900">this is next</div>
           
           <Home />
          </>
          
          
         
         )
         }
     
        export default IndexPage
      


    