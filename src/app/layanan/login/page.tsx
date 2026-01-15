import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, LogIn, Eye, EyeOff, Shield, Smartphone, Mail, Lock } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

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
                <LogIn className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">Login Member</h1>
                <p className="text-xl text-muted-foreground">
                  Akses portal member untuk melihat saldo, transaksi, dan layanan eksklusif
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Selamat Datang Kembali</CardTitle>
                <CardDescription>
                  Masuk ke akun KOPKAR PELINDO Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email atau Nomor Anggota</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="text"
                        placeholder="Masukkan email atau nomor anggota"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password"
                        className="pl-10 pr-10"
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Ingat saya
                      </Label>
                    </div>
                    <Link href="/layanan/lupa-password" className="text-sm text-primary hover:underline">
                      Lupa password?
                    </Link>
                  </div>

                  <Button className="w-full" size="lg">
                    <LogIn className="mr-2 h-4 w-4" />
                    Masuk
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Atau masuk dengan
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Mobile
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Biometrik
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Belum punya akun?{" "}
                <Link href="/layanan/registrasi" className="text-primary hover:underline font-medium">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Keuntungan Login Member
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Monitor Saldo</h3>
                  <p className="text-sm text-muted-foreground">
                    Cek saldo simpanan dan riwayat transaksi secara real-time
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <LogIn className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Ajukan Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Ajukan pinjaman dan buka simpanan baru secara online
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Notifikasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Dapatkan notifikasi transaksi dan informasi penting
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Keamanan Terjamin
              </h2>
              <p className="text-lg text-muted-foreground">
                Kami melindungi data dan transaksi Anda dengan teknologi terkini
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Enkripsi Data</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Semua data pribadi dan transaksi Anda dienkripsi dengan standar keamanan tertinggi.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Two-Factor Authentication</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Tambahan keamanan dengan verifikasi dua faktor untuk melindungi akun Anda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Bantuan Login?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Tim support kami siap membantu Anda mengatasi masalah login 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Smartphone className="mr-2 h-4 w-4" />
              Hubungi Support
            </Button>
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              FAQ Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}