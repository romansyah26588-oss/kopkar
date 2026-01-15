import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, UserPlus, Eye, EyeOff, Shield, CheckCircle, Upload, FileText } from "lucide-react"
import { useState } from "react"

export default function RegistrasiPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

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
                <UserPlus className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Registrasi Anggota</h1>
                <p className="text-xl text-muted-foreground">
                  Bergabunglah dengan KOPKAR PELINDO dan nikmati berbagai keuntungan eksklusif
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Formulir Pendaftaran</CardTitle>
                <CardDescription>
                  Lengkapi data diri Anda untuk menjadi anggota KOPKAR PELINDO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informasi Pribadi</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Nama Lengkap *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Masukkan nama lengkap"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nik">Nomor KTP *</Label>
                        <Input
                          id="nik"
                          type="text"
                          placeholder="Masukkan nomor KTP"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Masukkan email aktif"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor HP *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Masukkan nomor HP"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birthPlace">Tempat Lahir *</Label>
                        <Input
                          id="birthPlace"
                          type="text"
                          placeholder="Masukkan tempat lahir"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDate">Tanggal Lahir *</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Alamat Lengkap *</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="Masukkan alamat lengkap"
                        required
                      />
                    </div>
                  </div>

                  {/* Employment Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informasi Pekerjaan</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Perusahaan *</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Masukkan nama perusahaan"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Departemen *</Label>
                        <Input
                          id="department"
                          type="text"
                          placeholder="Masukkan departemen"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position">Jabatan *</Label>
                        <Input
                          id="position"
                          type="text"
                          placeholder="Masukkan jabatan"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employeeId">Nomor Pegawai *</Label>
                        <Input
                          id="employeeId"
                          type="text"
                          placeholder="Masukkan nomor pegawai"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Gaji per Bulan *</Label>
                      <Input
                        id="salary"
                        type="text"
                        placeholder="Masukkan gaji per bulan"
                        required
                      />
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informasi Akun</h3>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username *</Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Buat username"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password *</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Buat password"
                            className="pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Konfirmasi Password *</Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Konfirmasi password"
                            className="pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Upload Dokumen</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ktp">Scan KTP *</Label>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Klik untuk upload atau drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG (max. 2MB)
                          </p>
                          <Input
                            id="ktp"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="kk">Scan KK *</Label>
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Klik untuk upload atau drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG (max. 2MB)
                          </p>
                          <Input
                            id="kk"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salarySlip">Slip Gaji (Opsional)</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Klik untuk upload atau drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, JPG, PNG (max. 2MB)
                        </p>
                        <Input
                          id="salarySlip"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreed}
                        onCheckedChange={setAgreed}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        Saya menyetujui{" "}
                        <Link href="/syarat-ketentuan" className="text-primary hover:underline">
                          Syarat dan Ketentuan
                        </Link>{" "}
                        serta{" "}
                        <Link href="/kebijakan-privasi" className="text-primary hover:underline">
                          Kebijakan Privasi
                        </Link>{" "}
                        yang berlaku di KOPKAR PELINDO *
                      </Label>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" disabled={!agreed}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Daftar Sekarang
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Sudah punya akun?{" "}
                <Link href="/layanan/login" className="text-primary hover:underline font-medium">
                  Login di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Keuntungan Menjadi Anggota
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Akses ke semua layanan simpan pinjam",
                "Bunga kompetitif dan transparan",
                "Proses pinjaman cepat dan mudah",
                "Program kesejahteraan eksklusif",
                "Edukasi keuangan gratis",
                "Prioritas dalam program koperasi"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Bantuan Pendaftaran?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Tim kami siap membantu Anda melalui proses pendaftaran
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <UserPlus className="mr-2 h-4 w-4" />
              Hubungi CS
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <FileText className="mr-2 h-4 w-4" />
              Panduan Pendaftaran
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}