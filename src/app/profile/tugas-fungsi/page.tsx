import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Target, Users, TrendingUp, Shield, Lightbulb } from "lucide-react"

export default function TugasFungsiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/profile">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Profile
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Tugas dan Fungsi
            </h1>
            <p className="text-xl text-muted-foreground">
              Tugas pokok dan fungsi KOPKAR PELINDO sesuai dengan anggaran dasar 
              dan peraturan perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Tugas Pokok */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Tugas Pokok</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-lg leading-relaxed text-primary">
                    Tugas pokok KOPKAR PELINDO adalah meningkatkan kesejahteraan ekonomi 
                    anggota melalui kegiatan usaha simpan pinjam dan jasa keuangan lainnya 
                    yang didasarkan pada prinsip koperasi dan kekeluargaan.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      icon: Users,
                      title: "Menghimpun Dana",
                      description: "Menghimpun dana dari anggota melalui simpanan sukarela, simpanan wajib, dan simpanan berjangka."
                    },
                    {
                      icon: TrendingUp,
                      title: "Menyalurkan Kredit",
                      description: "Menyalurkan kredit kepada anggota untuk ke produktifan dan konsumtif dengan syarat yang wajar."
                    },
                    {
                      icon: Shield,
                      title: "Mengelola Aset",
                      description: "Mengelola aset koperasi secara profesional untuk meningkatkan nilai dan manfaat bagi anggota."
                    },
                    {
                      icon: Lightbulb,
                      title: "Mengembangkan Usaha",
                      description: "Mengembangkan unit usaha baru yang sesuai dengan kebutuhan anggota dan potensi pasar."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-secondary/5 rounded-lg">
                      <div className="bg-primary/10 rounded-lg p-2 h-fit">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fungsi Utama */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Fungsi Utama</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Fungsi Intermediasi */}
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Fungsi Intermediasi Keuangan</h3>
                  <p className="text-muted-foreground mb-4">
                    Sebagai lembaga intermediasi yang menghubungkan anggota yang memiliki 
                    kelebihan dana dengan anggota yang membutuhkan pembiayaan.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-secondary/5 rounded p-3">
                      <h4 className="font-medium mb-1">Penghimpun Dana</h4>
                      <p className="text-sm text-muted-foreground">
                        Menghimpun dana masyarakat anggota dalam berbagai bentuk simpanan.
                      </p>
                    </div>
                    <div className="bg-secondary/5 rounded p-3">
                      <h4 className="font-medium mb-1">Penyalur Kredit</h4>
                      <p className="text-sm text-muted-foreground">
                        Menyalurkan kembali dana tersebut dalam bentuk pinjaman kepada anggota.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fungsi Pendidikan */}
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold mb-3">Fungsi Pendidikan dan Pembinaan</h3>
                  <p className="text-muted-foreground mb-4">
                    Memberikan pendidikan, pelatihan, dan pembinaan kepada anggota mengenai 
                    pengelolaan keuangan, kewirausahaan, dan prinsip koperasi.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-accent/5 rounded p-3">
                      <h4 className="font-medium mb-1">Literasi Keuangan</h4>
                      <p className="text-sm text-muted-foreground">
                        Meningkatkan pemahaman anggota tentang pengelolaan keuangan.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded p-3">
                      <h4 className="font-medium mb-1">Pelatihan Kewirausahaan</h4>
                      <p className="text-sm text-muted-foreground">
                        Membekali anggota dengan keterampilan wirausaha.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded p-3">
                      <h4 className="font-medium mb-1">Pendidikan Koperasi</h4>
                      <p className="text-sm text-muted-foreground">
                        Menanamkan pemahaman tentang prinsip dan nilai koperasi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fungsi Sosial */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-3">Fungsi Sosial</h3>
                  <p className="text-muted-foreground mb-4">
                    Melaksanakan kegiatan sosial yang bertujuan untuk meningkatkan kesejahteraan 
                    anggota dan masyarakat sekitar.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-primary/5 rounded p-3">
                      <h4 className="font-medium mb-1">Program Kesejahteraan</h4>
                      <p className="text-sm text-muted-foreground">
                        Menyelenggarakan program bantuan sosial bagi anggota yang membutuhkan.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded p-3">
                      <h4 className="font-medium mb-1">Bantuan Bencana</h4>
                      <p className="text-sm text-muted-foreground">
                        Memberikan bantuan kepada anggota yang terdampak bencana.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ruang Lingkup Kegiatan */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-lg p-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Ruang Lingkup Kegiatan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Kegiatan Usaha Utama</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Simpanan Sukarela",
                        "Simpanan Wajib",
                        "Simpanan Berjangka",
                        "Pinjaman Produktif",
                        "Pinjaman Konsumtif",
                        "Pinjaman Darurat",
                        "Jasa Transfer",
                        "Jasa Pembayaran"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Kegiatan Pendukung</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Pendidikan dan Pelatihan",
                        "Bimbingan Teknis",
                        "Konsultasi Keuangan",
                        "Program Kesejahteraan",
                        "Kegiatan Sosial",
                        "Pengembangan Jaringan",
                        "Kerjasama Institusi",
                        "Promosi Koperasi"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Kinerja */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Target Kinerja</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Pertumbuhan Anggota</h4>
                    <p className="text-2xl font-bold text-primary mb-1">10%/tahun</p>
                    <p className="text-sm text-muted-foreground">
                      Meningkatkan jumlah anggota aktif
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-8 w-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold mb-2">Pertumbuhan Aset</h4>
                    <p className="text-2xl font-bold text-secondary mb-1">15%/tahun</p>
                    <p className="text-sm text-muted-foreground">
                      Meningkatkan total aset koperasi
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-2">Rasio Kesehatan</h4>
                    <p className="text-2xl font-bold text-accent mb-1">Sehat</p>
                    <p className="text-sm text-muted-foreground">
                      Memiliki rasio kesehatan yang baik
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}