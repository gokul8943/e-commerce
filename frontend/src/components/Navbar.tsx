import { ShoppingCart,UserPlus, LogIn , LogOut, Lock} from 'lucide-react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full ng-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emrland-800'>
      <div className='container mx-auto px-4 py-3'>
         <Link to='/' className='tetx-2xl font-bold text-emerald-400 items-center space-x-2 flex'>E-commerce </Link>
         <nav className='flex flex-wrap items-center gap-4'>
            <Link to='/' className='' ></Link>

         </nav>
      </div>
    </div>
  )
}

export default Navbar
