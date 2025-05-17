import pic from './../icon/pic.png'
import './../util/util.css'
import './../styles/chatbox.css'


function ChatBox(){
    return(
        <div className="chatbox flex flex-dir">
            <div className='proftop flex flex-1 pad16'>
                <div className='flex gap16 flex-1'>
                    <img src={pic} className='icon' alt='profile pic'/>
                    <div className='flex flex-dir gap'>
                        <h2 className='had2'>Tarsem singh</h2>
                    </div>
                </div>
                <p className='lastime'>online</p>
            </div>
            <div className='chatarea'>
                <div className='textdisplay'>

                </div>
                <div className='typing'>
                    <div className='flex flex-1 pad16'>
                        <input className='inp' type='text' placeholder='hello!'/>
                        <button className='sendMSg'>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChatBox;