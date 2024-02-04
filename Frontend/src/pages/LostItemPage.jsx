import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function LostItemPage() {
    const [itemData, setItemData] = useState('');
    async function getItemData() {
        try {
            const response = await axios.get('/api/item/');
            setItemData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getItemData();
    },[])

    return (
        <div className='w-full  h-H90vh flex gap-x-8 justify-center items-center flex-wrap' >
            {itemData ? itemData.map((item)=>{
                return (
                    <div key={Math.random()} className=' w-1/5 h-1/3 border-b05 border-slate-300 gap-y-1 flex flex-col justify-center items-center'>
                        <img src={item.img} alt={item.name} className=' w-10/12 h-2/4 rounded-md'/>
                        <div className=' w-10/12 border-b05 border-slate-200 flex flex-col gap-y-2'>
                        <h1 className='text-xl font-medium font-sans'>{item.desc}</h1>
                        <p className='text-lg font-normal'>{item.contact}</p>
                        <p className=' text-sm font-normal'>{item.createdAt}</p>
                        </div>
                    </div>
                )
            }): <h1>Loading ...</h1>}
        </div>
    )
}
