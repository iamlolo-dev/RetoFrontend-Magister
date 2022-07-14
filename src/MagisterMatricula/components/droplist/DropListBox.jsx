import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export const DropListBox = ({ selected, setSelected, data }) => {

    return (
        <div className="mt-4 w-6/12 flex-1 text-gray-400 border bg-white border-txt-color-2 rounded-lg">
            <Listbox value={selected} onChange={setSelected}>
                <div>
                    <Listbox.Button
                        className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span className="block truncate">
                            {selected.name}
                        </span>

                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options
                            className="max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base text-grey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            {data.length > 1 ? (

                                data.map(({ item }) => (
                                    <>
                                        <Listbox.Option
                                            className={({ active }) =>
                                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-box-color text-white' : 'text-gray-900'
                                                }`
                                            }

                                            key={item.id}
                                            value={item}
                                            disabled={item.disabled}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                                    >
                                                        {item.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                        <hr />
                                    </>

                                ))
                            ) :
                                (
                                    data.map(({ id, disabled, name }) => (

                                        <Listbox.Option
                                            key={id}
                                            value={name}
                                            disabled={disabled}
                                        >
                                            {name}
                                        </Listbox.Option>
                                    ))
                                )
                            }

                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}