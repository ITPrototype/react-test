function Reqres(page = 1){
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then((response) => response.json())
        .catch((err)=>{
            console.log(err)
        })
}
export default Reqres;
