import Head from "next/head"
import Header from "./Header"
const Layout =({title,description,keywords,children})=>{
    return (
        <div>
           <Head>
              <title>{title}</title> 
              <meta name= 'description' content={description} />
              <meta name='keyword' content={keywords}/>
           </Head> 
           <Header/>
          <div >
              {children}
          </div>
         
        </div>
    )
}
export default Layout
Layout.defaultProps={
    title: 'Envoi',
    description: 'Goods tracking,Order tracking',
    keywords: 'Tracking,Order, Goods, buying and selling, delivery'
}