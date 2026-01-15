import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Scale, FileText, BookOpen, Gavel, Building, AlertCircle } from "lucide-react"

export default function RegulasiPage() {
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
              Regulasi dan Hukum
            </h1>
            <p className="text-xl text-muted-foreground">
              Dasar hukum, peraturan, dan regulasi yang mengatur kegiatan 
              KOPKAR PELINDO sesuai dengan perundang-undangan yang berlaku.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Dasar Hukum */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Dasar Hukum</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-lg leading-relaxed text-primary mb-4">
                    KOPKAR PELINDO didirikan dan beroperasi berdasarkan dasar hukum 
                    yang berlaku di Republik Indonesia untuk menjamin legalitas dan 
                    keabsahan setiap kegiatan yang dilaksanakan.
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    {
                      title: "Undang-Undang Nomor 25 Tahun 1992",
                      description: "Tentang Perkoperasian (sebagaimana telah diubah dengan UU No. 17 Tahun 2012 tentang Perkoperasian)",
                      type: "Undang-Undang"
                    },
                    {
                      title: "Undang-Undang Nomor 1 Tahun 2016",
                      description: "Tentang Perlindungan Konsumen",
                      type: "Undang-Undang"
                    },
                    {
                      title: "Undang-Undang Nomor 7 Tahun 2014",
                      description: "Tentang Perdagangan",
                      type: "Undang-Undang"
                    },
                    {
                      title: "Undang-Undang Nomor 21 Tahun 2011",
                      description: "Tentang Otoritas Jasa Keuangan",
                      type: "Undang-Undang"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                      <div className="bg-secondary/10 rounded-lg p-2 h-fit">
                        <FileText className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{item.title}</h4>
                          <Badge variant="outline" className="text-xs">{item.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Peraturan Pemerintah */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 rounded-lg p-3">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Peraturan Pemerintah</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Peraturan Pemerintah Nomor 4 Tahun 1994",
                    description: "Tentang Koperasi Simpan Pinjam",
                    status: "Berlaku"
                  },
                  {
                    title: "Peraturan Pemerintah Nomor 9 Tahun 1995",
                    description: "Tentang Pelaksanaan Kegiatan Usaha Simpan Pinjam oleh Koperasi",
                    status: "Berlaku"
                  },
                  {
                    title: "Peraturan Pemerintah Nomor 58 Tahun 2005",
                    description: "Tentang Pengelolaan Keuangan Daerah",
                    status: "Berlaku"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant={item.status === "Berlaku" ? "default" : "secondary"}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Peraturan OJK */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Scale className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Peraturan Otoritas Jasa Keuangan (OJK)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "POJK Nomor 1/POJK.05/2014",
                    description: "Tentang Pelayanan Jasa Keuangan oleh Koperasi Simpan Pinjam",
                    category: "Koperasi Simpan Pinjam"
                  },
                  {
                    title: "POJK Nomor 2/POJK.05/2014",
                    description: "Tentang Kegiatan Usaha dan Jaringan Koperasi Simpan Pinjam",
                    category: "Koperasi Simpan Pinjam"
                  },
                  {
                    title: "POJK Nomor 19/POJK.05/2016",
                    description: "Tentang Kesehatan Koperasi Simpan Pinjam",
                    category: "Kesehatan Koperasi"
                  },
                  {
                    title: "POJK Nomor 37/POJK.05/2017",
                    description: "Tentang Penyelenggaraan Layanan Keuangan Digital oleh Koperasi Simpan Pinjam",
                    category: "Layanan Digital"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="bg-green-100 rounded-lg p-2 h-fit">
                      <FileText className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <Badge variant="outline" className="text-xs border-green-500 text-green-700">
                          {item.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Dokumen Koperasi */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <Building className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Dokumen Koperasi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Dokumen Pendirian</h3>
                    {[
                      "Akta Pendirian Koperasi",
                      "Anggaran Dasar (AD)",
                      "Anggaran Rumah Tangga (ART)",
                      "Surat Keputusan Pengesahan",
                      "Nomor Pokok Wajib Pajak (NPWP)",
                      "Surat Izin Usaha Koperasi"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Dokumen Operasional</h3>
                    {[
                      "Standar Operasional Prosedur (SOP)",
                      "Kebijakan Kredit",
                      "Kebijana Simpanan",
                      "Manual Sistem Informasi",
                      "Kebijakan Pengendalian Internal",
                      "Laporan Tahunan"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kepatuhan Regulasi */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Komitmen Kepatuhan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    KOPKAR PELINDO berkomitmen penuh untuk mematuhi seluruh regulasi dan 
                    perundang-undangan yang berlaku. Kami memiliki unit compliance yang 
                    bertugas memastikan seluruh kegiatan operasional sesuai dengan standar 
                    yang ditetapkan oleh OJK dan lembaga terkait.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Dokumen Lengkap</h4>
                      <p className="text-sm text-muted-foreground">
                        Seluruh dokumen legal tersedia dan terupdate
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Scale className="h-6 w-6 text-secondary" />
                      </div>
                      <h4 className="font-semibold mb-2">Audit Rutin</h4>
                      <p className="text-sm text-muted-foreground">
                        Audit internal dan eksternal dilakukan secara berkala
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <AlertCircle className="h-6 w-6 text-accent" />
                      </div>
                      <h4 className="font-semibold mb-2">Pelaporan Berkala</h4>
                      <p className="text-sm text-muted-foreground">
                        Laporan keuangan dan kepatuhan disampaikan tepat waktu
                      </p>
                    </div>
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