# KOPKAR PELINDO - Website Koperasi Karyawan PT Pelindo

## 📋 Project Overview

Website resmi untuk Koperasi Karyawan PT Pelindo (KOPKAR PELINDO) dengan nuansa biru langit yang soft dan modern. Website ini dibangun menggunakan Next.js 15 dengan TypeScript dan Tailwind CSS.

## 🎨 Design & Theme

- **Color Scheme**: Nuansa biru langit yang soft dengan gradasi dari biru muda ke biru tua
- **Design System**: Menggunakan shadcn/ui components dengan konsistensi visual
- **Responsive**: Fully responsive design untuk mobile, tablet, dan desktop
- **Typography**: Font yang modern dan mudah dibaca

## 🚀 Features

### 1. Menu Navigasi Lengkap
- **Beranda**: Halaman utama dengan informasi dan aktivitas koperasi
- **Profile**: 4 sub menu (Struktur Organisasi, Visi Misi, Tugas Fungsi, Regulasi)
- **Berita**: 3 sub menu (Siaran Pers, Warta Koprasi, Galeri Foto)
- **Publikasi**: 3 sub menu (Laporan Keuangan, Data Koprasi, Kegiatan)
- **Pengumuman**: Informasi penting dan pengumuman terkini
- **Layanan**: 3 sub menu (Simpan Pinjam, Login Member, Registrasi)

### 2. Halaman Beranda
- Hero section dengan informasi utama
- Statistik koperasi (anggota, aset, dll)
- Layanan unggulan dengan card interaktif
- Informasi terkini dari berbagai kategori
- Call-to-action untuk registrasi

### 3. Profile Section
- **Struktur Organisasi**: Hierarki lengkap pengurus dan pengawas
- **Visi dan Misi**: Tujuan dan nilai-nilai koperasi
- **Tugas dan Fungsi**: Penjelasan peran dan tanggung jawab
- **Regulasi**: Dasar hukum dan peraturan yang berlaku

### 4. Berita Section
- **Siaran Pers**: Pengumuman resmi dan pernyataan pers
- **Warta Koprasi**: Berita internal dan perkembangan koperasi
- **Galeri Foto**: Dokumentasi foto kegiatan dan acara

### 5. Publikasi Section
- **Laporan Keuangan**: Laporan audited dan triwulan
- **Data Koprasi**: Statistik keanggotaan dan kinerja
- **Kegiatan**: Dokumentasi dan laporan kegiatan

### 6. Pengumuman
- Pengumuman penting dengan kategori prioritas
- Filter berdasarkan kategori dan tanggal
- Sistem berlangganan pengumuman

### 7. Layanan Section
- **Simpan Pinjam**: Informasi produk simpanan dan pinjaman
- **Login Member**: Portal akses member
- **Registrasi**: Formulir pendaftaran anggota baru

## 🛠️ Tech Stack

- **Framework**: Next.js 15 dengan App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Database**: Prisma ORM dengan SQLite
- **State Management**: Zustand (client), TanStack Query (server)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout dengan header dan footer
│   ├── page.tsx                # Halaman beranda
│   ├── profile/                # Halaman profile
│   │   ├── page.tsx
│   │   ├── struktur/
│   │   ├── visi-misi/
│   │   ├── tugas-fungsi/
│   │   └── regulasi/
│   ├── berita/                 # Halaman berita
│   │   ├── page.tsx
│   │   ├── siaran-pers/
│   │   ├── warta/
│   │   └── galeri/
│   ├── publikasi/              # Halaman publikasi
│   │   ├── page.tsx
│   │   ├── laporan-keuangan/
│   │   ├── data/
│   │   └── kegiatan/
│   ├── pengumuman/             # Halaman pengumuman
│   │   └── page.tsx
│   └── layanan/                # Halaman layanan
│       ├── page.tsx
│       ├── simpan-pinjam/
│       ├── login/
│       └── registrasi/
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Header dengan navigasi
│   │   └── footer.tsx          # Footer dengan informasi
│   └── ui/                     # shadcn/ui components
└── lib/
    ├── db.ts                   # Database client
    └── utils.ts                # Utility functions
```

## 🎯 Key Features

### Responsive Navigation
- Desktop: Dropdown menu dengan hover effects
- Mobile: Hamburger menu dengan slide-out drawer
- Sticky header dengan backdrop blur

### Interactive Components
- Cards dengan hover effects
- Buttons dengan loading states
- Forms dengan validation
- Image galleries dengan lightbox

### Content Management
- Dynamic content rendering
- Category-based filtering
- Search functionality
- Pagination for large content

### User Experience
- Smooth scrolling
- Loading states
- Error handling
- Accessibility compliance

## 🌐 SEO & Performance

- Meta tags yang lengkap untuk setiap halaman
- Open Graph dan Twitter Card support
- Semantic HTML structure
- Optimized images dengan lazy loading
- Fast loading dengan code splitting

## 🔧 Development

### Prerequisites
- Node.js 18+
- Bun package manager

### Installation
```bash
bun install
```

### Development
```bash
bun run dev
```

### Build
```bash
bun run build
```

### Lint
```bash
bun run lint
```

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Color Scheme

- **Primary**: Biru langit (#3B82F6)
- **Secondary**: Biru muda (#60A5FA)
- **Accent**: Biru tua (#1E40AF)
- **Background**: Putih dengan sentuhan biru
- **Text**: Abu-abu gelap untuk kontras

## 📊 Generated Images

Website dilengkapi dengan gambar-gambar yang dihasilkan menggunakan AI:
- Hero background: Gedung koperasi modern
- Team meeting: Kolaborasi tim profesional
- Logo: Logo modern KOPKAR PELINDO

## 🔐 Security

- Input validation pada semua forms
- XSS protection
- CSRF protection
- Secure authentication flow

## 🚀 Deployment Ready

Website sudah siap untuk deployment dengan:
- Environment variables configuration
- Production build optimization
- Error boundary implementation
- Performance monitoring ready

## 📈 Future Enhancements

- Integration dengan backend API
- Real-time notifications
- Advanced search functionality
- Multi-language support
- Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see LICENSE file for details

---

**Developed with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**