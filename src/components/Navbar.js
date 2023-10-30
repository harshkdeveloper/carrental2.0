import React, { useEffect } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
  useEffect(() => {

  }, [props.logout])
  const rentAgenttoken = sessionStorage.getItem('tokens')
  console.log(rentAgenttoken, 'rent token')
  return (

    <div className='row' style={{ backgroundColor: '#ffffff' }}>
      <NavLink to='/' className={rentAgenttoken ? 'col-4 ml-2' : 'col-4 ml-6'} style={{ fontSize: '2rem', textDecoration: 'none', color: 'black', marginLeft: '1rem', fontWeight: '600' }}>Rentals</NavLink>
      {props.data.length === 0 ?
        <>

          <NavLink to='/register' className='btn btn-warning col-2' style={{ fontSize: '25px', textDecoration: 'none', color: 'white', borderRadius: '50px' }}>Sign up
            <AiOutlineUserAdd className='col-2' style={{ height: '2rem' }} />
          </NavLink>

          <NavLink to='/login' className='btn btn-warning col-2 ' style={{ fontSize: '25px', textDecoration: 'none', color: 'white' }}>Log in
            <FiUser className='col-2' style={{ height: '2rem' }} /></NavLink>
        </>
        :
        <>

          <h1 className='col-2' style={{ fontWeight: '500', color: 'black', textTransform: 'capitalize' }}>{props.data.name}
            <FiUser className='col-2' style={{ height: '2rem' }} />
          </h1>
          <button className="btn btn-warning col-1" onClick={props.logout}>Sign Out</button>
        </>
      }

    </div>

  )
}

export default Navbar