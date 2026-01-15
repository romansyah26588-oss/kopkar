import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Camera, Download, Eye, Grid, List } from "lucide-react"

export default function GaleriPage() {
  const galleryCategories = [
    {
      name: "Rapat Anggota Tahunan",
      count: 24,
      description: "Dokumentasi RAT dari tahun ke tahun",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Pelatihan dan Workshop",
      count: 36,
      description: "Kegiatan pendidikan dan pelatihan anggota",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Acara Sosial",
      count: 18,
      description: "Program sosial dan bantuan masyarakat",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Kunjungan Kerja",
      count: 12,
      description: "Studi banding dan kunjungan kerja",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Penghargaan",
      count: 8,
      description: "Momen penerimaan penghargaan",
      color: "bg-red-100 text-red-600"
    },
    {
      name: "Kegiatan Internal",
      count: 42,
      description: "Berbagai kegiatan internal koperasi",
      color: "bg-yellow-100 text-yellow-600"
    }
  ]

  const galleryAlbums = [
    {
      id: 1,
      title: "Rapat Anggota Tahunan 2024",
      description: "Dokumentasi lengkap RAT 2024 yang dihadiri oleh 1.200 anggota",
      date: "15 Maret 2024",
      photos: 45,
      views: 567,
      category: "Rapat Anggota Tahunan",
      featured: true
    },
    {
      id: 2,
      title: "Pelatihan Kewirausahaan Batch 3",
      description: "Kegiatan pelatihan kewirausahaan untuk 50 anggota baru",
      date: "28 Februari 2024",
      photos: 28,
      views: 234,
      category: "Pelatihan dan Workshop"
    },
    {
      id: 3,
      title: "Festival Koperasi 2024",
      description: "Partisipasi KOPKAR PELINDO dalam Festival Koperasi Nasional",
      date: "15 Februari 2024",
      photos: 36,
      views: 789,
      category: "Acara Sosial",
      featured: true
    },
    {
      id: 4,
      title: "Kunjungan ke Kospin Jasa",
      description: "Studi banding ke koperasi teladan nasional di Jawa Timur",
      date: "20 Februari 2024",
      photos: 22,
      views: 345,
      category: "Kunjungan Kerja"
    },
    {
      id: 5,
      title: "Penyerahan Bantuan Modal UMKM",
      description: "Program bantuan modal untuk 25 anggota pelaku UMKM",
      date: "10 Februari 2024",
      photos: 18,
      views: 298,
      category: "Acara Sosial"
    },
    {
      id: 6,
      title: "Peluncuran Aplikasi Mobile",
      description: "Peresmian aplikasi mobile KOPKAR PELINDO",
      date: "5 Februari 2024",
      photos: 15,
      views: 456,
      category: "Kegiatan Internal"
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
              <div className="bg-accent/10 rounded-lg p-3">
                <Camera className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Galeri Foto</h1>
                <p className="text-xl text-muted-foreground">
                  Dokumentasi foto kegiatan dan acara KOPKAR PELINDO
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
                <div className="text-2xl font-bold text-accent">45</div>
                <div className="text-sm text-muted-foreground">Total Album</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">1,250</div>
                <div className="text-sm text-muted-foreground">Total Foto</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">8.9K</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">234</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Kategori Galeri</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryCategories.map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg w-10 h-10 flex items-center justify-center ${category.color}`}>
                        <Camera className="h-5 w-5" />
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

      {/* Gallery Albums */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Album Foto</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Grid className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {galleryAlbums.map((album) => (
                <Card key={album.id} className="hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <Camera className="h-12 w-12 text-primary/50" />
                    {album.featured && (
                      <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-900">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Button variant="secondary" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Lihat Album
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{album.category}</Badge>
                      <span className="text-sm text-muted-foreground">{album.date}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {album.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {album.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Camera className="h-3 w-3" />
                          <span>{album.photos} Foto</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{album.views}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Lihat
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

      {/* Recent Photos */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Foto Terbaru</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer group">
                  <Camera className="h-8 w-8 text-primary/50 group-hover:h-10 group-hover:w-10 transition-all" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline">
                Lihat Semua Foto
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Download Foto Resmi
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Foto-foto dalam galeri dapat diunduh untuk keperluan publikasi dengan 
            mencantumkan kredit foto KOPKAR PELINDO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Download className="mr-2 h-4 w-4" />
              Panduan Download
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Camera className="mr-2 h-4 w-4" />
              Request Foto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}