import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Target, Eye, Heart, Lightbulb, Award, Users } from "lucide-react"

export default function VisiMisiPage() {
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
              Visi dan Misi
            </h1>
            <p className="text-xl text-muted-foreground">
              Visi, misi, dan nilai-nilai yang menjadi landasan KOPKAR PELINDO 
              dalam menjalankan kegiatan koperasi untuk kemajuan bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Visi */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary">
                  <p className="text-lg font-medium text-primary leading-relaxed">
                    "Menjadi koperasi karyawan yang unggul, profesional, dan berdaya saing 
                    serta mampu meningkatkan kesejahteraan ekonomi anggota secara berkelanjutan."
                  </p>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Unggul</h4>
                    <p className="text-sm text-muted-foreground">
                      Menjadi yang terbaik dalam pelayanan dan kinerja
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Profesional</h4>
                    <p className="text-sm text-muted-foreground">
                      Dikelola dengan standar profesional dan transparan
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Sejahtera</h4>
                    <p className="text-sm text-muted-foreground">
                      Meningkatkan kesejahteraan anggota secara berkelanjutan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Meningkatkan Kualitas Layanan",
                    description: "Menyediakan layanan keuangan yang berkualitas, mudah diakses, dan sesuai kebutuhan anggota dengan mengedepankan prinsip kehati-hatian.",
                    icon: Heart
                  },
                  {
                    title: "Mengembangkan Usaha",
                    description: "Mengembangkan berbagai unit usaha yang produktif dan inovatif untuk meningkatkan pendapatan koperasi dan manfaat bagi anggota.",
                    icon: Lightbulb
                  },
                  {
                    title: "Meningkatkan Kapasitas Anggota",
                    description: "Menyelenggarakan pendidikan, pelatihan, dan pembinaan untuk meningkatkan pengetahuan dan keterampilan anggota dalam bidang koperasi dan kewirausahaan.",
                    icon: Users
                  },
                  {
                    title: "Memperkuat Tata Kelola",
                    description: "Menerapkan tata kelola koperasi yang baik (good cooperative governance) dengan prinsip transparansi, akuntabilitas, dan responsibilitas.",
                    icon: Award
                  },
                  {
                    title: "Membangun Jaringan Kerjasama",
                    description: "Mengembangkan kemitraan strategis dengan berbagai pihak untuk mendukung pengembangan usaha dan pelayanan kepada anggota.",
                    icon: Target
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-secondary/5 border-l-4 border-secondary">
                    <div className="bg-secondary/10 rounded-lg p-2 h-fit">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nilai-Nilai */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Nilai-Nilai KOPKAR PELINDO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Kebersamaan</h4>
                      <p className="text-sm text-muted-foreground">
                        Membangun solidaritas dan kekeluargaan antar anggota serta pengurus koperasi.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Integritas</h4>
                      <p className="text-sm text-muted-foreground">
                        Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap tindakan.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Profesionalisme</h4>
                      <p className="text-sm text-muted-foreground">
                        Bekerja dengan standar profesional dan terus meningkatkan kompetensi.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Inovasi</h4>
                      <p className="text-sm text-muted-foreground">
                        Terus berinovasi dalam mengembangkan produk dan layanan untuk kepuasan anggota.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Tanggung Jawab</h4>
                      <p className="text-sm text-muted-foreground">
                        Bertanggung jawab terhadap keputusan yang diambil dan dampaknya bagi anggota.
                      </p>
                    </div>
                    <div className="bg-accent/5 rounded-lg p-4">
                      <h4 className="font-semibold text-accent mb-2">Keadilan</h4>
                      <p className="text-sm text-muted-foreground">
                        Memberikan perlakuan yang adil kepada seluruh anggota tanpa diskriminasi.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Moto */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Moto KOPKAR PELINDO</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-4">
                    "Bersama Membangun Kesejahteraan"
                  </p>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Moto ini mencerminkan komitmen kami untuk bekerja sama dengan seluruh anggota 
                    dalam menciptakan kesejahteraan ekonomi yang berkelanjutan melalui semangat 
                    kebersamaan dan gotong royong.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}