'use client';

import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

const today = new Date().toISOString().split('T')[0];

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        trigger,
        setValue,
        reset,
        control,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: 'onTouched',
    });
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [Message, setMessage] = React.useState('');
    const [countries, setCountries] = useState<any[]>([]);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const userName = useWatch({
        control,
        name: 'name',
        defaultValue: 'Someone',
    });

    useEffect(() => {
        const data = require('@/config/countryCodeData.json');
        setCountries(data);
    }, [])
    useEffect(() => {
        setValue('subject', `${userName} sent a message from Sun 'n' Sand Website`);
    }, [userName, setValue]);

    const onSubmit = async (data: any, e: any) => {
        if (data.botcheck) {
            return
        }

        await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data, null, 2),
        })
            .then(async (response) => {
                let json = await response.json();
                if (json.success) {
                    setIsSuccess(true);
                    setMessage(json.message);
                    e.target.reset();
                    reset();
                } else {
                    setIsSuccess(false);
                    setMessage(json.message);
                }
            })
            .catch((error) => {
                setIsSuccess(false);
                setMessage('Client Error. Please check the console for more info');
                console.log(error);
            });
    };

    return (
        <div className="mx-2 md:px-20 lg:px-0">
            <h2 className="h2 my-4 md:my-0 text-fontColor">Make a Reservation</h2>
            <div className='py-0 lg:py-0 px-4 mx-auto max-w-screen-md'>
                {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
                        <input
                            type='hidden'
                            value='f545d9a6-5b1a-4837-a75d-6d70ae1e76c9'
                            {...register('access_key')}
                        />
                        <input type='hidden' {...register('subject')} />
                        <input
                            type='hidden'
                            value='New Submission from Sun "n" Sand Website'
                            {...register('from_name')}
                        />
                        <input
                            type='checkbox'
                            id=''
                            className='hidden'
                            style={{ display: 'none' }}
                            {...register('botcheck')}
                        ></input>

                        {/* Name Field */}
                        <div className="mb-6">
                            <label htmlFor="name" className="form-label text-fontColor">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                autoComplete='off'
                                className={`form-input text-lg ${errors.fullname
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                    }`}
                                {...register('fullname', {
                                    required: 'Full name is required',
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: 'Full name must be letters only',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'Full name must be at least 2 characters',
                                    },
                                    maxLength: {
                                        value: 80,
                                        message: 'Full name must be less than 80 characters',
                                    },
                                })}
                                onKeyUp={() => trigger('fullname')}
                                required
                            />
                            {errors.fullname && (
                                <div className='mt-1 text-red-600'>
                                    <small>{errors.fullname.message}</small>
                                </div>
                            )}
                        </div>

                        {/* Honeypot Field */}
                        <div className="space-y-2">
                            <input type="checkbox" name="botcheck" id='botcheck' className="hidden" style={{ display: 'none' }} {...register('botcheck')} />
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label htmlFor="email" className="form-label text-fontColor">
                                E-Mail <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className={`form-input text-lg ${errors.email
                                    ? 'border-red-600 focus:border-red-600 ring-red-100'
                                    : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                    }`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                        message: 'Please enter a valid email',
                                    },
                                })}
                                onKeyUp={() => trigger('email')}
                            />
                            {errors.email && (
                                <div className='mt-1 text-red-600'>
                                    <small>{errors.email.message}</small>
                                </div>
                            )}
                        </div>

                        {/* Phone Number Field */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="mb-6">
                                <label htmlFor="countryCode" className="form-label text-fontColor">
                                    Country Code <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className={`form-input text-lg ${errors.code
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    required
                                    {...register("code", {
                                        required: {
                                            value: true,
                                            message: 'Country code is required'
                                        }
                                    })}
                                >
                                    {countries
                                        .sort((a, b) => a.calling_code - b.calling_code)
                                        .map((country) => (
                                            <option key={uuidv4()} value={country.calling_code}>
                                                {country.calling_code}
                                            </option>
                                        ))}
                                </select>
                                {errors.code && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.code.message}</small>
                                    </div>
                                )}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="form-label text-fontColor">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder='Enter your phone number'
                                    className={`form-input text-lg ${errors.phone
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone number is required',
                                        },
                                        pattern: {
                                            value: /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,
                                            message: 'Please enter a valid phone number',
                                        }
                                    })}
                                    required
                                />
                                {errors.phone && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.phone.message}</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Date Fields */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="mb-6">
                                <label htmlFor="checkInDate" className="form-label text-fontColor">
                                    Check-in <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    className={`form-input text-lg ${errors.checkInDate
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("checkInDate", {
                                        required: 'Check-in date is required',
                                    })}
                                    value={checkInDate}
                                    min={today}
                                    onChange={e => setCheckInDate(e.target.value)}
                                    required
                                />
                                {errors.checkInDate && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.checkInDate.message}</small>
                                    </div>
                                )}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="checkOutDate" className="form-label text-fontColor">
                                    Check-out <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    className={`form-input text-lg ${errors.checkOutDate
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("checkOutDate", {
                                        required: 'Check-out date is required',
                                    })}
                                    value={checkOutDate}
                                    min={checkInDate || today}
                                    onChange={e => setCheckOutDate(e.target.value)}
                                    required
                                />
                                {errors.checkOutDate && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.checkOutDate.message}</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Room Fields */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="mb-6">
                                <label htmlFor="roomType" className="form-label text-fontColor">
                                    Room Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className={`form-input text-lg ${errors.rooms
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("rooms", {
                                        required: 'Please select a room type',
                                    })}
                                    required
                                >
                                    <option value="chalet">Self-Catering Chalet Rooms</option>
                                    <option value="deluxe">Deluxe Rooms</option>
                                    <option value="vip">VIP Rooms</option>
                                </select>
                                {errors.rooms && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.rooms.message}</small>
                                    </div>
                                )}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="numberOfRooms" className="form-label text-fontColor">
                                    Number of Rooms <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder='Please enter the number of rooms'
                                    className={`form-input text-lg ${errors.numberOfRooms
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("numberOfRooms", {
                                        required: 'Number of rooms is required',
                                        pattern: {
                                            value: /^[1-9]+[0-9]*$/,
                                            message: 'Number of rooms must be a valid number'
                                        },
                                        min: {
                                            value: 1,
                                            message: 'Number of rooms must be greater than 0'
                                        }
                                    })}
                                    required
                                />
                                {errors.numberOfRooms && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.numberOfRooms.message}</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Peoples Fields */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="mb-6">
                                <label htmlFor="numberOfAdults" className="form-label text-fontColor">
                                    Adults <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder='Please enter the number of adults'
                                    className={`form-input text-lg ${errors.adults
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("adults", {
                                        required: 'Number of adults is required',
                                        pattern: {
                                            value: /^[1-9]+[0-9]*$/,
                                            message: 'Number of adults must be a valid number'
                                        },
                                        min: {
                                            value: 1,
                                            message: 'Number of adults must be greater than 0'
                                        }
                                    })}
                                    required
                                />
                                {errors.adults && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.adults.message}</small>
                                    </div>
                                )}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="numberOfChildren" className="form-label text-fontColor">
                                    Children <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder='Please enter the number of children'
                                    className={`form-input text-lg ${errors.children
                                        ? 'border-red-600 focus:border-red-600 ring-red-100'
                                        : 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                        }`}
                                    {...register("children", {
                                        required: 'Number of children is required',
                                        pattern: {
                                            value: /^[0-9]+[0-9]*$/,
                                            message: 'Number of children must be a valid number'
                                        },
                                        min: {
                                            value: 0,
                                            message: 'Number of children must be greater than or equal 0'
                                        }
                                    })}
                                    required
                                />
                                {errors.children && (
                                    <div className='mt-1 text-red-600'>
                                        <small>{errors.children.message}</small>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <label htmlFor="message" className="form-label text-fontColor">
                                Anything else?
                            </label>
                            <textarea
                                placeholder="Message goes here..."
                                className={`form-input text-lg ${errors.message && 'border-gray-300 focus:border-green-600 ring-indigo-100'
                                    }`}
                                {...register('message', { required: 'Enter your Message' })}
                                rows={8}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            {isSubmitting ? (
                                <svg
                                    className='w-10 h-5 mx-auto text-white animate-spin'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                >
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'
                                    ></circle>
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                    ></path>
                                </svg>
                            ) : (
                                'Confirm Your Stay'
                            )}
                        </button>
                    </form>
                )}
                {isSubmitSuccessful && isSuccess && (
                    <>
                        <div className='flex flex-col items-center justify-center text-center text-white rounded-md mt-3'>
                            <svg
                                width='100'
                                height='100'
                                className='text-green-300'
                                viewBox='0 0 100 100'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z'
                                    stroke='currentColor'
                                    strokeWidth='3'
                                />
                            </svg>
                            <h3 className='py-5 text-2xl text-green-500'>Success</h3>
                            <p className='text-gray-700 md:px-3'>{Message}</p>
                            <button
                                className='mt-6 text-indigo-600 focus:outline-none'
                                onClick={() => reset()}
                            >
                                Go back
                            </button>
                        </div>
                    </>
                )}

                {isSubmitSuccessful && !isSuccess && (
                    <div className='flex flex-col items-center justify-center text-center text-white rounded-md'>
                        <svg
                            width='97'
                            height='97'
                            viewBox='0 0 97 97'
                            className='text-red-400'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z'
                                stroke='CurrentColor'
                                strokeWidth='3'
                            />
                        </svg>

                        <h3 className='text-2xl text-red-400 py-7'>
                            Oops, Something went wrong!
                        </h3>
                        <p className='text-gray-300 md:px-3'>{Message}</p>
                        <button
                            className='mt-5 focus:outline-none'
                            onClick={() => reset()}
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}