let app = new Vue({
    el: `#app`,
    data:
    {
        msg: ``,
        nombre: "Kirito",
        apellido: "Rodriguez",
        mostrar: false,
        lista: [],
        municipios: ['Mocoa', 'Villagarzon', 'Pto Caicedo', 'Pto Asis'],
        personas: [
            {
                nombre: "Seiya",
                celular: "123123125454312"
            },
            {
                nombre: "Seiya",
                celular: "123123122312"
            },
            {
                nombre: "Seiya",
                celular: "12312312312"
            }
        ]
    },
    methods:
    {
        guardar() {
            this.lista.push(this.msg)
            this.msg = " "
        }
    }
})




/* const url = 'https://jsonplaceholder.typicode.com/posts'
fetch(url).then((res) => res.json())
    .then(data => {
        let html = ''
        data.map((value) => {
            html += `<li>${value.body}</li>`
        })
        document.getElementById('post').innerHTML = html
    })
 */

