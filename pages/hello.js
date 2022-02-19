


// import styles from '../styles/Home.module.css'
// import { Button} from 'react-bootstrap';

export default function Home() {
    const handleclick = () => {
      alert("mep");
    };
  
    return (
      <div className="flex flex-col">
        <div className="h-20 bg-white flex justify-between">
          <div className=" text-cyan-700 text-xl font-bold pl-4 pt-5 font-Poppins">
            title
          </div>
  
          <div className="flex justify-evenly w-3/12">
            <div className=" text-black  pt-7 pl-4 font-Poppinsv">about</div>
            <div className=" text-black  pt-7 font-Poppins">blog</div>
            <div className=" text-black pt-7 font-Poppins">contanct</div>
            <div className=" text-black  pt-7 font-Poppins">learn more</div>
          </div>
        
        </div>
  
        
        <div className="h-screen bg-white flex ">
         <div className="hj">
         <div className="text-black w-5/12 bg-white text-9xl m-32 font-Poppins">
            watch. learn. grow.
          </div>
  
          {/* email  input  */}
          <div className="flex ">
          <input type="text" className="shadow-lg w-3/4 h-20 ml-32 bg-white font-Poppins" placeholder=" search"/>
          <button className="w-1/5 h-20 shadow-xl bg-green-400 font-Poppins">search</button> 
         
          </div>
          
          
          </div>
          
          <div className="bg-white flex ml-32">
          <div className="text-sky-50 w-1/4 bg-violet-500 rounded-xl m-16 ">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
              className="object-cover h-full w-full rounded-xl hover:-translate-y-1 transition ease-in-out delay-150 "
            >
  
              
            </img>
          </div>
          <div className="transition ease-in-out delay-150 bg-blue-500 m-16 w-1/12 hover:-translate-y-1 hover:w-1/4 hover:bg-indigo-500 duration-300">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
              className="object-cover h-full w-full rounded-xl"
            ></img>
          </div>
          <div className="transition ease-in-out delay-150 bg-blue-500 m-16 w-1/12 hover:-translate-y-1 hover:w-1/4 hover:bg-indigo-500 duration-300">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
              className="object-cover h-full w-full rounded-xl"
            ></img>
          </div>
          </div>
        </div>
        
        <div className="bg-orange-50 w-full">.</div>
        <div className="bg-orange-50 w-full h-36 text-center p-12 text-4xl font-bold font-Poppins">
  
          Unlimited acess to teachers 
  
        </div>
  
        <div className="flex bg-orange-50 justify-between px-96 text-xl font-semibold font-Poppinsv">
          <div className="a">fksodf</div>
          <div className="a">fksodf</div>
          <div className="a">fksodf</div>
          <div className="a">fksodf</div>
  
          <div className="a">fksodf</div>
          <div className="a">fksodf</div>
          
        </div>
  
        <div className="px-64 py-7 ml-9 bg-orange-50 gap-6 grid grid-cols-4">
          <div className="h-40 w-44 bg-orange-300 rounded-lg shadow-lg">1</div>
          <div className="h-40 w-44 bg-green-300 rounded-lg shadow-lg">2</div>
          <div className="h-40 w-44 bg-blue-300 0 rounded-lg shadow-lg">3</div>
          <div className="h-40 w-44 bg-red-300 rounded-lg shadow-lg">4</div>
          <div className="h-40 w-44 bg-cyan-400 rounded-lg shadow-lg">5</div>
          <div className="h-40 w-44 bg-cyan-400 rounded-lg shadow-lg">6</div>
          <div className="h-40 w-44 bg-cyan-400 rounded-lg shadow-lg">7</div>v
        </div>
      </div>
    );
  }
  