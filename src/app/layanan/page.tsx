import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, HandCoins, LogIn, UserPlus, Shield, TrendingUp, Clock, Users, FileText, HeadphonesIcon } from "lucide-react"

export default function LayananPage() {
  const services = [
    {
      title: "Simpan Dan Pinjam",
      description: "Layanan simpanan berjangka, simpanan wajib, dan pinjaman dengan bunga kompetitif untuk kebutuhan produktif dan konsumtif.",
      icon: HandCoins,
      href: "/layanan/simpan-pinjam",
      features: ["Simpanan Berjangka", "Pinjaman Produktif", "Pinjaman Konsumtif", "Bunga Kompetitif"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Login Member",
      description: "Akses portal member untuk melihat saldo, transaksi, dan mengajukan pinjaman secara online.",
      icon: LogIn,
      href: "/layanan/login",
      features: ["Cek Saldo", "Riwayat Transaksi", "Pengajuan Online", "Notifikasi Real-time"],
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Registrasi",
      description: "Daftar sebagai anggota baru KOPKAR PELINDO dan nikmati berbagai keuntungan dan layanan eksklusif.",
      icon: UserPlus,
      href: "/layanan/registrasi",
      features: ["Pendaftaran Online", "Verifikasi Cepat", "Welcome Bonus", "Kartu Anggota"],
      color: "bg-purple-100 text-purple-600"
    }
  ]

  const benefits = [
    {
      title: "Bunga Kompetitif",
      description: "Bunga simpanan hingga 6% per tahun dan bunga pinjaman mulai dari 8% per tahun",
      icon: TrendingUp
    },
    {
      title: "Proses Cepat",
      description: "Pengajuan pinjaman diproses maksimal 3 hari kerja dengan persyaratan mudah",
      icon: Clock
    },
    {
      title: "Aman dan Terpercaya",
      description: "Diawasi oleh OJK dan memiliki sistem keamanan berlapis untuk melindungi data Anda",
      icon: Shield
    },
    {
      title: "Layanan Prima",
      description: "Customer service siap membantu 24/7 melalui berbagai channel komunikasi",
      icon: HeadphonesIcon
    }
  ]

  const stats = [
    { value: "1,500+", label: "Anggota Aktif" },
    { value: "Rp 75M", label: "Total Aset" },
    { value: "98%", label: "Tingkat Kepuasan" },
    { value: "24/7", label: "Layanan Support" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Layanan KOPKAR PELINDO
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Nikmati berbagai layanan keuangan terpercaya yang dirancang khusus 
              untuk meningkatkan kesejahteraan anggota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/layanan/registrasi">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/layanan/login">
                  Login Member
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pilih layanan yang sesuai dengan kebutuhan Anda dan nikmati kemudahan 
              bertransaksi dengan KOPKAR PELINDO
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={service.href}>
                        {service.title === "Login Member" ? "Login" : 
                         service.title === "Registrasi" ? "Daftar" : "Pelajari"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih KOPKAR PELINDO?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai keunggulan yang membuat kami menjadi pilihan terbaik untuk kebutuhan keuangan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Layanan Tambahan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-lg p-2">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Konsultasi Keuangan</CardTitle>
                  </div>
                  <CardDescription>
                    Konsultasi gratis dengan financial advisor untuk perencanaan keuangan yang lebih baik.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    Jadwalkan Konsultasi
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Edukasi Keuangan</CardTitle>
                  </div>
                  <CardDescription>
                    Akses ke berbagai materi edukasi keuangan untuk meningkatkan literasi keuangan Anda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    Mulai Belajar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan KOPKAR PELINDO?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan anggota yang telah merasakan manfaat layanan 
            keuangan kami dan mulai perjalanan menuju kesejahteraan finansial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link href="/layanan/registrasi">
                Daftar Sekarang
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/layanan/simpan-pinjam">
                Pelajari Lebih Lanjut
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Butuh Bantuan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tim customer service kami siap membantu Anda 24/7
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <HeadphonesIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Call Center</h3>
                  <p className="text-sm text-muted-foreground mb-3">(021) 1234-5678</p>
                  <p className="text-xs text-muted-foreground">Senin - Jumat, 08:00 - 17:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">support@kopkarpelindo.co.id</p>
                  <p className="text-xs text-muted-foreground">Respon dalam 24 jam</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-3">Chat Online</p>
                  <p className="text-xs text-muted-foreground">Tersedia 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}