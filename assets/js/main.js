function myscopo() {
    const relogio = document.querySelector('.relogio');
    const contadorDiv = document.querySelector('.contadorDiv');
    const contador = document.querySelector('.contador');
    

    let time;
    let milesegundos = 1;

    horaAtual = () => {
        const newRelogio = new Date();
        let hora = newRelogio.getHours()
        let minutos = newRelogio.getMinutes()
        let segundos = newRelogio.getSeconds()

        if(hora < 10) hora = '0' + hora;
        if(minutos < 10) minutos = '0' + minutos;
        if(segundos < 10) segundos = '0' + segundos;

        
            return `${hora}:${minutos}:${segundos}`
    }
    
    setInterval(() => {
        relogio.innerHTML = horaAtual();
        }, 1000
    );

    
    
    horaContador = (milesegundos) => {
        let horaZerada = new Date(0, 0, 0, 0, 0, 0, milesegundos * 10);
        let hora = horaZerada.getHours();
        let minuto = horaZerada.getMinutes();
        let segundo = horaZerada.getSeconds();
        let milisegundos = horaZerada.getMilliseconds() / 10;

        if(hora < 10) hora = '0' + hora;
        if(minuto < 10) minuto = '0' + minuto;
        if(segundo < 10) segundo = '0' + segundo;
        if(milisegundos < 10) milisegundos = '0' + milisegundos;
        if(milisegundos > 99) milisegundos = '00';
        
        return `${hora}:${minuto}:${segundo}:${milisegundos}`
    }





    console.log(horaContador());
    console.log(relogio);

    function iniciarRelogio(){
        time = setInterval(function(){
            milesegundos++;
            contador.innerHTML = horaContador(milesegundos);
        }, 10)
    };


    contadorDiv.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('start')) {
            clearTimeout(time);
            console.log(iniciarRelogio())
            contador.classList.add('startClick');
            contador.classList.remove('pauseClick');
            contador.classList.remove('resetClick');
        }
        if(el.classList.contains('pause')) {
            clearTimeout(time);
            contador.classList.add('pauseClick');
            contador.classList.remove('resetClick');
        }
        if(el.classList.contains('reset')) {
            clearTimeout(time);
            contador.innerHTML = '00:00:00:00';
            milesegundos = 1;
            contador.classList.add('resetClick');
        }
    })

    
    console.log();
}

myscopo();