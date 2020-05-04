import React from 'react';
import './styles.css'
import whats from '../assets/whats.png'

const Header = ({children}) => {

    return (
        <div className='p-4 bg-indigo-800 sm:flex justify-between items-center'>
            {children}
        </div>
    );
    
}

const BtnWhats = () =>{
    return(
        <div className='bg-white rounded px-5 py-2 flex flex-col items-center mt-6 sm:flex-row sm:mt-0'>
        <img src={whats} width='60px' alt=""/>
        <div className='ml-2'>
            <h3 className='font-bold text-2xl'>Orçar seu projeto</h3>
            <p className='text-xs'>Projeto e orçamento sem compromisso </p>
            <p className='font-bold text-gray-600'>(21) 40028322</p>
        </div>
    </div>  
    );
}   

const Logo = () => {
    return(
        <div className='text-white'>
            <h1 className='font-bold text-2xl'>Lima</h1>
            <p className='text-xs'>Testando </p>  
        </div>
    );
}

const Index = () =>{
    return (
        <div>
            <Header>
                <Logo/>
                <div>
                    <BtnWhats/>
                </div>               
            </Header>
        </div>

    )
}

export default Index;