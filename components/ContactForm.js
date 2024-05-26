import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

function ContactForm() {

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting } } = useForm()

    const onSubmit = handleSubmit(async (data, e) => {
        let endpoint = "https://hersse.com/api/sendmail.php?email=" + data.email;
        await axios.get(endpoint).then((response) => {
            console.log(response.data);
        });

    })

    const email_validation = {
        validation: {
            required: {
                value: true,
                message: "required",
            },
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email"
            },
            maxLength: {
                value: 30,
                message: "30 characters max"
            },
            minLength: {
                value: 3,
                message: "3 characters min"
            }
        }
    }

    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );





    return (
        <>
            <div className='px-5 max-w-[1130px] mx-auto'>
                <div className='border border-gray-400 px-[20px] py-[30px] grid lg:grid-cols-2 gap-3'>
                    <div className='flex items-center '>
                        <div className=''>
                            <div className=' text-red-600 text-[30px]  md:text-[35px]'>Talking Business?</div>
                            <div className=' font-bold mt-1 leading-[26px] text-[17px] tracking-tight font-sans  text-gray-900'>
                                To talk to experts in our field right away? Please, Fill the form and we will reply back.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=' text-[15px] lg:text-[17px]'>
                            We work with a wide range of clients who wish to define the future of their business applications. Together, we achieve extraordinary results.
                        </div>
                        <div className='mt-8'>
                            <FormProvider>
                                <form onSubmit={e => e.preventDefault()}
                                    noValidate
                                    autoComplete='off'
                                    action="" className=' space-y-3'>
                                    <input
                                        name={"email"}
                                        label={"email"}
                                        type={"text"}
                                        id={"email"}
                                        placeholder={"Enter email"}
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Enter a valid email"
                                            },
                                        })
                                        }
                                        className='border border-gray-300 bg-gray-100/50 w-full text-[15px] tracking-wide text-gray-500 font-light px-4 py-2 focus:outline-none'
                                    />
                                    {errors.email && (<div className=' text-red-500'>{errors.email.message}</div>)}
                                    <button
                                        onClick={onSubmit}
                                        /* disabled={isSubmitting} */
                                        className=' bg-red-600 text-white px-10 py-3 uppercase tracking-tight font-extralight text-[12px]'
                                    >
                                        {isSubmitting ? "Loading..." : "Contact us"}
                                    </button>

                                    {errors.root && <div className=' text-red-500'>{errors.root.message}</div>}
                                </form>
                            </FormProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm
