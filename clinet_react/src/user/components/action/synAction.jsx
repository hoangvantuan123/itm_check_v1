import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Input, Modal, Typography, Dropdown, Menu, Button } from 'antd'
import { GetTableName } from '../../../features/import/getTable'
import ImportForm from '../import'

const { Title } = Typography

const SynIcon = () => {
    return (
        <svg  className='w-4 h-4 opacity-65' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    )
}
export default function SynAction({ fetchData, isOpen }) {


    return (
        <>
            <Button size="large" className="bg-white">
                <SynIcon /> 
            </Button>
        </>
    )
}
