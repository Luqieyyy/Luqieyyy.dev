# MySelf

Repositori ini menyimpan projek peribadi saya. Buat masa sekarang, folder ini mengandungi satu aplikasi utama:

- `my-portfolio` - portfolio peribadi berasaskan Next.js untuk memaparkan profil, kemahiran, roadmap, sijil, dan projek.

## Struktur Ringkas

```text
MySelf/
├─ my-portfolio/
│  ├─ app/
│  ├─ components/
│  ├─ data/
│  ├─ public/
│  ├─ projects.js
│  └─ package.json
└─ README.md
```

## Tech Stack Utama

Untuk projek `my-portfolio`:

- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP
- Framer Motion
- Lenis

## Cara Jalankan Projek

Masuk ke folder projek dan jalankan development server:

```bash
cd my-portfolio
npm install
npm run dev
```

Lepas itu buka:

```text
http://localhost:3000
```

## Script Yang Ada

Dalam folder `my-portfolio`:

- `npm run dev` - jalankan development server
- `npm run build` - build production
- `npm run start` - jalankan build production
- `npm run lint` - semak kod dengan ESLint

## Kandungan Projek Portfolio

Aplikasi `my-portfolio` merangkumi:

- halaman utama portfolio
- senarai projek dengan slug dinamik
- data kemahiran, sijil, dan life roadmap
- aset imej dalam folder `public`

## Nota

- Data projek disimpan dalam `my-portfolio/projects.js`
- Data lain seperti skill, certification, dan roadmap disimpan dalam folder `my-portfolio/data`
- Jika mahu tambah projek baru, biasanya anda hanya perlu kemas kini data dan aset imej yang berkaitan
