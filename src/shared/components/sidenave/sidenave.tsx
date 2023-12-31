import { Component, For, createEffect, createSignal, Show } from 'solid-js';
import './sidenave.css'
import { useLocation, useNavigate } from '@solidjs/router';
import DialogConfirmLogout from '../dialog-confirm-logout/dialog-confirm-logout';
import * as store from '../../store/store'

const SideNave: Component = () => {
    const [isHovered, setHovered] = createSignal('');
    const [pages, setPages] = createSignal('/dashboard');


    const navigate = useNavigate();
    const pagesekarang = (evt: any) => {
        navigate(evt, { replace: true });
    }

    createEffect(() => {
        const location = useLocation()
        console.log('checkruter', location.pathname)
        setPages(location.pathname)
    })

    const listPagenyo: any = [
        {
            name: 'Dashboard',
            route: '/dashboard',
            img: 'svg/page_1.svg'
        },
        {
            name: 'Pemasukan',
            route: '/pemasukan',
            img: 'svg/page_2.svg'
        },
        {
            name: 'Report',
            route: '/report',
            img: 'svg/page_3.svg'
        },
        {
            name: 'Setting',
            route: '/setting',
            img: 'svg/page_5.svg'
        }
    ]

    const openDialog = () => {
        store.setopenConrimLogut(true)
    }

    return (
        <>
            <div class=' h-svh w-1/12  flex items-center'>
                <div class='gradient-border-sidenave flex justify-center'>
                    <div>
                        <div style={{ height: '10vh',"padding-top":'3vh' }} class='flex justify-center'>
                            <img src='/logo_1.png' style={{ height: '5vh' }}></img>
                        </div>
                        <div class='hrz-line'></div>
                        <For each={listPagenyo}>{(x , index) =>
                            <>
                                <div class='flex justify-center items-center relative z-20' style={{ height: '12vh' }}>
                                    <div class={pages().includes(x.route) ? 'route-isActived flex cursor-pointer' : 'hvr cursor-pointer flex'} onClick={() => { pagesekarang(x.route) }} onMouseEnter={() => setHovered(x.route)} onMouseLeave={() => setHovered('')}>
                                        <img src={x.img} style={{height:'3vh'}} class={pages().includes(x.route) ? 'img' : ''}></img>
                                        <div class={pages().includes(x.route) ? 'fn-ctnt-2' : 'fn-ctnt'} style={isHovered().includes(x.route) ? { display: 'block' } : { display: 'none' }}>{x.name}</div>
                                    </div>
                                </div>
                                <Show when={index() > 1 && index() < 3}>
                                    <div class='hrz-line'></div>
                                </Show>
                            </>


                        }</For>
                        <a class='flex justify-center items-center cursor-pointer z-50 relative' style={{"margin-top":'3vh'}} onClick={() => openDialog()} data-modal-target="popup-modal" data-modal-toggle="popup-modal" >
                            <img src='/svg/exit.svg' style={{height:'4vh'}} />
                        </a>
                    </div>
                </div>
            </div>
            <DialogConfirmLogout />
        </>

    )
}

export default SideNave