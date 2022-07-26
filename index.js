
function myfunc() {
    let sub = document.querySelector(".submit");
    let botaoNome = document.querySelector(".nome");
    let botaoSenha = document.querySelector(".senha");
    let idade = document.querySelector(".idade")
    let reload = document.querySelector(".reload");
    let array1 = [];
    let total = document.querySelector(".total")

    sub.addEventListener("click", function () {
        pega(array1, botaoNome, idade, botaoSenha);
    });
    // Verifica(total,array1);
    reload.addEventListener("click", function () {
        reaload();
    })
    total.addEventListener("click",function(){
        IdadeSeparada(array1, sub,total);
    })

}
let pega = (arr, bn, bi, bs) => {
    let validation = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
    if (arr.length === 0) {
        let pessoa = {
            Nome: bn.value,
            Idade: bi.value,
            Senha: bs.value,
        }
        if (bn.value.length == 0 || bs.value.length == 0 || bi.value.length == 0) {
            return console.log("Faltou algo");
        }
        if(validation.test(bn.value) == false){
            return alert("No nome pode apenas digitar letras.")
        }
        arr.push(pessoa);
        return console.log(arr);
    } else {
        let pessoa = {
            Nome: bn.value,
            Idade: bi.value,
            Senha: bs.value,
        }

        if (bn.value.length == 0 || bs.value.length == 0 || bi.value.length == 0) {
            return console.log("Faltou algo");
        }
         if(validation.test(bn.value) == false){
            return alert("No nome pode apenas digitar letras.")
        }
        let encontrar = arr.filter((elemento) => {
            return elemento.Nome == pessoa.Nome;
        });
        if (encontrar.length == 1) {
            return alert("Nome existente");
        } else {
            arr.push(pessoa);
            return console.log(arr);
        }
    }
}

function reaload() {
    let confirmação = window.confirm("Certeza que deseja dar reload? Ira perder toda sua lista");
    if (confirmação == true) {
        document.location.reload(true);
    }
    else {
        alert("Show :)");
    }
}
let IdadeSeparada = ((to, sub,g) => {
    if(to.length == 0){
        return alert("Adicione uma pessoa");
    }
    let count = 0;
    let lado1 = document.querySelector(".lado");
    let lado2 = document.querySelector(".lad");
    let containermensagem = document.querySelector(".container-mensagem");
    let mensagemtopo = document.querySelector(".mensagem-topo");
    let mensagem = document.querySelector(".mensagem");
    let mensagemtopo2 = document.querySelector(".mensagem-topo2");



    if (containermensagem.classList == "container-mensagem cm") containermensagem.classList.remove("cm");
    else containermensagem.className += " cm";
    if (mensagemtopo.classList == "mensagem-topo mt") mensagemtopo.classList.remove("mt");
    else mensagemtopo.className += " mt";
    if (mensagem.classList == "mensagem m") mensagem.classList.remove("m");
    else mensagem.className += " m";
    if (lado1.classList == "lado l1") lado1.classList.remove("l1");
    else lado1.className += " l1";
    if (lado2.classList == "lad l2") lado2.classList.remove("l2");
    else lado2.className += " l2";
    if (mensagemtopo2.classList == "mensagem-topo2 mt2") {
        mensagemtopo2.classList.remove("mt2"); mensagemtopo2.innerHTML = "";
    } else {
        mensagemtopo2.className += " mt2";
        mensagemtopo2.innerHTML = `<h6>+18</h6> <h6>-18</h6>`;
    }
    desabilita(g);
    mensagemtopo.innerHTML = `<h5>Separado por idade</h5>`;
    lado1.innerHTML = "";
    lado2.innerHTML = "";
    to.map((element) => {
        if (element.Idade >= 18) {
            lado1.innerHTML += `<div class="pessoa1">
            <p>Nome:${element.Nome}</p>
            <p>Idade:${element.Idade}</p>
        </div>`
            count++;
        } else {
            lado2.innerHTML += `<div class="pessoa2">
            <p>Nome:${element.Nome}</p>
            <p>Idade:${element.Idade}</p>
        </div>`
            count++;
            // desabilita(g);
        }

    })
    sub.addEventListener("click", () => {
        if (to.length <= 0) {
            count = 0;
            lado1.innerHTML = "";
            lado2.innerHTML = "";
            to.map((element) => {
                if (element.Idade >= 18) {
                    lado1.innerHTML = `<div class="pessoa1">
            <p>Nome:${element.Nome}</p>
            <p>Idade:${element.Idade}</p>
        </div>`
                    count++;
                } else {
                    lado2.innerHTML = `<div class="pessoa2">
            <p>Nome:${element.Nome}</p>
            <p>Idade:${element.Idade}</p>
        </div>`
                    count++;
                }

            })
        } else {
            count = 0;
            lado1.innerHTML = "";
            lado2.innerHTML = "";
            to.map((element) => {
                if (element.Idade >= 18) {
                    lado1.innerHTML += `<div class="pessoa1">
                <p>Nome:${element.Nome}</p>
                <p>Idade:${element.Idade}</p>
            </div>`
                    count++;
                } else {
                    lado2.innerHTML += `<div class="pessoa2">
                <p>Nome:${element.Nome}</p>
                <p>Idade:${element.Idade}</p>
            </div>`
                    count++;
                }
            })
        }
        mensagemtopo.innerHTML = `Total de pessoas: ${count}`;
    })
    mensagemtopo.innerHTML = `Total de pessoas: ${count}`;
})
let desabilita = (tota)=>{
    let a = document.querySelector(".total");
    let b = a.parentNode;
    let c = b.removeChild(a);
    
}

