import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
function StudReg() {
    var sform = useFormik({
        initialValues:{
            firstname:'',
            lastname:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("Must fill this firstname"),
            lastname:Yup.string().required("Please enter the lastname"),
            username:Yup.string().required("username must be entered").matches(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,"username must be given format"),
            password:Yup.string().required("Must Enter Password").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password should follow our rules"),
            confirmPassword:Yup.string().test({
                name:'password same check',
                message:"arey bhai same password dena hain",
                test:(x)=>{
                    if(sform.values.password===x){
                        return true
                    }
                    else{
                        return false
                    }
                }
            })
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })

    return (
        <div className='mybox'>
            {console.log(sform)}
            <h1>StudReg</h1>
            <form onSubmit={sform.handleSubmit}>
                <input type="text" name='firstname' onBlur={sform.handleBlur} onChange={sform.handleChange} placeholder='First Name'/>
                <br />
                <div>{sform.touched.firstname && sform.errors.firstname}</div>
                <input type="text" name='lastname' onBlur={sform.handleBlur} onChange={sform.handleChange} placeholder='Last Name'/>
                <br />
                <div>{sform.touched.lastname && sform.errors.lastname}</div>
                <input type="text" name="username" onBlur={sform.handleBlur} onChange={sform.handleChange} placeholder='Enter your username' />
                <br />
                <div>{sform.touched.username && sform.errors.username}</div>
                <input type="password" name="password" onBlur={sform.handleBlur} onChange={sform.handleChange} placeholder='Enter your password'/>
                <br />
                <div>{sform.touched.password && sform.errors.password}</div>
                <input type="password" name="confirmPassword" onBlur={sform.handleBlur} onChange={sform.handleChange} placeholder='Enter your password'/>
                <br />
                <div>{sform.touched.confirmPassword && sform.errors.confirmPassword}</div>
                <button>Add Student</button>
            </form>
        </div>
    )
}

export default StudReg