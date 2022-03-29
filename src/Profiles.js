import Cards from "./components/cards"

function Profiles({users}){
    const date = new Date();
    const time = date.getMinutes();
    return users.map((user)=>{
        return  <Cards key={user.id} time = {time}  user = {user}/>
    });
}

export default Profiles;