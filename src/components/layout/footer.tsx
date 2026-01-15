import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kopkar Pelindo Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">KP</span>
              </div>
              <span className="font-bold text-lg">KOPKAR PELINDO</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Koperasi Karyawan PT Pelindo yang berkomitmen untuk meningkatkan kesejahteraan anggota melalui berbagai layanan keuangan dan program koperasi.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary-foreground/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/publikasi" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Publikasi
                </Link>
              </li>
              <li>
                <Link href="/pengumuman" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Layanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/layanan/simpan-pinjam" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Simpan Pinjam
                </Link>
              </li>
              <li>
                <Link href="/layanan/login" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Login Member
                </Link>
              </li>
              <li>
                <Link href="/layanan/registrasi" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Registrasi Anggota
                </Link>
              </li>
              <li>
                <Link href="/publikasi/laporan-keuangan" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Laporan Keuangan
                </Link>
              </li>
              <li>
                <Link href="/berita/galeri" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Galeri Foto
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">
                  Jl. Pelabuhan No. 1, Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">
                  (021) 1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-sm text-primary-foreground/80">
                  info@kopkarpelindo.co.id
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 KOPKAR PELINDO. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer