import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, TrendingUp, Award, ArrowRight, Newspaper, FileText, Megaphone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Selamat Datang di KOPKAR PELINDO
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Koperasi Karyawan PT Pelindo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Meningkatkan kesejahteraan anggota melalui layanan keuangan terpercaya, 
              program koperasi yang inovatif, dan komitmen untuk kemajuan bersama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/layanan">
                  Lihat Layanan Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/profile">
                  Tentang Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">1,500+</div>
              <div className="text-muted-foreground">Anggota Aktif</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Rp 50M+</div>
              <div className="text-muted-foreground">Total Aset</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Penghargaan</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10+</div>
              <div className="text-muted-foreground">Tahun Berdiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai layanan keuangan dan program koperasi untuk mendukung kesejahteraan anggota
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Simpanan Berjangka</CardTitle>
                <CardDescription>
                  Simpanan dengan bunga kompetitif dan jangka waktu fleksibel untuk masa depan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/layanan/simpan-pinjam">
                    Pelajari Lebih Lanjut
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pinjaman Modal</CardTitle>
                <CardDescription>
                  Pinjaman dengan proses cepat dan bunga rendah untuk kebutuhan usaha Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/layanan/simpan-pinjam">
                    Pelajari Lebih Lanjut
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Program Kesejahteraan</CardTitle>
                <CardDescription>
                  Berbagai program untuk meningkatkan kualitas hidup anggota dan keluarga
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/layanan">
                    Pelajari Lebih Lanjut
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Informasi Terkini
              </h2>
              <p className="text-lg text-muted-foreground">
                Dapatkan informasi terbaru seputar KOPKAR PELINDO
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/berita">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Newspaper className="h-4 w-4 text-primary" />
                  <Badge variant="secondary">Siaran Pers</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Rapat Anggota Tahunan 2024 Berhasil Digelar
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  KOPKAR PELINDO berhasil menyelenggarakan RAT 2024 dengan agenda penting dan keputusan strategis untuk kemajuan koperasi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">15 Maret 2024</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/berita/siaran-pers">
                      Baca Selengkapnya
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Megaphone className="h-4 w-4 text-primary" />
                  <Badge variant="secondary">Pengumuman</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Program Baru: Pinjaman Pendidikan
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  KOPKAR PELINDO meluncurkan program pinjaman pendidikan dengan bunga khusus untuk mendukung pendidikan anak anggota.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">10 Maret 2024</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/pengumuman">
                      Baca Selengkapnya
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <Badge variant="secondary">Warta Koprasi</Badge>
                </div>
                <CardTitle className="line-clamp-2">
                  Laporan Keuangan Tahun 2023
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  Laporan keuangan audited KOPKAR PELINDO tahun 2023 menunjukkan pertumbuhan positif dan kinerja yang solid.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">5 Maret 2024</span>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/publikasi/laporan-keuangan">
                      Baca Selengkapnya
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bergabunglah dengan KOPKAR PELINDO
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Menjadi anggota KOPKAR PELINDO dan nikmati berbagai keuntungan serta layanan keuangan yang kami sediakan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/layanan/registrasi">
                Daftar Sekarang
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/layanan/login">
                Login Member
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}