import { link } from './link.js';

export function ubah() {
            let id = 3;
            let data = {
                pelanggan: 'Hardini F',
                alamat: 'Hansacom',
                telp: '089630000568'
            };
            link.put('/pelanggan/' + id, data).then(res => {
                console.log(res)
                let tampil = `<h1>${res.data.pesan}</h1> `;
                document.querySelector("#out").innerHTML = tampil;
            });
        }