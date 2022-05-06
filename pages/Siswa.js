import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama = ['Brian','Jaeden','Wesley']

    return (
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    );
}

export default Siswa;