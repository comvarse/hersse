import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

function ContactFormOrb() {

    const initVals = {
        email: ""
    }

    let [frmState, setFrmState] = useState({});



    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: async () => {
            let localStore = JSON.parse(localStorage.getItem("Y_FORM_DATA"));

            if (localStore !== null) {
                return localStore
            } else {
                return initVals
            }
        }
    }, [initVals]);



    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        console.log(name + ": " + value)
        setFrmState((prev) => ({ ...prev, [name]: value }))
    }


    useEffect(() => {
        let formS = null;

        if (localStorage.getItem("Y_FORM_DATA")) {
            formS = JSON.parse(localStorage.getItem("Y_FORM_DATA"))
        }

        setFrmState((prev) => ({ ...prev, ...formS }))
    }, [])


    useEffect(() => {
        localStorage.setItem("Y_FORM_DATA", JSON.stringify(frmState))
    }, [frmState])



    const onSubmit = (async (data, e) => {
        try {
            let endpoint = "https://hersse.com/api/sendmail.php?email=" + data.email;
            await axios.get(endpoint).then((response) => {
                console.log(response.data);
                localStorage.removeItem("Y_FORM_DATA");
                e.target.reset()
                setError("root", {
                    message: "Success. We have received your email."
                })
            });

        } catch (errors) {
            setError("root", {
                message: "We could not complete the request. Check your internet connection."
            })

        }
    })



    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );





    return (
        <>
            <div className='px-5 max-w-[1130px] mx-auto'>
                <div className='border border-gray-400 px-[20px] py-[30px] grid lg:grid-cols-2 gap-3'>
                    <div className='flex items-center '>
                        <div className=''>
                            <div className=' font-black text-red-600 text-[30px]  md:text-[35px]'>Talking Business?</div>
                            <div className=' font-bold mt-1 leading-[26px] text-[17px] tracking-tight font-sans  text-gray-900'>
                                To talk to experts in our field right away? Please, enter your and one of our reps will reply back.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' text-[15px] lg:text-[17px]'>
                            We work with a wide range of clients who wish to define the future of their business applications. Together, we achieve extraordinary results.
                        </div>
                        <div className='mt-8'>

                            <form onSubmit={handleSubmit(onSubmit)} className=' space-y-3'>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Enter a valid email"
                                        },
                                        onChange: handleChange
                                    })}

                                    type="text"
                                    placeholder="Email"
                                    className='border border-gray-300 bg-gray-100/50 w-full text-[15px] tracking-wide text-gray-500 font-light px-4 py-2 focus:outline-none'
                                />
                                {errors.email && (<div className=' text-red-500'>{errors.email.message}</div>)}
                                <button

                                    disabled={isSubmitting}
                                    className=' bg-red-600 text-white px-10 py-3 uppercase tracking-tight font-extralight text-[12px]'
                                >
                                    {isSubmitting ? "Loading..." : "Contact us"}
                                </button>

                                {errors.root && <div className=' text-red-500 font-bold'>{errors.root.message}</div>}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactFormOrb
