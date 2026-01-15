import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, HandCoins, TrendingUp, Shield, Clock, Calculator, FileText, ArrowRight, CheckCircle } from "lucide-react"

export default function SimpanPinjamPage() {
  const savingProducts = [
    {
      name: "Simpanan Sukarela",
      description: "Simpanan fleksibel yang dapat disetor kapan saja dengan bunga kompetitif.",
      interest: "4% - 6% per tahun",
      minAmount: "Rp 100.000",
      features: ["Bunga kompetitif", "Setoran fleksibel", "Penarikan kapan saja", "Auto-debit"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Simpanan Wajib",
      description: "Simpanan wajib bagi anggota dengan setoran tetap setiap bulan.",
      interest: "5% per tahun",
      minAmount: "Rp 50.000/bulan",
      features: ["Setoran tetap", "Bunga stabil", "Syarat keanggotaan", "Auto-debit gaji"],
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Simpanan Berjangka",
      description: "Simpanan dengan jangka waktu tertentu dan bunga lebih tinggi.",
      interest: "6% - 8% per tahun",
      minAmount: "Rp 1.000.000",
      features: ["Bunga tertinggi", "Jangka waktu 6-24 bulan", "Dijamin aman", "Bisa dijadikan agunan"],
      color: "bg-purple-100 text-purple-600"
    }
  ]

  const loanProducts = [
    {
      name: "Pinjaman Produktif",
      description: "Pinjaman untuk keperluan usaha dan pengembangan bisnis.",
      interest: "8% - 12% per tahun",
      maxAmount: "Rp 500.000.000",
      tenure: "1 - 5 tahun",
      features: ["Bunga kompetitif", "Plafon tinggi", "Jangka waktu panjang", "Agunan fleksibel"],
      color: "bg-orange-100 text-orange-600",
      purpose: "Modal usaha, ekspansi bisnis, investasi"
    },
    {
      name: "Pinjaman Konsumtif",
      description: "Pinjaman untuk keperluan pribadi dan konsumsi sehari-hari.",
      interest: "10% - 15% per tahun",
      maxAmount: "Rp 100.000.000",
      tenure: "1 - 3 tahun",
      features: ["Proses cepat", "Persyaratan mudah", "Cair cepat", "Angsuran tetap"],
      color: "bg-red-100 text-red-600",
      purpose: "Biaya pendidikan, renovasi, liburan"
    },
    {
      name: "Pinjaman Darurat",
      description: "Pinjaman cepat untuk keadaan darurat dan mendesak.",
      interest: "12% - 18% per tahun",
      maxAmount: "Rp 50.000.000",
      tenure: "6 - 12 bulan",
      features: ["Proses 1 hari", "Persyaratan minimal", "Cair langsung", "Tanpa agunan"],
      color: "bg-yellow-100 text-yellow-600",
      purpose: "Kesehatan, kecelakaan, mendesak"
    }
  ]

  const benefits = [
    "Bunga kompetitif dan transparan",
    "Proses pengajuan cepat dan mudah",
    "Fleksibel dalam pemilihan produk",
    "Aman dan diawasi oleh OJK",
    "Customer service 24/7",
    "Akses online melalui mobile app"
  ]

  const requirements = [
    "Warga Negara Indonesia",
    "Usia minimal 21 tahun",
    "Memiliki penghasilan tetap",
    "Melampirkan KTP dan KK",
    "Melampirkan slip gaji",
    "Melampirkan NPWP"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/layanan">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Layanan
              </Link>
            </Button>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-lg p-3">
                <HandCoins className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Simpan Dan Pinjam</h1>
                <p className="text-xl text-muted-foreground">
                  Layanan simpanan dan pinjaman dengan bunga kompetitif untuk kebutuhan finansial Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <section className="py-8 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">Rp 58M</div>
                <div className="text-sm text-muted-foreground">Total Simpanan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Rp 42M</div>
                <div className="text-sm text-muted-foreground">Total Pinjaman</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">6%</div>
                <div className="text-sm text-muted-foreground">Bunga Simpanan</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">8%</div>
                <div className="text-sm text-muted-foreground">Bunga Pinjaman</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saving Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Produk Simpanan
              </h2>
              <p className="text-lg text-muted-foreground">
                Pilih produk simpanan yang sesuai dengan kebutuhan dan tujuan finansial Anda
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {savingProducts.map((product) => (
                <Card key={product.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`rounded-lg w-10 h-10 flex items-center justify-center mb-3 ${product.color}`}>
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Bunga:</span>
                          <span className="text-sm text-primary font-semibold">{product.interest}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Minimal:</span>
                          <span className="text-sm">{product.minAmount}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full" variant="outline">
                        Ajukan Sekarang
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Produk Pinjaman
              </h2>
              <p className="text-lg text-muted-foreground">
                Solusi pinjaman yang cepat, mudah, dan terpercaya untuk berbagai kebutuhan Anda
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {loanProducts.map((product) => (
                <Card key={product.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`rounded-lg w-10 h-10 flex items-center justify-center mb-3 ${product.color}`}>
                      <HandCoins className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Bunga:</span>
                          <span className="text-sm text-primary font-semibold">{product.interest}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Maksimal:</span>
                          <span className="text-sm">{product.maxAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Tenor:</span>
                          <span className="text-sm">{product.tenure}</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Cocok untuk:</span> {product.purpose}
                      </div>
                      <div className="space-y-1">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full">
                        Ajukan Pinjaman
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Keunggulan Layanan Kami
              </h2>
              <p className="text-lg text-muted-foreground">
                Berbagai keuntungan yang Anda dapatkan dengan menggunakan layanan simpan pinjam kami
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Persyaratan Pengajuan
              </h2>
              <p className="text-lg text-muted-foreground">
                Dokumen yang perlu disiapkan untuk mengajukan simpanan atau pinjaman
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Persyaratan Umum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Simulasi Pinjaman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Jumlah Pinjaman</label>
                      <input
                        type="text"
                        placeholder="Rp 50.000.000"
                        className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Jangka Waktu</label>
                      <select className="w-full mt-1 px-3 py-2 border rounded-md text-sm">
                        <option>12 bulan</option>
                        <option>24 bulan</option>
                        <option>36 bulan</option>
                      </select>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Calculator className="h-4 w-4 mr-2" />
                      Hitung Cicilan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai Simpanan atau Pinjaman?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bergabunglah dengan ribuan anggota yang telah merasakan kemudahan dan keuntungan 
            layanan simpan pinjam KOPKAR PELINDO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link href="/layanan/registrasi">
                Daftar Sekarang
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Calculator className="mr-2 h-4 w-4" />
              Simulasi Pinjaman
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}