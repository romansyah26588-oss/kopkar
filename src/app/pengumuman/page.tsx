import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Calendar, Clock, Eye, AlertCircle, Info, CheckCircle, XCircle, ArrowRight } from "lucide-react"

export default function PengumumanPage() {
  const announcements = [
    {
      id: 1,
      title: "Program Baru: Pinjaman Pendidikan dengan Bunga Rendah",
      content: "KOPKAR PELINDO dengan bangga meluncurkan program pinjaman pendidikan dengan bunga khusus sebesar 6% per tahun untuk mendukung pendidikan anak anggota. Program ini dapat digunakan untuk biaya sekolah, kuliah, hingga kursus dan pelatihan.",
      category: "Program Baru",
      date: "10 Maret 2024",
      readTime: "3 menit",
      views: 189,
      author: "Divisi Pelayanan Anggota",
      priority: "high",
      status: "active",
      expiryDate: "30 Juni 2024"
    },
    {
      id: 2,
      title: "Pemeliharaan Sistem Mobile Banking 15-17 Maret 2024",
      content: "Dalam rangka peningkatan layanan, sistem mobile banking akan mengalami pemeliharaan pada tanggal 15-17 Maret 2024. Selama periode tersebut, beberapa fitur mungkin tidak dapat diakses. Mohon maaf atas ketidaknyamanannya.",
      category: "Pemeliharaan Sistem",
      date: "12 Maret 2024",
      readTime: "2 menit",
      views: 267,
      author: "Divisi IT",
      priority: "high",
      status: "active",
      expiryDate: "17 Maret 2024"
    },
    {
      id: 3,
      title: "Perubahan Jam Operasional Kantor Selama Ramadhan",
      content: "Menyambut bulan suci Ramadhan 1445 H, jam operasional kantor KOPKAR PELINDO akan disesuaikan. Senin-Kamis: 08:00-15:00, Jumat: 08:00-14:30. Layanan online tetap tersedia 24/7.",
      category: "Informasi Operasional",
      date: "8 Maret 2024",
      readTime: "2 menit",
      views: 345,
      author: "Humas KOPKAR PELINDO",
      priority: "medium",
      status: "active",
      expiryDate: "10 April 2024"
    },
    {
      id: 4,
      title: "Pengumuman Pemenang Undian Anggota Berhadiah",
      content: "Selamat kepada para pemenang undian anggota berhadiah periode Januari-Maret 2024. Pemenang dapat menghubungi kantor kami untuk proses klaim hadiah. Daftar pemenang dapat dilihat di pengumuman selengkapnya.",
      category: "Promosi",
      date: "5 Maret 2024",
      readTime: "4 menit",
      views: 456,
      author: "Divisi Marketing",
      priority: "medium",
      status: "active",
      expiryDate: "31 Maret 2024"
    },
    {
      id: 5,
      title: "Peluncuran Aplikasi Mobile KOPKAR PELINDO v2.0",
      content: "Kami dengan gembira mengumumkan peluncuran aplikasi mobile KOPKAR PELINDO versi 2.0 dengan fitur baru: transfer antar anggota, pembayaran tagihan, dan notifikasi real-time. Update sekarang juga!",
      category: "Teknologi",
      date: "1 Maret 2024",
      readTime: "3 menit",
      views: 234,
      author: "Divisi IT",
      priority: "low",
      status: "active",
      expiryDate: "31 Mei 2024"
    },
    {
      id: 6,
      title: "Pembayaran SHU Tahun Buku 2023",
      content: "Pembayaran Sisa Hasil Usaha (SHU) tahun buku 2023 akan dimulai pada tanggal 20 Maret 2024. Anggota dapat memilih metode transfer atau tunai. Pastikan data rekening Anda sudah valid.",
      category: "Keuangan",
      date: "25 Februari 2024",
      readTime: "3 menit",
      views: 567,
      author: "Divisi Keuangan",
      priority: "high",
      status: "active",
      expiryDate: "30 April 2024"
    }
  ]

  const categories = [
    { name: "Semua", count: 24, color: "bg-gray-100 text-gray-600" },
    { name: "Program Baru", count: 6, color: "bg-green-100 text-green-600" },
    { name: "Pemeliharaan Sistem", count: 4, color: "bg-red-100 text-red-600" },
    { name: "Informasi Operasional", count: 8, color: "bg-blue-100 text-blue-600" },
    { name: "Promosi", count: 3, color: "bg-purple-100 text-purple-600" },
    { name: "Teknologi", count: 5, color: "bg-orange-100 text-orange-600" },
    { name: "Keuangan", count: 7, color: "bg-yellow-100 text-yellow-600" }
  ]

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case 'medium':
        return <Info className="h-4 w-4 text-yellow-500" />
      case 'low':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-3">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Pengumuman
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dapatkan informasi penting dan pengumuman terbaru dari KOPKAR PELINDO
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-sm text-muted-foreground">Total Pengumuman</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Aktif Saat Ini</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3.2K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Tingkat Baca</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kategori Pengumuman</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Badge 
                  key={category.name} 
                  variant="outline" 
                  className="px-3 py-1 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className={`w-2 h-2 rounded-full mr-2 ${category.color.split(' ')[0]}`}></span>
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Pengumuman Aktif</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter Tanggal
                </Button>
                <Button variant="outline" size="sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Filter Prioritas
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {getPriorityIcon(announcement.priority)}
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(announcement.priority)}`}
                        >
                          {announcement.priority === 'high' ? 'Penting' : 
                           announcement.priority === 'medium' ? 'Sedang' : 'Biasa'}
                        </Badge>
                        <Badge variant="outline">{announcement.category}</Badge>
                        <Badge variant="default" className="bg-green-500 text-green-50">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Aktif
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{announcement.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {announcement.content}
                    </CardDescription>
                    {announcement.expiryDate && (
                      <div className="mt-3 text-sm text-muted-foreground">
                        <span className="font-medium">Berlaku hingga:</span> {announcement.expiryDate}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{announcement.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{announcement.views}</span>
                        </div>
                        <span className="font-medium">Penulis:</span> {announcement.author}
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Arsip Pengumuman
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { month: "Maret 2024", count: 6, description: "6 pengumuman" },
                { month: "Februari 2024", count: 8, description: "8 pengumuman" },
                { month: "Januari 2024", count: 5, description: "5 pengumuman" },
                { month: "Desember 2023", count: 7, description: "7 pengumuman" }
              ].map((archive) => (
                <Card key={archive.month} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{archive.month}</h3>
                        <p className="text-sm text-muted-foreground">{archive.description}</p>
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

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Berlangganan Pengumuman
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Dapatkan pengumuman penting langsung di inbox Anda melalui email dan notifikasi mobile
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
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>Mobile Push</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span>SMS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jika Anda memiliki pertanyaan mengenai pengumuman, silakan hubungi kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Megaphone className="mr-2 h-4 w-4" />
                Hubungi Humas
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Jadwal Pengumuman
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}