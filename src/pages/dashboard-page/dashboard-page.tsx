import { Component } from 'solid-js';
import Header from '../../shared/components/header/header';

const DashboardPage: Component = () => {
    return (
        <>
            <div class='w-full h-svh' style={{padding:'1vh 2vh 2vh 0vh'}}>
                <Header></Header>
                <div>PageDAshboard</div>
            </div>
        </>
    )
}

export default DashboardPage