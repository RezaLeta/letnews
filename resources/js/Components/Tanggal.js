import React from 'react'

export default function Tanggal () {
     let tanggal = "";
     let namaHari = "Minggu Senin Selasa Rabu Kamis Jumat Sabtu";
     namaHari = namaHari.split(" ");
     let namabulan = [
         "Januari",
         "Februari",
         "Maret",
         "April",
         "Mei",
         "Juni",
         "Juli",
         "Agustus",
         "September",
         "Oktober",
         "November",
         "Desember",
     ];

     let tgl = new Date();
     let hari = tgl.getDay();
     let tanggalSkrng = tgl.getDate();
     let bulan = tgl.getMonth();
   
     tanggal = namaHari[hari] + ", " + namabulan[bulan] + " " + tanggalSkrng;
  return (
    <p className='ml-2 text-sm'>{tanggal}</p>
  )
}
