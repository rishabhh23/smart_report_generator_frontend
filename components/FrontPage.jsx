import redcliffe from '../src/assets/redcliffe.jpeg'
import front from '../src/assets/front-page-full.jpg'
// import { f } from 'html2pdf.js';

export default function FrontPage({ users }){
    return(
        <div className="front-page">
            <img
                src={front}
                alt="Redcliffe Labs"
                // width={120}  
                // height={40} 
                className='front-page-image'
            />
            <div className='front-page-details'>
                Prepared for :-
                <div className='front-page-user-name'>{users[0].customer_name}</div>
                <div>{users[0].booking_id}</div>
            </div>
        </div>
    )
}