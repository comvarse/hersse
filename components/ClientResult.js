import React from 'react'

function ClientResult({ title }) {
    const clientResJson = [
        {
            title: "Client Results",
            img: `bg-[url("/img/data-finance.jpg")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "CBDC: Speed. Agility. Faster Go-to-Market to Accelerate Client Project Delivery",
            description: "We help supercharge client's go-to-market timelines with our vast expertise in smart contracts for Banking, Finance, Stock Markets and Back Office Operations. "
        },
        {
            title: "Client Results",
            img: `bg-[url("/img/data-analytics.jpg")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "Data Analytics, Machine Learning and Artificial Intelligence",
            description: "We rapidly deploy a proof of concept use case and implement the capability acrross our client's operating model and business processes"
        },
        {
            title: "Client Results",
            img: `bg-[url("/img/bitcoin.jpg")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "Blockchain, Crypto Currency, Web4 and Back Office Automation",
            description: "Businesses aiming to stay competitive need to embrace the power of blockchain. We help clients craft tailored blockchain solutions to address their unique needs and challenges."
        },
        {
            title: "Client Results",
            img: `bg-[url("/img/data-entry.jpg")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "Data Entry, Quality Assurance, Sanitization and Normalization",
            description: "We provide comprehensive data entry, sanitization, and normalization solutions tailored to the unique needs of clients using cutting-edge technologies to ensure accuracy, consistency, and reliability"
        },
    ]
    return (
        <>
            <div className='px-5'>
                <div className='max-w-[1300px] w-full mx-auto'>


                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-5  md:gap-8 lg:gap-10'>

                        {
                            clientResJson.map(item => (
                                <div key={item.img} className='grid grid-cols-1 mb-10 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6  '>
                                    <div className={`relative ${item.img} h-[300px] bg-cover bg-no-repeat bg-center`}>
                                        <span className='bg-black text-white font-extralight text-sm uppercase px-3 py-1 absolute'>Products</span>
                                    </div>
                                    <div className='border-b border-gray-300'>
                                        <div className='font-semibold text-[12px]'>{item.category}</div>
                                        <div className='font-bold text-[22px] mt-3 leading-[26px] md:text-[22px]'>{item.subtitle}</div>
                                        <div className='font-serif text-[16px] mt-4 pb-5'>{item.description}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div >
                <div className='h-8'></div>
            </div>

        </>
    )
}

export default ClientResult
