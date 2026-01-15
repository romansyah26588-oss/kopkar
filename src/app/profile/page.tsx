import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, BookOpen, Scale, ArrowRight } from "lucide-react"

export default function ProfilePage() {
  const profileItems = [
    {
      title: "Struktur Organisasi",
      description: "Informasi lengkap mengenai struktur organisasi KOPKAR PELINDO dari tingkat pengurus hingga pengawas.",
      icon: Users,
      href: "/profile/struktur",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Visi dan Misi",
      description: "Visi, misi, dan nilai-nilai yang menjadi landasan KOPKAR PELINDO dalam menjalankan kegiatan koperasi.",
      icon: Target,
      href: "/profile/visi-misi",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Tugas dan Fungsi",
      description: "Penjelasan mengenai tugas pokok dan fungsi KOPKAR PELINDO sesuai dengan anggaran dasar.",
      icon: BookOpen,
      href: "/profile/tugas-fungsi",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Regulasi dan Hukum",
      description: "Dasar hukum, peraturan, dan regulasi yang mengatur kegiatan KOPKAR PELINDO.",
      icon: Scale,
      href: "/profile/regulasi",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Profile KOPKAR PELINDO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mengenal lebih dekat Koperasi Karyawan PT Pelindo, dari sejarah berdiri hingga 
              komitmen kami dalam meningkatkan kesejahteraan anggota.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {profileItems.map((item) => (
              <Card key={item.title} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href={item.href}>
                      Selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tentang KOPKAR PELINDO
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KOPKAR PELINDO adalah koperasi karyawan yang berdiri sejak tahun 2014 dengan tujuan 
                  utama meningkatkan kesejahteraan ekonomi anggota melalui kegiatan usaha simpan pinjam 
                  dan layanan koperasi lainnya.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sebagai bagian dari ekosistem PT Pelindo, KOPKAR PELINDO berkomitmen untuk menjadi 
                  koperasi yang sehat, profesional, dan berdaya saing. Kami menyediakan berbagai layanan 
                  keuangan yang disesuaikan dengan kebutuhan karyawan PT Pelindo dan masyarakat umum.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan didukung oleh pengurus yang berpengalaman dan sistem manajemen yang modern, 
                  KOPKAR PELINDO terus berinovasi untuk memberikan nilai tambah bagi seluruh anggota 
                  serta berkontribusi pada pembangunan ekonomi nasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}