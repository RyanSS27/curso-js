var tvel = document.getElementById('tvel')
        var resp = document.getElementById('resp')

        function enviar() {
            var vel = Number(tvel.value) 
            resp.innerHTML += vel + ' km/hr'

            if (vel > 150) {
                resp.innerHTML += `<p><strong>EITAAAA! O mlk é o Brian???</strong></p>`
            }

            if (vel > 60) {
                resp.innerHTML += `<p>O veículo excedeu o limite de velocidade permitida, portanto, foi <strong>MULTADO</strong>.<p>`
            }

            resp.innerHTML += `<p>Use cinto de segurança.</p>`
        }