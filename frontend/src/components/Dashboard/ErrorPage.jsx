import { FaExclamationTriangle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 p-6">
        <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
        
        <h1 className='text-3xl font-bold mb-2 text-gray-800'>
            Oops! Something went wrong.
        </h1>

        <p className='text-gray-600 mb-6 text-center'>
            {message ? message : "An unexpected error has occured"}
        </p>

        <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700 
            px-6 py-2.5 mt-4 rounded-lg text-white 
            font-medium transition-all duration-300 
            shadow-sm hover:shadow-md"
        >
            Go back to home
        </button>
    </div>
  )
}

export default ErrorPage