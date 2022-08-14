const d = document
let btn_matricula1 = d.querySelector("#matricula1")
btn_matricula1.addEventListener("click" , e =>{
    let img_matricula1 = d.querySelector("#imgmatricula1")
    let form = d.querySelector("#form")
    let pinfo = d.querySelector("#pinfo")
    img_matricula1.classList.toggle("d-none")
    form.classList.toggle("d-none")
    
    if(img_matricula1.classList.contains("d-none")){
        let mess1 = `<b>Atras</b>`
        pinfo.classList.toggle("d-none")
        btn_matricula1.innerHTML = mess1
        let mess = "Ya eres uno de nuestros estudiantes!!"
        
    }else{
        btn_matricula1.innerHTML = "Matricula ya!!"
        pinfo.classList.remove("d-none")
        
    }
})

let btn_enviar = d.querySelector("#btn_enviar")
btn_enviar.addEventListener("click" , e => {
    e.preventDefault()
    var loading = d.querySelector(".loading")
    var form = d.querySelector(".form")
    
    loading.classList.remove("d-none")
    form.classList.add("d-none")

    const stopfunction = setTimeout(function(){
        loading.classList.add("d-none")
        form.classList.remove("d-none")
        
    } , 3000)
})

/*let btn_enviar2 = d.querySelector("#btn_enviar2")
btn_enviar2.addEventListener("click" , e => {
    e.preventDefault()
    var loading2 = d.querySelector(".loading2")
    var form2 = d.querySelector("#form2")
    
    loading2.classList.remove("d-none")
    form2.classList.add("d-none")

    const stopfunction = setTimeout(function(){
        loading2.classList.add("d-none")
        form2.classList.remove("d-none")
        
    } , 3000)
})*/

let btn_matricula2 = d.querySelector("#btn_matricula2")
btn_matricula2.addEventListener("click" , e =>{
    let img_matricula2 = d.querySelector("#imgmatricula2")
    let form2 = d.querySelector("#form2")
    let pinfo2 = d.querySelector("#pinfo2")
    img_matricula2.classList.toggle("d-none")
    form2.classList.toggle("d-none")

    if(img_matricula2.classList.contains("d-none")){
        console.log("true")
        let mess1 = `<b>Atras</b>`
        pinfo2.classList.toggle("d-none")
        console.log(pinfo2)
        btn_matricula2.innerHTML = mess1
        let mess = "Ya eres uno de nuestros estudiantes!!"
        
    }else{
        console.log("false")
        btn_matricula2.innerHTML = "Matricula ya!!"
        pinfo2.classList.remove("d-none")
        
    }
})

let btn_matricula3 = d.querySelector("#btn_matricula3")
btn_matricula3.addEventListener("click" , e =>{
    let img_matricula3 = d.querySelector("#imgmatricula3")
    let form3 = d.querySelector("#form3")
    let pinfo3 = d.querySelector("#pinfo3")
    img_matricula3.classList.toggle("d-none")
    form3.classList.toggle("d-none")

    if(img_matricula3.classList.contains("d-none")){
        console.log("true")
        let mess1 = `<b>Atras</b>`
        pinfo3.classList.toggle("d-none")
        btn_matricula3.innerHTML = mess1
        let mess = "Ya eres uno de nuestros estudiantes!!"
        
    }else{
        console.log("false")
        btn_matricula3.innerHTML = "Matricula ya!!"
        pinfo3.classList.remove("d-none")
        
    }
})

let cal = d.querySelectorAll(".cal")
console.log(cal)

cal.forEach(el => {
    el.addEventListener("click" , e =>{
        let cards = d.querySelectorAll(".card")
        console.log(cards)
        cards.forEach(el =>{
            if(el.id === e.target.id){
                let mural = d.querySelector("#mural")
                let show_cards = d.querySelector("#show_card")
                let name = d.querySelector("#name")
                
                mural.classList.add("d-none")
                show_cards.classList.remove("d-none")
                show_cards.dataset = el.dataset.name
                name.innerHTML = el.dataset.name
            }else{
                console.log("no")
            }
        })
    })
})

let btn_calif = d.querySelector("#btn_calif")
btn_calif.addEventListener("click" , e=>{
    let show_cards = d.querySelector("#show_card")
    mural.classList.remove("d-none")
    show_cards.classList.add("d-none")
})

let bts_star = d.querySelectorAll("#estrella")
bts_star.forEach(el =>{
    el.addEventListener("click" , e =>{
        let imgs = d.querySelectorAll("#star")
        imgs.forEach(i =>{
            console.log(i.dataset.valor)
            if(el.dataset.valor >= i.dataset.valor){
                i.src = "acaimg/concolor.png"
            } else {
                i.src = "acaimg/estrellaoscura2.png"             
            }    
        })
        
    })
})
