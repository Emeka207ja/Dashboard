import Link from "next/link"
import Image from "next/image"
import Table from "./Table"
const Transactions = ()=>{
    // json file
    const posts=[
     [
          {
              "date":"1/1/2000",
              "customer":"/images/primeStar.png",
              "Id":"23",
              "payment":"paid",
              "amount":"3000",
              "drivers":"Obi",
              "status":"pending",
              "action":"pending"
          }
        ]
    ]
    // mapping json data into table
    const postlist = posts.map(post=>{
        return(
            <div className="max-w-full lg:mr-0 lg:max-w-full lg:space-x-0 mr-3 ">
            <table  className="max-w-full table-auto lg:max-w-full">
                <thead>
                    <tr>
                    <th className="px-1 lg:px-12 text-left">Date</th>
                        <th className="px-1 lg:px-12 text-left">Trip ID</th>
                        <th className="px-1 lg:px-12 text-left">Payment</th>
                        <th className="px-1 lg:px-12 text-left">Amount</th>
                        <th className="px-1 lg:px-12 text-left">Customer</th>
                        <th className="px-1 lg:px-12 text-left">Drivers Details</th>
                        <th className="px-1 lg:px-12 text-left">Status</th>
                        <th className="px-1 lg:px-12 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="px-1 lg:px-12">{post[0].date}</td>
                        <td className="px-1 lg:px-12">{post[0].Id}</td>
                        <td className="px-1 lg:px-12">{post[0].action}</td>
                        <td className="px-1 lg:px-12">{post[0].amount}</td>
                        <td className="px-1 lg:px-12"><Image src={post[0].customer} height={14} width={14}/></td>
                        <td className="px-1 lg:px-12">{post[0].drivers}</td>
                        <td className="px-1 lg:px-12">{post[0].status}</td>
                        <td className="px-1 lg:px-12">{post[0].action}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    })
    return(
        <div className=' mx-3 px-8 py-3 flex bg-gray-50 max-w-full'>
            <div className=" mr-1 lg:mr-10">Some values herer</div>
            <div className="w-full bg-white rounded-xl">
                
                <nav className="flex justify-between max-w-7xl py-5 items-center">
                    <div className="mx-3">
                        <Link href='#'><a>Transactions</a></Link>
                    </div>
                    <div className="flex justify-evenly space-x-4 mx-3">
                        <div>
                            
                            <Link href='#'><a>Filter</a></Link>
                        </div>
                        <div className="border px-2 rounded-xl">
                            <select className="focus:outline-none">
                            <option value="recent">Recent</option>
                            <option value="previous">previous</option>
                            </select>
                        </div>
                        <div>
                            <Link href='#'><a>...</a></Link>
                        </div>
                        
                    </div>
                </nav>
                {postlist}
            </div>
            
        </div>
    )
}
export default Transactions