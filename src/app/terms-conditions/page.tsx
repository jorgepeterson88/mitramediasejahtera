import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Pendahuluan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di website PT FIRMA MEDIA SEJAHTERA. Syarat dan Ketentuan Penggunaan ini 
                ("Syarat dan Ketentuan") mengatur penggunaan website dan layanan yang disediakan oleh 
                PT FIRMA MEDIA SEJAHTERA ("kami," "perusahaan," atau "PT FIRMA MEDIA SEJAHTERA"). 
                Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Definisi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-700">
                <p><strong>"Website"</strong> merujuk pada situs web firmamedia.co.id dan semua subdomain terkait.</p>
                <p><strong>"Layanan"</strong> merujuk pada semua layanan yang disediakan oleh PT FIRMA MEDIA SEJAHTERA, termasuk layanan periklanan, konsultasi, dan infrastruktur media.</p>
                <p><strong>"Pengguna"</strong> merujuk pada individu atau entitas yang mengakses atau menggunakan website dan/atau layanan kami.</p>
                <p><strong>"Klien"</strong> merujuk pada pengguna yang menggunakan layanan berbayar kami.</p>
                <p><strong>"Konten"</strong> merujuk pada semua teks, gambar, video, dan materi lain yang tersedia di website.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Penerimaan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Dengan mengakses, browsing, atau menggunakan website kami, Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakui bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini</li>
                <li>Setuju untuk mematuhi semua hukum dan peraturan yang berlaku</li>
                <li>Setuju untuk mematuhi kebijakan privasi kami dan semua kebijakan lain yang dirujuk di sini</li>
                <li>Menyatakan bahwa Anda memiliki kapasitas hukum untuk terikat oleh Syarat dan Ketentuan ini</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hak dan Kewajiban Pengguna</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hak Pengguna</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Mengakses informasi tentang layanan kami</li>
                    <li>Menghubungi kami untuk konsultasi atau pertanyaan</li>
                    <li>Menggunakan website untuk tujuan yang sah dan legal</li>
                    <li>Meminta informasi tentang kebijakan privasi dan perlindungan data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Kewajiban Pengguna</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Tidak menggunakan website untuk tujuan ilegal atau tidak sah</li>
                    <li>Tidak mengganggu atau merusak fungsi website</li>
                    <li>Mematuhi semua hukum hak cipta dan kekayaan intelektual</li>
                    <li>Tidak mengirimkan materi yang berbahaya, virus, atau malware</li>
                    <li>Respect terhadap pengguna lain dan staf kami</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hak dan Kewajiban Perusahaan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hak Perusahaan</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Menyediakan layanan sesuai dengan spesifikasi yang disepakati</li>
                    <li>Menolak layanan kepada siapa pun dengan alasan yang sah</li>
                    <li>Memodifikasi atau menghentikan website atau layanan kapan saja</li>
                    <li>Mengubah Syarat dan Ketentuan dari waktu ke waktu</li>
                    <li>Melindungi hak kekayaan intelektual kami</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Kewajiban Perusahaan</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Menyediakan website yang aman dan berfungsi dengan baik</li>
                    <li>Memberikan layanan profesional dan berkualitas</li>
                    <li>Melindungi data pribadi pengguna sesuai kebijakan privasi</li>
                    <li>Merahasiakan informasi klien</li>
                    <li>Mematuhi semua hukum dan peraturan yang berlaku</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Layanan dan Produk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  PT FIRMA MEDIA SEJAHTERA menyediakan berbagai layanan periklanan outdoor media, termasuk:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Penyediaan dan pengelolaan billboard dan baliho</li>
                  <li>Layanan outdoor media advertising</li>
                  <li>Infrastruktur papan iklan</li>
                  <li>Perencanaan dan konsultasi proyek iklan</li>
                  <li>Desain dan produksi materi iklan</li>
                </ul>
                <p>
                  Semua layanan disediakan sesuai dengan ketentuan dan harga yang berlaku pada saat transaksi. 
                  Perusahaan berhak mengubah harga dan ketentuan layanan dengan pemberitahuan sebelumnya.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Pembayaran dan Penagihan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Untuk layanan berbayar, berlaku ketentuan berikut:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pembayaran harus dilakukan sesuai dengan faktur yang diterbitkan</li>
                  <li>Metode pembayaran yang tersedia akan diinformasikan pada faktur</li>
                  <li>Keterlambatan pembayaran dapat dikenakan denda</li>
                  <li>Perusahaan berhak menangguhkan layanan untuk pembayaran yang terlambat</li>
                  <li>Semua harga tidak termasuk pajak yang berlaku</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Semua konten, desain, logo, dan materi lain di website ini dilindungi oleh hukum hak cipta dan kekayaan intelektual. 
                Anda tidak boleh:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis</li>
                <li>Menggunakan logo atau merek dagang kami tanpa izin</li>
                <li>Membuat karya turunan dari konten website kami</li>
                <li>Menggunakan konten untuk tujuan komersial tanpa izin</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Privasi dan Data Pribadi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami. Dengan menggunakan website ini, 
                Anda setuju dengan pengumpulan, penggunaan, dan pemrosesan data pribadi Anda sebagaimana dijelaskan 
                dalam Kebijakan Privasi kami.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Batasan Tanggung Jawab</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sejauh diizinkan oleh hukum, PT FIRMA MEDIA SEJAHTERA tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kerugian langsung atau tidak langsung yang timbul dari penggunaan website</li>
                  <li>Kehilangan data atau informasi</li>
                  <li>Gangguan teknis atau downtime website</li>
                  <li>Konten dari pihak ketiga yang diakses melalui website kami</li>
                  <li>Kerusakan pada perangkat pengguna akibat penggunaan website</li>
                </ul>
                <p>
                  Website kami disediakan "sebagaimana adanya" tanpa jaminan apapun, baik tersurat maupun tersirat.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Indemnifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Anda setuju untuk mengganti rugi, membela, dan membebaskan PT FIRMA MEDIA SEJAHTERA dan 
                direktur, karyawan, dan agennya dari semua klaim, kerugian, tanggung jawab, dan biaya 
                (termasuk biaya hukum) yang timbul dari atau sehubungan dengan pelanggaran Anda terhadap 
                Syarat dan Ketentuan ini atau penggunaan website Anda yang melanggar hukum.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Penghentian Penggunaan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Kami berhak menghentikan atau menangguhkan akses Anda ke website jika:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Anda melanggar Syarat dan Ketentuan ini</li>
                <li>Anda menggunakan website untuk tujuan ilegal</li>
                <li>Anda membahayakan keamanan atau integritas website</li>
                <li>Dipersyaratkan oleh hukum atau peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Perubahan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku efektif 
                segera setelah dipublikasikan di website. Penggunaan berkelanjutan Anda atas website 
                setelah perubahan merupakan penerimaan Anda terhadap Syarat dan Ketentuan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hukum yang Berlaku</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau sehubungan dengan Syarat dan Ketentuan ini akan 
                diselesaikan melalui perundingan yang baik hati, dan jika tidak dapat diselesaikan, 
                akan diajukan ke pengadilan yang berwenang di Bandung, Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Kontak Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@firmamedia.co.id</p>
                <p><strong>Telepon:</strong> +6287855340730</p>
                <p><strong>Alamat:</strong> Happy Creative Hub, Jl. Cisitu Indah III No.2, Dago, Coblong, Bandung, Jawa Barat 40135</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;