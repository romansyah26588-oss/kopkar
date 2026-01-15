import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Download, Eye, FileText, Users, Award, MapPin, Clock } from "lucide-react"

export default function KegiatanPage() {
  const activityReports = [
    {
      id: 1,
      title: "Dokumentasi Rapat Anggota Tahunan 2024",
      description: "Dokumentasi lengkap Rapat Anggota Tahunan 2024 yang dihadiri oleh 1.200 anggota, termasuk materi presentasi, notulensi, dan foto dokumentasi.",
      category: "Rapat Anggota",
      date: "20 Maret 2024",
      size: "5.2 MB",
      downloads: 201,
      views: 312,
      format: "PDF",
      location: "Hotel Pelindo Jakarta",
      participants: "1.200 anggota",
      status: "completed"
    },
    {
      id: 2,
      title: "Laporan Pelatihan Kewirausahaan Batch 3",
      description: "Laporan lengkap pelaksanaan pelatihan kewirausahaan untuk 50 anggota baru pada bulan Februari 2024 dengan evaluasi hasil dan follow-up.",
      category: "Pelatihan",
      date: "28 Februari 2024",
      size: "3.8 MB",
      downloads: 67,
      views: 98,
      format: "PDF",
      location: "Training Center KOPKAR",
      participants: "50 peserta",
      status: "completed"
    },
    {
      id: 3,
      title: "Dokumentasi Festival Koperasi 2024",
      description: "Dokumentasi partisipasi KOPKAR PELINDO dalam Festival Koperasi Nasional 2024, termasuk booth pameran dan presentasi koperasi teladan.",
      category: "Eksternal",
      date: "15 Februari 2024",
      size: "4.5 MB",
      downloads: 89,
      views: 145,
      format: "PDF",
      location: "JIExpo Kemayoran",
      participants: "15 delegasi",
      status: "completed"
    },
    {
      id: 4,
      title: "Laporan Kunjungan ke Kospin Jasa",
      description: "Lengkap kunjungan kerja dan studi banding ke Kospin Jasa sebagai koperasi teladan nasional di Jawa Timur.",
      category: "Studi Banding",
      date: "20 Februari 2024",
      size: "2.8 MB",
      downloads: 78,
      views: 123,
      format: "PDF",
      location: "Kantor Kospin Jasa, Jawa Timur",
      participants: "12 pengurus",
      status: "completed"
    },
    {
      id: 5,
      title: "Dokumentasi Bantuan Modal UMKM",
      description: "Dokumentasi penyerahan bantuan modal usaha untuk 25 anggota pelaku UMKM dalam program pemulihan ekonomi.",
      category: "Program Sosial",
      date: "10 Februari 2024",
      size: "3.2 MB",
      downloads: 95,
      views: 167,
      format: "PDF",
      location: "Kantor KOPKAR PELINDO",
      participants: "25 penerima",
      status: "completed"
    },
    {
      id: 6,
      title: "Laporan Peluncuran Aplikasi Mobile",
      description: "Dokumentasi peluncuran aplikasi mobile KOPKAR PELINDO dengan demo fitur dan sosialisasi kepada anggota.",
      category: "Teknologi",
      date: "5 Februari 2024",
      size: "2.1 MB",
      downloads: 134,
      views: 201,
      format: "PDF",
      location: "Ruang Rapat Utama",
      participants: "100 undangan",
      status: "completed"
    }
  ]

  const activityCategories = [
    {
      name: "Rapat Anggota",
      count: 8,
      description: "RAT dan rapat pengurus",
      color: "bg-blue-100 text-blue-600",
      icon: Users
    },
    {
      name: "Pelatihan",
      count: 12,
      description: "Workshop dan pelatihan anggota",
      color: "bg-green-100 text-green-600",
      icon: Award
    },
    {
      name: "Eksternal",
      count: 6,
      description: "Acara eksternal dan pameran",
      color: "bg-purple-100 text-purple-600",
      icon: MapPin
    },
    {
      name: "Program Sosial",
      count: 10,
      description: "Bantuan dan kegiatan sosial",
      color: "bg-orange-100 text-orange-600",
      icon: Users
    }
  ]

  const upcomingActivities = [
    {
      title: "Pelatihan Digital Marketing",
      date: "15 April 2024",
      participants: "30 peserta",
      location: "Training Center"
    },
    {
      title: "Rapat Pengurus Triwulan I",
      date: "5 April 2024",
      participants: "15 pengurus",
      location: "Ruang Rapat Utama"
    },
    {
      title: "Bakti Sosial Ramadhan",
      date: "20 Maret 2024",
      participants: "100+ penerima",
      location: "Wilayah Jakarta"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/publikasi">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Publikasi
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/10 rounded-lg p-3">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Kegiatan</h1>
                <p className="text-xl text-muted-foreground">
                  Dokumentasi dan laporan kegiatan yang telah diselenggarakan oleh KOPKAR PELINDO
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
                <div className="text-2xl font-bold text-accent">36</div>
                <div className="text-sm text-muted-foreground">Total Kegiatan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">2,500+</div>
                <div className="text-sm text-muted-foreground">Total Peserta</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">15</div>
                <div className="text-sm text-muted-foreground">Kegiatan Tahun Ini</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Kepuasan Peserta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kategori Kegiatan</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {activityCategories.map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg w-8 h-8 flex items-center justify-center ${category.color}`}>
                        <category.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Activities */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Kegiatan Mendatang</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingActivities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{activity.date}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{activity.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{activity.participants}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activity Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Laporan Kegiatan</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Filter Tanggal
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Filter Kategori
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {activityReports.map((report) => (
                <Card key={report.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{report.category}</Badge>
                        <Badge variant="outline" className="text-xs">{report.format}</Badge>
                        <Badge variant="default" className="bg-green-500 text-green-50">
                          {report.status}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{report.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {report.description}
                    </CardDescription>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{report.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{report.participants}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{report.size}</span>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{report.downloads}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{report.views}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Unduh
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
              Arsip Kegiatan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { year: "2024", activities: 15, description: "15 kegiatan terdokumentasi" },
                { year: "2023", activities: 24, description: "24 kegiatan terdokumentasi" },
                { year: "2022", activities: 18, description: "18 kegiatan terdokumentasi" },
                { year: "2021", activities: 12, description: "12 kegiatan terdokumentasi" }
              ].map((archive) => (
                <Card key={archive.year} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Tahun {archive.year}</h3>
                        <p className="text-sm text-muted-foreground">{archive.description}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Lihat Semua
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
            Ingin Bergabung dalam Kegiatan Kami?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ikuti berbagai kegiatan dan program yang kami selenggarakan untuk 
            meningkatkan pengetahuan dan keterampilan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Calendar className="mr-2 h-4 w-4" />
              Daftar Kegiatan
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Hubungi Panitia
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}