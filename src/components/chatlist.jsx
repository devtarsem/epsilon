import pic from './../icon/pic.png'
import './../util/util.css'
import './../styles/chatlist.css'


function ChatList(){
    return(
        <div className='chatlist'>
            {[1,2,3,4,5,6,7,8,9].map(el=>
                <div className="chatElelemt flex flex-1 pad16">
                    <div className='flex gap16 flex-1'>
                        <img src={pic} className='icon' alt='profile pic'/>
                        <div className='flex flex-dir gap'>
                            <h2 className='had2'>Tarsem singh</h2>
                            <p className='lastmsg'>Hello gepu how are you</p>
                        </div>
                    </div>
                    <p className='lastime'>4:53 pm</p>
                </div>
            )}
        </div>

    )
}

export default ChatList;