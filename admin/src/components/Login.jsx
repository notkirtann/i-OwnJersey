import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../config.js'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })

            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full font-sans bg-gray-50'>
            <div className='bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] rounded-2xl px-8 py-10 max-w-md w-full border border-gray-100'>
                
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Admin Panel</h1>
                    <p className='text-gray-500 text-sm'>Sign in to manage your inventory</p>
                </div>

                <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
                    
                    {/* Email Input */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm'
                            type="email"
                            placeholder='your@email.com'
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm'
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className='mt-4 w-full py-3 px-4 bg-black text-white font-bold rounded-lg shadow-md hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200'
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login