(()=>{
    const $listado=document.getElementById("listado")
    $fragment = document.createDocumentFragment()


    async function getData() {
        try {
            let res= await axios.get("https://jsonplaceholder.typicode.com/users")
            json = await res.data;
            

            json.forEach((el)=>{
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

            })
            $listado.appendChild($fragment)
        } catch (error) {
            
        }
    }
    getData()
    
 })()