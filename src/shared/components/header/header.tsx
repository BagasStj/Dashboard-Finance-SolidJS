import { Component, createEffect, createSignal, onCleanup } from 'solid-js'
import './header.css'

const Header: Component = () => {
    const [formattedDateTime, setFormattedDateTime] = createSignal("");


    createEffect(() => {
        formatDateTime()
    })
    const formatDateTime = () => {
        const options: any = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
        };

        const now = new Date();
        const formatted = new Intl.DateTimeFormat("id-ID", options).format(now);

        setFormattedDateTime(formatted);
    };
    const intervalId = setInterval(formatDateTime, 1000);
    onCleanup(() => {
        clearInterval(intervalId);
    });
    return (
        <>
            <div class='flex items-center' style={{ height: '10vh' }} >
                <div class='leading-2 w-1/2 justify-start'>
                    <div class='flex'>
                        <div style={{ "font-size": '3.5vh', "font-weight": 700 }}> Selamat Datang Kembali Dek ,</div>
                        <div style={{ "font-size": '3.5vh', "font-weight": 700 }} class="waving" data-hover="👋"></div>
                    </div>
                    <div style={{ "font-size": '2vh' }}>{formattedDateTime()}</div>
                </div>
                <div class='w-1/2 justify-end flex'>
                    <div class='flex items-center'>
                        <div>
                            <div style={{"font-size":'2.3vh',"font-weight":600}}>Kentut Mendidih</div>
                            <div  style={{"font-size":'1.5vh',"font-weight":500}}>AsepOliSamping@gmail.com</div>
                        </div>
                        <img src='svg/pp.png' style={{height:'5vh',"border-radius":'4vh',"margin-left":'1vw'}}/>
                        
                    </div>
                    <div class='border-r-2 divide-solid mx-3'></div>
                    <div class='flex items-center'>
                        <div>
                            <div class='jkt'>Dihatimu</div>
                            <div class='suhu'>32 °C </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6vh" height="6vh" viewBox="0 0 61 53" fill="#D6B404">
                            <path d="M33.4791 52.5H26.4374L27.7916 51.6797C28.6944 51.1328 29.6761 50.5203 30.7369 49.8422C31.7977 49.1641 32.7794 48.5516 33.6822 48.0047L35.0364 47.1844C38.6926 46.9219 42.0668 45.85 45.1588 43.9687C48.2508 42.0875 50.6996 39.5719 52.5051 36.4219C48.6232 36.0719 44.9444 35.1203 41.4687 33.5672C37.993 32.0141 34.8784 29.9031 32.1249 27.2344C29.3714 24.5656 27.1822 21.5469 25.5572 18.1781C23.9322 14.8094 22.9617 11.2437 22.6458 7.48125C19.1701 9.3625 16.4504 11.9547 14.4869 15.2578C12.5234 18.5609 11.5416 22.1375 11.5416 25.9875V26.775L10.7291 27.1359C10.1874 27.3766 9.58933 27.6281 8.93481 27.8906C8.2803 28.1531 7.68221 28.4047 7.14054 28.6453L6.32804 29.0062C6.23777 28.525 6.18134 28.0219 6.15877 27.4969C6.1362 26.9719 6.12492 26.4687 6.12492 25.9875C6.12492 19.6 8.22388 13.9672 12.4218 9.08906C16.6197 4.21094 21.9687 1.18125 28.4687 0C27.6562 4.33125 27.9044 8.56406 29.2135 12.6984C30.5225 16.8328 32.7794 20.4531 35.9843 23.5594C39.1892 26.6656 42.9244 28.8531 47.19 30.1219C51.4556 31.3906 55.8228 31.6312 60.2916 30.8437C59.118 37.1437 56.0034 42.3281 50.9478 46.3969C45.8923 50.4656 40.0694 52.5 33.4791 52.5ZM14.2499 47.25H26.4374C27.5659 47.25 28.5251 46.8672 29.315 46.1016C30.105 45.3359 30.4999 44.4062 30.4999 43.3125C30.4999 42.2188 30.1162 41.2891 29.3489 40.5234C28.5815 39.7578 27.6562 39.375 26.5728 39.375H23.052L21.6978 36.225C21.0659 34.7812 20.0728 33.6328 18.7187 32.7797C17.3645 31.9266 15.8749 31.5 14.2499 31.5C11.993 31.5 10.0746 32.2547 8.49471 33.7641C6.91485 35.2734 6.12492 37.1437 6.12492 39.375C6.12492 41.5625 6.91485 43.4219 8.49471 44.9531C10.0746 46.4844 11.993 47.25 14.2499 47.25ZM14.2499 52.5C10.5034 52.5 7.30981 51.2203 4.66919 48.6609C2.02856 46.1016 0.708252 43.0062 0.708252 39.375C0.708252 35.7437 2.02856 32.6484 4.66919 30.0891C7.30981 27.5297 10.5034 26.25 14.2499 26.25C16.9583 26.25 19.4296 26.9609 21.664 28.3828C23.8984 29.8047 25.5572 31.7187 26.6405 34.125C29.2135 34.2125 31.4027 35.1422 33.2082 36.9141C35.0138 38.6859 35.9166 40.8187 35.9166 43.3125C35.9166 45.85 34.9912 48.0156 33.1405 49.8094C31.2898 51.6031 29.0555 52.5 26.4374 52.5H14.2499Z" fill="#D6B404" />
                        </svg>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header