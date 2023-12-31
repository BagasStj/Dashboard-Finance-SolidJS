import { Component, For } from 'solid-js';
import Header from '../../shared/components/header/header';
import './dashboard-page.css'

const DashboardPage: Component = () => {
    const pemasukan: any[] = [
        {
            title: 'Pemasukan Total',
            value_IDR: 123000,
            trends: 'naik',
            value_trend: '80%',
            transaksi: 80
        },
        {
            title: 'Pemasukan Total',
            value_IDR: 123000,
            trends: 'turun',
            value_trend: '20%',
            transaksi: 80
        },
        {
            title: 'Pemasukan Total',
            value_IDR: 123000,
            trends: 'naik',
            value_trend: '60%',
            transaksi: 80
        },
        {
            title: 'Pemasukan Total',
            value_IDR: 123000,
            trends: 'naik',
            value_trend: '80%',
            transaksi: 80
        }
    ]

    const formatNumber = (value: number) => {
        const formatted = value.toLocaleString("en-US", { useGrouping: true });
        return formatted
    };

    return (
        <>
            <div class='w-full h-svh' style={{ padding: '1vh 2vh 2vh 0vh' }}>
                <Header></Header>
                <div class='w-full py-2'>
                    <div class='w-full flex justify-between'>
                        <For each={pemasukan}>{(x) =>
                            <>
                                <div class='card-1 flex justify-start p-2 px-3 w-full'>
                                    <div>
                                        <div style={{ "font-size": '1vw', "font-weight": 500 }}>{x.title}</div>
                                        <div class='flex items-center' style={{ height: '12vh' }}>
                                            <div style={{ "font-size": '5vh', "font-weight": 500, width: '14vw' }}>IDR {formatNumber(x.value_IDR)}</div>
                                            <img src={`svg/trend_${x.trends}.svg`} style={{ height: '2.8vh' }} />
                                            <div style={x.trends == 'naik' ? { 'color': '#24ff00', "padding-left": '0.5vw', "font-size": '3vh' } : { 'color': '#fb3636', "font-size": '3vh', "padding-left": '0.5vw' }}>{x.value_trend}</div>
                                        </div>
                                        <div style={{ "font-size": '2vh', color: '#D8D8D8' }}>{x.transaksi} transaksi diterima</div>

                                    </div>

                                </div>
                            </>
                        }</For>
                    </div>
                    <div class='w-full'>
                        <div class='vertical-line'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage