import { RadioGroup } from '@headlessui/react'

export const ButtonGroup = ({setSelected, selected, data }) => {

    return (
        <RadioGroup value={selected} onChange={setSelected} className='w-3/4 text-black m-5 grid flex-row content-center grid-cols-2'>

            {data.map((item) => (
                <>
                    <RadioGroup.Option
                        value={item}
                        className={({ active, checked }) =>
                            `${active  ? 'rounded-xl border bg-white border-txt-color-2 rounded-lg py-2 px-6 text-txt-color-2 m-2 text-center' : 'rounded-xl border bg-white border-txt-color-2 rounded-lg py-2 px-6 text-txt-color-2 m-2 text-center'}
                            ${checked ? 'bg-box-color text-white' : 'bg-white'} cursor-pointer rounded-lg shadow-md `}
                        key={item.id}
                    >
                            <span>{item.id === 1 ? `${item.name} (recomendado)` : item.name}</span>
                    </RadioGroup.Option>
                </>
            ))}

        </RadioGroup>
    )
}