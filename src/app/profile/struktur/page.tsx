import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, UserCheck, Shield } from "lucide-react"

export default function StrukturPage() {
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
              Struktur Organisasi
            </h1>
            <p className="text-xl text-muted-foreground">
              Struktur organisasi KOPKAR PELINDO yang mengatur pembagian tugas dan tanggung jawab 
              setiap tingkatan pengurus dan pengawas.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Dewan Pengurus */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Dewan Pengurus</CardTitle>
                    <p className="text-muted-foreground">Masa Jabatan 2023-2028</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Ketua */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Ketua</h3>
                    <Badge variant="outline">Ketua Umum</Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">Budi Santoso, S.E., M.M.</p>
                  <p className="text-sm text-muted-foreground">
                    Bertanggung jawab atas seluruh kegiatan operasional koperasi dan 
                    mewakili koperasi dalam hubungan eksternal.
                  </p>
                </div>

                {/* Sekretaris */}
                <div className="border-l-4 border-secondary pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Sekretaris</h3>
                    <Badge variant="outline">Sekretaris Umum</Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">Siti Nurhaliza, S.H.</p>
                  <p className="text-sm text-muted-foreground">
                    Mengelola administrasi, dokumentasi, dan komunikasi internal koperasi.
                  </p>
                </div>

                {/* Bendahara */}
                <div className="border-l-4 border-accent pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Bendahara</h3>
                    <Badge variant="outline">Bendahara Umum</Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">Ahmad Fauzi, S.E.</p>
                  <p className="text-sm text-muted-foreground">
                    Bertanggung jawab atas pengelolaan keuangan, pembukuan, dan laporan keuangan koperasi.
                  </p>
                </div>

                {/* Pengurus Bidang */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-semibold">Pengurus Bidang</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <h4 className="font-medium mb-1">Bidang Usaha</h4>
                      <p className="text-sm text-muted-foreground mb-2">Drs. Hendra Wijaya</p>
                      <p className="text-xs text-muted-foreground">
                        Mengembangkan dan mengelola berbagai unit usaha koperasi.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <h4 className="font-medium mb-1">Bidang Keanggotaan</h4>
                      <p className="text-sm text-muted-foreground mb-2">Dewi Lestari, S.Pd.</p>
                      <p className="text-xs text-muted-foreground">
                        Mengelola data keanggotaan dan program pelayanan anggota.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <h4 className="font-medium mb-1">Bidang Pendidikan</h4>
                      <p className="text-sm text-muted-foreground mb-2">Dr. Ir. Bambang Sutrisno</p>
                      <p className="text-xs text-muted-foreground">
                        Menyelenggarakan pendidikan dan pelatihan bagi anggota.
                      </p>
                    </div>
                    
                    <div className="bg-secondary/10 rounded-lg p-4">
                      <h4 className="font-medium mb-1">Bidang Sosial</h4>
                      <p className="text-sm text-muted-foreground mb-2">Maria Ulfa, S.Sos.</p>
                      <p className="text-xs text-muted-foreground">
                        Mengelola program sosial dan kesejahteraan anggota.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dewan Pengawas */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-lg p-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Dewan Pengawas</CardTitle>
                    <p className="text-muted-foreground">Masa Jabatan 2023-2028</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Ketua Pengawas</h3>
                    <Badge variant="outline" className="border-green-500 text-green-700">Ketua</Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">Ir. H. Rahman Hakim, M.M.</p>
                  <p className="text-sm text-muted-foreground">
                    Memimpin pengawasan terhadap pelaksanaan kebijakan dan pengelolaan koperasi.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Anggota Pengawas</h4>
                    <p className="text-sm text-muted-foreground mb-2">Dra. Ratna Sari Dewi</p>
                    <p className="text-xs text-muted-foreground">
                      Bidang Pengawasan Keuangan
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Anggota Pengawas</h4>
                    <p className="text-sm text-muted-foreground mb-2">H. Susilo Wibowo, S.H.</p>
                    <p className="text-xs text-muted-foreground">
                      Bidang Pengawasan Operasional
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Komite-Komite */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <UserCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Komite-Komite</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Komite Kredit</h4>
                    <p className="text-sm text-muted-foreground mb-2">Ketua: Drs. Ahmad Yani</p>
                    <p className="text-xs text-muted-foreground">
                      Menilai dan menyetujui pengajuan pinjaman anggota.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Komite Investasi</h4>
                    <p className="text-sm text-muted-foreground mb-2">Ketua: Ir. Siti Aminah</p>
                    <p className="text-xs text-muted-foreground">
                      Mengevaluasi proposal investasi dan pengembangan aset.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Komite Etika</h4>
                    <p className="text-sm text-muted-foreground mb-2">Ketua: Prof. Dr. H. Budiman</p>
                    <p className="text-xs text-muted-foreground">
                      Memastikan kepatuhan terhadap kode etik koperasi.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium mb-1">Komite Remunerasi</h4>
                    <p className="text-sm text-muted-foreground mb-2">Ketua: Dra. Indah Permata</p>
                    <p className="text-xs text-muted-foreground">
                      Menetapkan kebijakan remunerasi pengurus dan karyawan.
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