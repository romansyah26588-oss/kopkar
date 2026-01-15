import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Newspaper, Calendar, Clock, Eye, Users, Award, TrendingUp } from "lucide-react"

export default function WartaPage() {
  const wartaItems = [
    {
      id: 1,
      title: "Laporan Keuangan Audited Tahun 2023",
      excerpt: "Laporan keuangan audited KOPKAR PELINDO tahun buku 2023 menunjukkan pertumbuhan positif dengan total aset mencapai Rp 75 Miliar, meningkat 25% dari tahun sebelumnya. Rasio keuangan koperasi tetap sehat dengan rasio KPP 98%.",
      content: "Berdasarkan laporan dari Kantor AkPublik 'Rekan & Partner', KOPKAR PELINDO berhasil mencapai kinerja finansial yang memuaskan. Total simpanan anggota tumbuh 30% dan penyaluran kredit meningkat 28% dibandingkan tahun 2022.",
      date: "5 Maret 2024",
      readTime: "8 menit",
      views: 156,
      author: "Divisi Keuangan",
      category: "Laporan Keuangan",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Pelatihan Kewirausahaan Bagi Anggota Baru",
      excerpt: "Kegiatan pelatihan kewirausahaan diikuti oleh 50 anggota baru dengan materi mengenai perencanaan bisnis, manajemen keuangan, dan digital marketing. Pelatihan ini bertujuan meningkatkan kapasitas anggota dalam mengelola usaha mandiri.",
      content: "Pelatihan yang diselenggarakan selama 2 hari ini menghadirkan narasumber dari praktisi bisnis dan konsultan kewirausahaan. Peserta sangat antusias dan berkomitmen untuk mengimplementasikan ilmu yang didapat.",
      date: "28 Februari 2024",
      readTime: "4 menit",
      views: 98,
      author: "Divisi Pendidikan",
      category: "Pelatihan",
      icon: Users
    },
    {
      id: 3,
      title: "Kunjungan Kerja ke Koperasi Teladan Jawa Timur",
      excerpt: "Rombongan pengurus KOPKAR PELINDO melakukan studi banding ke Kospin Jasa sebagai koperasi teladan nasional. Kunjungan ini untuk belajar best practices dalam pengelolaan koperasi modern dan pelayanan digital.",
      content: "Selama 3 hari, rombongan mempelajari sistem manajemen, pengembangan produk digital, dan program pemberdayaan anggota. 'Banyak hal yang bisa kita adopsi untuk kemajuan KOPKAR PELINDO,' kata Ketua rombongan.",
      date: "20 Februari 2024",
      readTime: "6 menit",
      views: 145,
      author: "Divisi Pengembangan",
      category: "Studi Banding",
      icon: Award
    },
    {
      id: 4,
      title: "Program Bantuan Modal Usaha UMKM Anggota",
      excerpt: "KOPKAR PELINDO meluncurkan program bantuan modal usaha untuk anggota yang memiliki UMKM dengan bunga subsidi 3% per tahun. Program ini untuk mendukung pemulihan ekonomi pasca-pandemi.",
      content: "Program ini menyediakan plafon hingga Rp 50 juta per anggota dengan jangka waktu hingga 3 tahun. Hingga saat ini sudah 25 anggota yang mendapatkan bantuan modal melalui program ini.",
      date: "15 Februari 2024",
      readTime: "5 menit",
      views: 178,
      author: "Divisi Kredit",
      category: "Program",
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Sosialisasi Aplikasi Mobile KOPKAR PELINDO",
      excerpt: "Peluncuran aplikasi mobile untuk memudahkan anggota mengakses layanan koperasi secara digital. Aplikasi ini memiliki fitur cek saldo, pengajuan pinjaman, dan informasi kegiatan.",
      content: "Aplikasi yang dapat diunduh di Play Store dan App Store ini telah diuji coba oleh 100 anggota dengan respon positif. 'Ini adalah langkah digitalisasi kami untuk kemudahan anggota,' jelas Direktur IT.",
      date: "10 Februari 2024",
      readTime: "4 menit",
      views: 234,
      author: "Divisi IT",
      category: "Teknologi",
      icon: Award
    }
  ]

  const categories = [
    { name: "Laporan Keuangan", count: 8, color: "bg-green-100 text-green-600" },
    { name: "Pelatihan", count: 12, color: "bg-blue-100 text-blue-600" },
    { name: "Program", count: 15, color: "bg-purple-100 text-purple-600" },
    { name: "Studi Banding", count: 6, color: "bg-orange-100 text-orange-600" },
    { name: "Teknologi", count: 9, color: "bg-red-100 text-red-600" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/berita">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Berita
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-secondary/10 rounded-lg p-3">
                <Newspaper className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Warta Koprasi</h1>
                <p className="text-xl text-muted-foreground">
                  Berita mengenai kegiatan internal dan perkembangan KOPKAR PELINDO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">28</div>
                <div className="text-sm text-muted-foreground">Total Artikel</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">5.8K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">6.2</div>
                <div className="text-sm text-muted-foreground">Rata-rata Baca (menit)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">156</div>
                <div className="text-sm text-muted-foreground">Komentar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kategori Warta</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge key={category.name} variant="outline" className="px-3 py-1">
                  <span className={`w-2 h-2 rounded-full mr-2 ${category.color.split(' ')[0]}`}></span>
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warta Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {wartaItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-secondary/10 rounded-lg p-2">
                        <item.icon className="h-4 w-4 text-secondary" />
                      </div>
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Penulis:</span> {item.author}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Baca Selengkapnya
                        </Button>
                        <Button variant="ghost" size="sm">
                          Bagikan
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Artikel Populer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Rapat Anggota Tahunan 2023: Capaian dan Target",
                  views: 456,
                  date: "15 Januari 2024"
                },
                {
                  title: "Transformasi Digital KOPKAR PELINDO",
                  views: 389,
                  date: "20 Desember 2023"
                },
                {
                  title: "Program Kesejahteraan Anggota Tahun 2024",
                  views: 334,
                  date: "10 Desember 2023"
                },
                {
                  title: "Kinerja Keuangan Triwulan III 2023",
                  views: 298,
                  date: "5 November 2023"
                }
              ].map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 hover:text-primary cursor-pointer">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Berlangganan Warta Koprasi
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Dapatkan warta terbaru mengenai kegiatan dan perkembangan KOPKAR PELINDO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="px-4 py-2 rounded-lg text-foreground bg-background border border-background/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              Berlangganan
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}