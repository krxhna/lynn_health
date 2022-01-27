// import styles from '../styles/Home.module.css'
// import { Button} from 'react-bootstrap';

export default function Home() {
  const handleclick = () => {
    alert("mep");
  };

  



  return (
    <div className="flex flex-row">
      {/* navbar  */}
      <div className="bg-slate-900 w-52 h-screen flex flex-col text-center justify-evenly">
        <div className="absolute top-0 text-center px-14">heading</div>

        <div className="flex flex-col gap-4 ">
          <div className="text-gray-200 font-Poppins font-semibold hover:text-teal-500 ">
            Home
          </div>
          <div className="text-gray-200 font-Poppins font-semibold  hover:text-teal-500">
            Dashbord
          </div>
          <div className="text-gray-200 font-Poppins font-semibold  hover:text-teal-500">
            Charts
          </div>
          <div className="text-gray-200 font-Poppins font-semibold  hover:text-teal-500">
            News
          </div>
        </div>
        <div className="text-gray-200 font-Poppins font-semibold">Account</div>
      </div>

      <div className="h-screen bg-white w-64">
        <button
          className="shadow-xl m-2 w-36  h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-md text-cyan-50 font-semibold "
          onClick={handleclick}
        >
          yes mommy
        </button>
      </div>
    </div>
  );
}
