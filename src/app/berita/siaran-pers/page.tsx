import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Megaphone, Calendar, Clock, Eye, FileText, Download } from "lucide-react"

export default function SiaranPersPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Rapat Anggota Tahunan 2024 Berhasil Digelar",
      excerpt: "KOPKAR PELINDO berhasil menyelenggarakan Rapat Anggota Tahunan (RAT) tahun buku 2023 pada tanggal 15 Maret 2024 di Hotel Pelindo Jakarta. Acara yang dihadiri oleh 1.200 anggota ini berjalan dengan lancar dan menghasilkan beberapa keputusan strategis untuk kemajuan koperasi.",
      content: "Dalam sambutannya, Ketua KOPKAR PELINDO Budi Santoso menyampaikan apresiasi kepada seluruh anggota atas kepercayaan dan dukungan yang diberikan. 'RAT tahun ini menjadi momen penting untuk evaluasi kinerja dan perencanaan strategis ke depan,' ujarnya.",
      date: "15 Maret 2024",
      readTime: "5 menit",
      views: 234,
      author: "Humas KOPKAR PELINDO",
      category: "Rapat Anggota Tahunan",
      hasDownload: true
    },
    {
      id: 2,
      title: "Program Baru: Pinjaman Pendidikan dengan Bunga Rendah",
      excerpt: "KOPKAR PELINDO meluncurkan program pinjaman pendidikan dengan bunga khusus sebesar 6% per tahun untuk mendukung pendidikan anak anggota. Program ini merupakan wujud komitmen koperasi dalam meningkatkan kualitas sumber daya manusia anggota.",
      content: "Program pinjaman pendidikan ini dapat digunakan untuk biaya sekolah, kuliah, hingga kursus dan pelatihan. 'Kami percaya investasi pendidikan adalah investasi terbaik untuk masa depan,' kata Direktur Utama KOPKAR PELINDO.",
      date: "10 Maret 2024",
      readTime: "3 menit",
      views: 189,
      author: "Divisi Pelayanan Anggota",
      category: "Program Baru",
      hasDownload: true
    },
    {
      id: 3,
      title: "Kerjasama Strategis dengan Bank BNI",
      excerpt: "KOPKAR PELINDO menjalin kerjasama strategis dengan PT Bank Negara Indonesia (Persero) Tbk untuk pengembangan layanan digital dan perluasan jangkauan pelayanan kepada anggota.",
      content: "Kerjasama ini meliputi integrasi sistem pembayaran, pengembangan mobile banking khusus anggota, dan program edukasi keuangan digital. 'Sinergi ini akan meningkatkan aksesibilitas layanan kami,' jelas Ketua Kerjasama.",
      date: "5 Maret 2024",
      readTime: "4 menit",
      views: 156,
      author: "Divisi Kerjasama",
      category: "Kerjasama",
      hasDownload: false
    },
    {
      id: 4,
      title: "Penghargaan Koperasi Berprestasi Tingkat Provinsi",
      excerpt: "KOPKAR PELINDO kembali meraih penghargaan sebagai Koperasi Berprestasi Tingkat Provinsi DKI Jakarta tahun 2024 dalam kategori Koperasi Simpan Pinjam dengan aset di atas Rp 50 Miliar.",
      content: "Penghargaan ini diberikan oleh Dinas Koperasi dan UMKM Provinsi DKI Jakarta dan diterima langsung oleh Ketua KOPKAR PELINDO dalam acara puncak Hari Koperasi ke-77.",
      date: "28 Februari 2024",
      readTime: "3 menit",
      views: 298,
      author: "Humas KOPKAR PELINDO",
      category: "Penghargaan",
      hasDownload: true
    }
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
              <div className="bg-primary/10 rounded-lg p-3">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Siaran Pers</h1>
                <p className="text-xl text-muted-foreground">
                  Pengumuman resmi dan pernyataan pers dari pengurus KOPKAR PELINDO
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
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Total Siaran Pers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3.2K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.5</div>
                <div className="text-sm text-muted-foreground">Rata-rata Baca (menit)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">89</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{release.category}</Badge>
                      <span className="text-sm text-muted-foreground">{release.date}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{release.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{release.views}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{release.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {release.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {release.content}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Penulis:</span> {release.author}
                      </div>
                      <div className="flex gap-2">
                        {release.hasDownload && (
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Baca Selengkapnya
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

      {/* Archive */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arsip Siaran Pers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "2024", count: 12 },
                { year: "2023", count: 18 },
                { year: "2022", count: 15 },
                { year: "2021", count: 10 }
              ].map((archive) => (
                <Card key={archive.year} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Tahun {archive.year}</h3>
                        <p className="text-sm text-muted-foreground">{archive.count} Siaran Pers</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Lihat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hubungi Humas
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Untuk informasi lebih lanjut mengenai siaran pers, silakan hubungi tim humas kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              Email Humas
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Telepon: (021) 1234-5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}