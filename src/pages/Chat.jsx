// import Cardsrow from "../components/Cardsrow";

import Chatmodel from "../components/Chatmodel";
import Header from "../components/Header";

export default function Chat(){
    return(
        <>
        <Header/>
                <div className="p-2 text-orange-700 text-md flex bg-slate-400 justify-center">
                    <h2>Chat to our customer support bot!</h2>
                </div>
                <div className="flex justify-center  bg-slate-400 min-h-screen">
                    <Chatmodel/>
                </div>
        </>
    )
}