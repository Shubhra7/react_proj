import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const [post, setPost] = useState(null)
    const {slug} = useParams() // taking from url then unique post value
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            // appwrite fetch the post by it's unique id called-> slug
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        } else {
                    navigate('/')
        }
    },[slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
