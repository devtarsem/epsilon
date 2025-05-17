import './../util/util.css'
import './../styles/home.css'
import Nav from './nav';
import ChatList from './chatlist';
import ChatBox from './chatbox';
import Detail from './detail';

function Home(){
    return(
        <div className="home">
            <div className='chatsectionwhole'>
                <Nav/>
                <main className='main grid grid-12-col'>
                    <ChatList/>
                    <ChatBox/>
                    <Detail/>
                </main>

            </div>
        </div>
    )
}

export default Home;