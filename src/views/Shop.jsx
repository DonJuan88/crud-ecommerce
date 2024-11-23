

function Shop() {
    let item = data

    return (
      <div>
        <main className="container mx-auto px-5 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
            {item.map((t) =>(
              // eslint-disable-next-line react/jsx-key
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <img src={t.url_image} alt="Product Image" className="w-full h-3/5 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
                  <p className="text-gray-600 mt-2 text-right">Rp({t.saleprice})</p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-900">
                    Add to Cart
                  </button>
                </div>
              </div>
        ))}
        </div>
        </main>
        </div>)
}



const data = [
  {
    ID: 1,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",
    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/98/MTA-155702275/adinata_batik_dress_anak_batik_ayunina_full01_u4qhey0e.jpg",
    saleprice: "360k",
  },
  {
    ID: 2,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",
    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/100/MTA-178830107/no-brand_kaos-anak-gambar-labubu-perempuan-unisex-usia-1-2-3-4-5-6-7-8-9-10-tahun_full13.jpg",
    saleprice: "250k",
  },
  {
    ID: 3,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-27009386/no_brand_dress_putih_anak_perempuan_model_tutu_flower_full01_715de26f.jpg",
    saleprice: "460k",
  },
  {
    ID: 4,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//106/MTA-50244999/brd-15752_little-x-eight-girl-shabila-t-shirt_full03.jpg",
    saleprice: "245k",
  },
  {
    ID: 5,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//103/MTA-38791650/no-brand_dress-corsage-ungu-534-party-dress-baju-anak-perempuan_full01.jpg",
    saleprice: "670k",
  },
  {
    ID: 6,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-72846020/inficlo_jaket-sweater-anak-laki-laki-inficlo-original-distro-branded-ssn-117_full01.jpg",
    saleprice: "360k",
  },
  {
    ID: 7,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-13330273/china_brand_dress_anak_perempuan_pretty_chest__full02_e3w335bc.jpg",
    saleprice: "394k",
  },
  {
    ID: 8,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",

    url_image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//110/MTA-8949269/no_brand_baju_kaos_perempuan_cewek_bayi_balita_anak_1-8tahun_unicorn_magical_-_kaos_anak_perempuan_unicorn_ungu_full01_n6eejxj4.jpg",
    saleprice: "360k",
  },
  {
    ID: 9,
    code: "KB0001",
    barcode: "737374839292",
    name: "Baju Anak Modern",
    desc: "Baju anak menarik dengan warna pastel yang pasti disukai oleh anak-anak anda.",
    url_image:
      "https://bajuyuli.com/uploads/products/data/sc202008/6-gambar-model-baju-anak-laki-laki-muslim-terbaru-2021-tpa.WEBP",
    saleprice: "360k",
  },
];
export default Shop