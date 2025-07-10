// https://youtu.be/-6LvNku2nJE?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige

import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// This component for updating or creating new post

//  register help in fetch the form value and pass automatically. So don't need to manually pass the each value
// watch= when i want to continue monitor any feild
// setValue = as we are using React-Form so for setting any value we used setValue
// control= if i want any control of Form, this control is passed in RTE(child)
// getValues= for grabbing values from Form

const PostForm = ({post}) => {
    const { register, handleSubmit, watch, setValue, control, getValues} = useForm({
        // this will pass the posted value in the form
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const submit = async (data) =>{
        // if already existing post then for updating post need to upload the new image file
        if(post){
            //upload the new image file
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            // delete the previous image file
            if(file) {
                appwriteService.deleteFile(post.featuredImage)
            }

            // now updating the existing Post
            const dbPost = await appwriteService.updatePost( 
                post.$id, {
                    ...data,
                    featuredImage: file ? file.$id : undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        } else {
            // When this is totally new post
            const file = await appwriteService.uploadFile(data.image[0]);

            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id,
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    // For creating when we write title if will create the slug automatically 
    const slugTransForm = useCallback((value)=>{
        if(value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')

        return ''
    
    },[])

    React.useEffect(()=>{
        // value contains the latest form values.
        // {name} tells you which field triggered the change.
        const subscription = watch((value, {name}) => {
            if(name === 'title'){
                // setValue is a method from react-hook-form that programmatically updates a form field.
                setValue('slug', slugTransForm(value.title),
                {shouldValidate: true} )
            }
        })

        return () => {  // for more optimizing the useEffect
            subscription.unsubscribe()
        }
    },[watch, slugTransForm, setValue])


  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className='w-2/3 px-2'>
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { 
                    required: true})}
            />

            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", {required: true})}
                onInput={(e)=>{
                    setValue("slug", slugTransForm(e.currentTarget.value),{
                        shouldValidate: true
                    });
                }}
            />

            <RTE label="Content :" name="content"
            control={control} defaultValue={getValues("content")} />

        </div>
        <div className='w-1/3 px-2'>

            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image",{
                    required:!post }
                )}
            />

            {post && (
                <div className='w-full mb-4'>
                    <img 
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className='rounded-lg'
                    />
                </div>
            )}
            
            <Select
                options={["active","inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", {
                    required:true})
                }
            />
            <Button
                type='submit' bgColor={post ? "bg-green-500" : undefined}
                className='w-full'>
                    {post ? "Update" : "Submit" }
            </Button>  
        </div>
    </form>
  )
}

export default PostForm
