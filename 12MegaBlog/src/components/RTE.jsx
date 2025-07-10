// https://youtu.be/-6LvNku2nJE?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige
import React from "react"
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from "react-hook-form"

// then Controller helps to get reference from react-hook-form when we use this RTE in that form

// Controller, forwardRef all is about passing reference from parent to child for getting context. Because react only allowed to useRef for their component like <input/> <button/> but not for custom element

// the "control" come from react-hook-form, and this control is responsible to send it's state and all to that form 
export function RTE({name, control, label, defaultValue=""}){
  return (
    <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1">
            {label}</label>}

        {/* This Controller will send the controller to the used form */}
        <Controller
        name={name || "content"}
        control={control}  // attaching control for RHF
        render={({field: {onChange}}) => (
            <Editor
                apiKey="ig87phcj4ltzhsb8y5rwgi0a2yv5guqaa6l3zjwreitw3aa6"
                initialValue={defaultValue}
                init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        pulgins: [
                            "image","advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetiime","media","table","code","help","wordcount","anchor"
                        ],
                        toolbar: 
                        'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                        content_style:
                        "body {font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                    }}
                    onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}
export default RTE