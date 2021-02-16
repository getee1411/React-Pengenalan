import React, { Component } from 'react';
import './App.css';
import Title from './Components/judul'
import FormInput from './Components/input'
import FormInput2 from './Components/input2'


const Alert = ({ type, message }) => (
  <div className={"alert alert-" + type} role="alert">
    {message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "danger",
      message: "Status BMI Mu",
      nilai1: '',
      nilai2: '',
      nominal: '',
      bunga: '',
      periode: '',
      jumlahAkhir: '',
      hargaAwal: '',
      ppn: '',
      diskon: '',
      hargaAkhir: '',
      biner: '',
      desimal: '',
      oktal: '',
      hexadesimal: '',
      jenisBil: '',
    }
  }

  //bmi
  changeNilai1 = (event) => {
    this.setState({ nilai1: event.target.value })
  }
  changeNilai2 = (event) => {
    this.setState({ nilai2: event.target.value })
  }

  getType = (berat, tinggi) => {
    var hasil = berat / (tinggi ** 2)
    var typeC

    if (hasil < 18.5) {
      typeC = "danger"
    } else if (hasil <= 24.9 && hasil >= 18.5) {
      typeC = "warning"
    } else if (hasil <= 29.9 && hasil >= 25) {
      typeC = "success"
    } else {
      typeC = "danger"
    }
    return typeC
  }

  getMessage = (berat, tinggi) => {
    var hasil = berat / (tinggi ** 2)
    var message

    if (hasil < 18.5) {
      message = "Kurang"
    } else if (hasil <= 24.9) {
      message = "Cukup"
    } else if (hasil <= 29.9) {
      message = "Normal"
    } else {
      message = "Obesitas"
    }
    return message
  }


  //cicilan bank
  changeNominal = (event) => {
    this.setState({ nominal: event.target.value })
  }
  changeBunga = (event) => {
    this.setState({ bunga: event.target.value })
  }
  changePeriode = (event) => {
    this.setState({ periode: event.target.value })
  }


  cicilanBank = (nominal, bunga, periode) => {
    var hasil = (nominal * bunga / 100 + Number(nominal)) / periode
    return hasil
  }


  //harga
  changeHargaAwal = (event) => {
    this.setState({ hargaAwal: event.target.value })
  }
  changePpn = (event) => {
    this.setState({ ppn: event.target.value })
  }
  changeDiskon = (event) => {
    this.setState({ diskon: event.target.value })
  }

  hargaAkhir = (hargaAwal, ppn, diskon) => {
    var hasil = Number(hargaAwal) + Number(hargaAwal * (ppn / 100) - Number(hargaAwal * (diskon / 100) ))
    var abs = Math.abs(hasil)
    return abs
  }


  //bilangan
  changejenisBil = (event) => {
    this.setState({ jenisBil: event.target.value })
  }
  changeBiner = (event) => {
    this.setState({ biner: event.target.value })
  }
  changeOktal = (event) => {
    this.setState({ oktal: event.target.value })
  }
  changeDesimal = (event) => {
    this.setState({ desimal: event.target.value })
  }
  changeHexadesimal = (event) => {
    this.setState({ hexadesimal: event.target.value })
  }

  hasilBilBinner = (biner, jenisBil) => {
    var hasil
    if (jenisBil == 10) {
      hasil = parseInt(biner, 2)
    } else if (jenisBil == 8) {
      hasil = parseInt(biner, 2).toString(8)
    } else if (jenisBil == 16) {
      hasil = parseInt(biner, 2).toString(16).toUpperCase();
    } else {
      hasil = ''
    }
    return hasil
  }

  hasilBilDesimal = (bilangan, jenisBil) => {
    var hasil
    if (jenisBil == 2) {
      hasil = (parseInt(bilangan)).toString(2)
    } else if (jenisBil == 8) {
      hasil = (parseInt(bilangan))
    } else if (jenisBil == 16) {
      hasil = (parseInt(bilangan)).toString(16).toUpperCase();
    } else {
      hasil = ''
    }
    return hasil
  }

  hasilBilOktal = (bilangan, jenisBil) => {
    var hasil
    if (jenisBil == 2) {
      hasil = (parseInt(bilangan, 8)).toString(2)
    } else if (jenisBil == 10) {
      hasil = parseInt(bilangan, 8)
    } else if (jenisBil == 16) {
      hasil = (parseInt(bilangan, 8)).toString(16).toUpperCase();
    } else {
      hasil = ''
    }
    return hasil
  }

  hasilBilHexa = (bilangan, jenisBil) => {
    var hasil
    if (jenisBil == 2) {
      hasil = (parseInt(bilangan, 16)).toString(2)
    } else if (jenisBil == 10) {
      hasil = parseInt(bilangan, 16)
    } else if (jenisBil == 8) {
      hasil = (parseInt(bilangan, 16)).toString(8).toUpperCase();
    } else {
      hasil = ''
    }
    return hasil
  }

  render() {


    //var bmi
    var berat = this.state.nilai1
    var tinggi = this.state.nilai2
    var type = this.getType(berat, tinggi)
    var message = this.getMessage(berat, tinggi)

    //var cicilan
    var nominal = this.state.nominal
    var bunga = this.state.bunga
    var periode = this.state.periode
    var total = this.cicilanBank(nominal, bunga, periode)


    //var harga
    var hargaAwal = this.state.hargaAwal
    var ppn = this.state.ppn
    var diskon = this.state.diskon
    var hargaAkhir = this.hargaAkhir(hargaAwal, ppn, diskon)


    //var biner
    var biner = this.state.biner
    var jenisBil = this.state.jenisBil
    var hasilBilBinner = this.hasilBilBinner(biner, jenisBil)

    //var desimal
    var desimal = this.state.desimal
    var hasilBilDesimal = this.hasilBilDesimal(desimal, jenisBil)

    //var oktal
    var oktal = this.state.oktal
    var hasilBilOktal = this.hasilBilOktal(oktal, jenisBil)

    //var heksadesimal
    var hexa = this.state.hexadesimal
    var hasilBilHexa = this.hasilBilHexa(hexa, jenisBil)



    return (
      <div class="container-fluid">
        <div class="row">

        {/* bmi */}
          <div class="col-md-6">
            <div class="container-fluid">
              <br></br>
              <Title type="secondary" header="Body Mass Index"></Title>
              <FormInput label="Berat" type="text">
                <input className="form-control" value={this.state.nilai1} onChange={this.changeNilai1} />
              </FormInput>
              <FormInput label="Tinggi" type="text">
                <input className="form-control" value={this.state.nilai2} onChange={this.changeNilai2} />
              </FormInput>
              <button type="submit" class="btn btn-info col" value="submit">Hitung</button>
              <br></br>
              <Title type="secondary" header="Hasil" id="rest">
                <Alert type={type} message={message}></Alert>
              </Title>
            </div>
          </div>

          {/* cicilan */}
          <div class="col-md-6">
            <div class="container-fluid">
              <br />
              <Title type="primary" header="Cicilan Bank"></Title>
              <FormInput label="Nominal" type="text">
                <input className="form-control" value={this.state.nominal} onChange={this.changeNominal} />
              </FormInput>
              <FormInput label="Bunga" type="text">
                <input className="form-control" value={this.state.bunga} onChange={this.changeBunga} />
              </FormInput>
              <FormInput label="Periode" type="text">
                <select className="form-control" name="type" value={this.state.periode}
                  onChange={this.changePeriode}>
                  <option value="3">3 Bulan</option>
                  <option value="6">6 Bulan</option>
                  <option value="9">9 Bulan</option>
                  <option value="12">12 Bulan</option>
                </select>
              </FormInput>

              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-primary col" value="submit">Hitung</button>
                <br></br>
                <input className="form-control" value={"Rp. " + total + ",00"} id="cicilanBank" />
              </Title>
            </div>
          </div>



          {/* harga */}
          <div class="col-md-6">
            <br />
            <br></br>
            <div class="container-fluid">
              <Title type="danger" header="Hitung Harga Akhir"></Title>
              <div class="container-fluid">
                <FormInput2 label="Harga Awal" type="text">
                  <input className="form-control" value={this.state.hargaAwal} onChange={this.changeHargaAwal} />
                </FormInput2>
                <FormInput2 label="PPN" type="text">
                  <input className="form-control" value={this.state.ppn} onChange={this.changePpn} />
                </FormInput2>
                <FormInput2 label="Diskon" type="text">
                  <input className="form-control" value={this.state.diskon} onChange={this.changeDiskon} />
                </FormInput2>
              </div>
              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-danger col" value="submit">Hitung</button>
                <p className="text-center">Harga akhir</p>
                <input className="form-control text-center" value={"Rp. " + hargaAkhir + ",00"} />
              </Title>
            </div>
          </div>


          <div class="col-md-6">
            <br></br>
            <br></br>
          </div>

          {/* biner */}
          <div class="col-md-6">
            <br></br>
            <br></br>
            <div class="container-fluid">
              <Title type="danger" header="Konversi Bilangan Biner"></Title>
              <div class="container-fluid">
                <FormInput2 label="Biner" type="text">
                  <input className="form-control" value={this.state.biner} onChange={this.changeBiner} />
                </FormInput2>
                <FormInput2 label="Pilihan Konversi" type="text">
                  <select className="form-control" name="type" value={this.state.jenisBil}
                    onChange={this.changejenisBil}>
                    <option value="10">Desimal</option>
                    <option value="8">Oktal</option>
                    <option value="16">Hexadesimal</option>
                  </select>
                </FormInput2>
              </div>
              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-danger col" value="submit">Hitung</button>
                <p className="text-center">Hasil</p>
                <input className="form-control text-center" value={hasilBilBinner} />
              </Title>
            </div>
          </div>


          {/* desimal */}
          <div class="col-md-6">
            <br/>
            <br></br>
            <div class="container-fluid">
              <Title type="danger" header="Konversi Bilangan Desimal"></Title>
              <div class="container-fluid">
                <FormInput2 label="Desimal" type="text">
                  <input className="form-control" value={this.state.desimal} onChange={this.changeDesimal} />
                </FormInput2>
                <FormInput2 label="Pilihan Konversi" type="text">
                  <select className="form-control" name="type" value={this.state.jenisBil}
                    onChange={this.changejenisBil}>
                    <option value="2">Biner</option>
                    <option value="8">Oktal</option>
                    <option value="16">Hexadesimal</option>
                  </select>
                </FormInput2>
              </div>
              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-danger col" value="submit">Hitung</button>
                <p className="text-center">Hasil</p>
                <input className="form-control text-center" value={hasilBilDesimal} />
              </Title>
            </div>
          </div>

          {/* oktal */}
          <div class="col-md-6">
            <br></br>
            <div class="container-fluid">
              <Title type="danger" header="Konversi Bilangan Oktal"></Title>
              <div class="container-fluid">
                <FormInput2 label="Oktal" type="text">
                  <input className="form-control" value={this.state.oktal} onChange={this.changeOktal} />
                </FormInput2>
                <FormInput2 label="Pilihan Konversi" type="text">
                  <select className="form-control" name="type" value={this.state.jenisBil}
                    onChange={this.changejenisBil}>
                    <option value="2">Biner</option>
                    <option value="10">Desimal</option>
                    <option value="16">Hexadesimal</option>
                  </select>
                </FormInput2>
              </div>
              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-danger col" value="submit">Hitung</button>
                <p className="text-center">Hasil</p>
                <input className="form-control text-center" value={hasilBilOktal} />
              </Title>
            </div>
          </div>

          {/* heksadesimal */}
          <div class="col-md-6">
            <br></br>
            <div class="container-fluid">
              <Title type="danger" header="Konversi Bilangan Hexadesimal"></Title>
              <div class="container-fluid">
                <FormInput2 label="Hexadesimal" type="text">
                  <input className="form-control" value={this.state.hexadesimal} onChange={this.changeHexadesimal} />
                </FormInput2>
                <FormInput2 label="Pilihan Konversi" type="text">
                  <select className="form-control" name="type" value={this.state.jenisBil}
                    onChange={this.changejenisBil}>
                    <option value="2">Biner</option>
                    <option value="10">Desimal</option>
                    <option value="8">Oktal</option>
                  </select>
                </FormInput2>
              </div>
              <Title type="secondary" id="rest">
                <button type="submit" class="btn btn-danger col" value="submit">Hitung</button>
                <p className="text-center">Hasil</p>
                <input className="form-control text-center" value={hasilBilHexa} />
                <div id="o"></div>
              </Title>
            </div>
          </div>
        </div>
      </div>
    )
  }


}



export default App;
