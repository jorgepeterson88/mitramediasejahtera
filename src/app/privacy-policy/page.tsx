import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
                PT FIRMA MEDIA SEJAHTERA ("kami," "perusahaan," atau "PT FIRMA MEDIA SEJAHTERA") 
                berkomitmen untuk melindungi privasi dan keamanan data pribadi pengguna website kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                melindungi, dan membagikan informasi pribadi Anda sesuai dengan standar internasional 
                termasuk General Data Protection Regulation (GDPR).
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Informasi yang Kami Kumpulkan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Data Pribadi yang Anda Berikan</h3>
                  <p className="text-gray-700">Kami dapat mengumpulkan informasi berikut:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat perusahaan atau rumah</li>
                    <li>Informasi bisnis dan kebutuhan proyek</li>
                    <li>Data lain yang Anda berikan melalui formulir kontak</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Data yang Dikumpulkan Secara Otomatis</h3>
                  <p className="text-gray-700">Kami secara otomatis mengumpulkan:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>Alamat IP dan informasi geografis</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Informasi tentang kunjungan website (waktu, durasi, halaman yang dikunjungi)</li>
                    <li>Cookies dan data tracking lainnya</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Penggunaan Data Pribadi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Merespons pertanyaan dan permintaan informasi</li>
                <li>Memberikan penawaran layanan yang sesuai dengan kebutuhan Anda</li>
                <li>Mengelola hubungan bisnis dan proyek</li>
                <li>Mengirimkan newsletter dan informasi relevan (dengan persetujuan Anda)</li>
                <li>Meningkatkan kualitas layanan dan website kami</li>
                <li>Mematuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Basis Hukum Pemrosesan Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Kami memproses data pribadi Anda berdasarkan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Konsent:</strong> Persetujuan eksplisit dari Anda untuk pemrosesan data tertentu</li>
                <li><strong>Kontrak:</strong> Ketika diperlukan untuk melaksanakan kontrak layanan dengan Anda</li>
                <li><strong>Kewajiban Hukum:</strong> Untuk mematuhi kewajiban hukum dan peraturan</li>
                <li><strong>Kepentingan Legitim:</strong> Untuk kepentingan bisnis yang sah dan seimbang</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Cookies dan Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Website kami menggunakan cookies untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic dan penggunaan website</li>
                <li>Mempersonalisasi pengalaman browsing</li>
                <li>Menampilkan iklan yang relevan</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Berbagi Data dengan Pihak Ketiga</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Kami tidak menjual atau menyewakan data pribadi Anda. Kami hanya membagi data dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dengan mitra bisnis terpercaya untuk penyediaan layanan</li>
                <li>Dengan penyedia layanan teknis (hosting, analytics, email marketing)</li>
                <li>Sesuai persetujuan Anda</li>
                <li>Untuk mematuhi hukum atau perintah resmi</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hak Anda sebagai Subjek Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Sesuai GDPR dan peraturan privasi lainnya, Anda memiliki hak:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Keberatan:</strong> Menolak pemrosesan data dalam keadaan tertentu</li>
                <li><strong>Penarikan Konsent:</strong> Menarik persetujuan yang telah diberikan</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Keamanan Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses tidak sah, penguburan, perubahan, atau penghancuran. Langkah-langkah ini termasuk enkripsi data, firewall, akses terbatas, dan monitoring keamanan berkelanjutan.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Retensi Data</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami menyimpan data pribadi Anda hanya selama diperlukan untuk tujuan pengumpulan atau sesuai dengan persyaratan hukum. Setelah periode retensi berakhir, data akan dihapus atau di-anonimkan secara aman.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Transfer Data Internasional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Data pribadi Anda dapat ditransfer ke dan diproses di negara lain selama penyedia layanan kami berada. Kami memastikan transfer data dilakukan dengan perlindungan yang memadai sesuai GDPR dan peraturan yang berlaku.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Anak di Bawah Umur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Website kami tidak ditujukan untuk anak di bawah 18 tahun. Kami tidak sengaja mengumpulkan data pribadi dari anak di bawah umur. Jika kami mengetahui telah mengumpulkan data dari anak di bawah umur, kami akan menghapus data tersebut segera.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Perubahan Kebijakan Privasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diinformasikan melalui website atau email. Kami menyarankan Anda untuk secara berkala meninjau kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@firmamedia.co.id</p>
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

export default PrivacyPolicy;