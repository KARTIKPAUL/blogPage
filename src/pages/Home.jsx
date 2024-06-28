import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../Components'
import frontBlogImage from '../assets/frontBlogImage.webp'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-4xl font-bold hover:text-gray-500 text-violet-900 text-center">
                                WelCome To This Amazing Platform !
                            </h1>
                            <hr className='my-5 text-black font-bold'/>
                            <div className='flex flex-col md:flex-row my-10'>
                                <div className='mr-5'>
                                        <img src={frontBlogImage} alt="fontImage" className='rounded-xl cursor-pointer'/>
                                </div>
                                <div className='ml-5'>
                                    <h2 className='text-4xl font-bold my-10 text-blue-700 cursor-pointer'>This is India's Biggest Bloging PlatForm For Students ! </h2>

                                    <h2 className='text-4xl font-bold my-10 text-yellow-700 cursor-pointer'>Write Your First Blog Here </h2>

                                    <h2 className='text-4xl font-bold my-10 text-violet-700 cursor-pointer'>Lets Get's Start !</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home