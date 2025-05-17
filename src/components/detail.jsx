import pic from './../icon/pic.png'
import './../util/util.css'
import './../styles/detail.css'


function Detail(){
    return(
        <div className='detail pad16 flex flex-dir flex-3 gap16'>
            <img src={pic} className='icon_big' alt='icon'/>
            <div className='flex flex-dir gap16'>
                <div className='flex flex-dir gap8'>
                    <label className='label'>Email</label>
                    <p className='label'>Ts6346298@gmail.com</p>
                </div>
                <div className='flex flex-dir gap8'>
                    <label className='label'>Phone</label>
                    <p className='label'>+91 9478181139</p>
                </div>
                <div className='flex flex-dir gap8'>
                    <label className='label'>Joined</label>
                    <p className='label'>12 Mar 2022</p>
                </div>
                <button className='BLOCK'>Block</button>
            </div>
        </div>

    )
}

export default Detail;