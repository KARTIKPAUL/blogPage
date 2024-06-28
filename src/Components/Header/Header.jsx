import React from 'react'
import {Container, Logo, LogOutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header(){

    const authStatus = useSelector((state)=>state.auth.status);

    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },{
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },{
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus
        },{
            name: 'Add Posts',
            slug: '/add-post',
            active: authStatus
        }
    ]


    return(
            <header className='py-5 shadow bg-gray-500'>
                <Container>
                    <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                        <Logo width='70px'   />

                        </Link>
                    </div>
                    <ul className='flex ml-auto gap-5'>
                        {navItems.map((item) => 
                        item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={() => navigate(item.slug)}
                            className='bg-blue-700 border border-none text-white font-bold inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full
                            hover:text-black'>{item.name}</button>
                        </li>
                        ) : null
                        )}
                        {authStatus && (
                        <li>
                            <LogOutBtn />
                        </li>
                        )}
                    </ul>
                    </nav>
                    </Container>
                </header>

        
    )
}

export default Header;