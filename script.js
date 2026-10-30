/* ===================================================================
   SALMAN.TECH - IT SUPPORT PORTFOLIO & CV JAVASCRIPT
   Vanilla ES6+ Interactivity: Theme, Filtering, Modal, Simulator, Print
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initProjectFilter();
  initProjectModal();
  initGallery();
  initSimulator();
  initContactForm();
});

/* ================= 1. THEME SWITCHER (DARK / LIGHT) ================= */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const body = document.body;

  // Cek preferensi tersimpan
  const savedTheme = localStorage.getItem('alif_theme') || 'dark';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('alif_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (theme === 'light') {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  }
}

/* ================= 2. NAVIGATION & ACTIVE SPY ================= */
function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const printBtn = document.getElementById('btn-print-cv');

  // Mobile drawer
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Tutup saat link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Tombol Cetak CV
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Scrollspy: update active link saat scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ================= 3. FILTER PORTOFOLIO PROYEK ================= */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update tombol aktif
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ================= 4. MODAL DETAIL STUDI KASUS ================= */
const projectData = {
  1: {
    title: "Migrasi Massal 65+ PC Kantor ke Windows 11 & Standarisasi Endpoint",
    category: "Hardware & Operating System",
    date: "November 2023",
    role: "Lead IT Support Technician",
    situation: "Kantor memiliki 65 workstation dengan versi OS Windows 10 usang, konfigurasi partisi acak-acakan, antivirus berbeda-beda, dan tidak ada enkripsi disk. Hal ini rentan terhadap celah keamanan audit korporat dan instalasi manual membutuhkan waktu 3-4 jam per PC.",
    task: "Menstandarisasi seluruh armada PC ke Windows 11 Pro terenkripsi BitLocker, melengkapi aplikasi kantor resmi (Office, Antivirus, VPN), serta melakukan migrasi tanpa menghapus data pribadi staf dalam kurun waktu 2 minggu.",
    actions: [
      "Menyiapkan 1 unit PC Master (Golden Image) terinstal Windows 11 Pro, update patch terkini, driver universal, dan software kantor resmi.",
      "Melakukan Sysprep (System Preparation Tool) untuk menggeneralisasi image OS dan menghapus identifier SID mesin.",
      "Menggunakan Clonezilla via bootable USB 3.2 untuk membuat disk image kompresi tinggi berkecepatan write 120 MB/detik.",
      "Menyusun skrip unattended post-installation untuk otomatis join domain Active Directory, rename hostname terstandar (misal: ID-JKT-PC045), dan sinkronisasi profile folder OneDrive.",
      "Mengaktifkan BitLocker Drive Encryption dengan recovery key otomatis ter-backup aman di Active Directory Domain Controller."
    ],
    results: [
      "Waktu deployment terpangkas dari 180 menit menjadi hanya 25 menit per unit komputer.",
      "65 workstation selesai dimigrasi dalam waktu 9 hari kerja tanpa mengganggu jam kerja reguler karyawan.",
      "100% workstation kini memenuhi syarat compliance audit ISO 27001 (Enkripsi Disk & Endpoint Protection terpusat)."
    ],
    tools: ["Windows 11 Pro", "Clonezilla Live", "Microsoft Sysprep", "Active Directory GPO", "BitLocker", "PowerShell Automation"]
  },
  2: {
    title: "Restrukturisasi Jaringan LAN Kantor, Rack Server & Manajemen Bandwidth",
    category: "Jaringan Komputer & Server",
    date: "Agustus 2023",
    role: "Network & IT Support Administrator",
    situation: "Jaringan LAN kantor cabang sering mengalami putus koneksi (intermittent), video call sering patah-patah saat jam kerja, dan rack server berantakan tanpa label sehingga menyulitkan troubleshooting saat ada gangguan.",
    task: "Merapikan wiring rack server, memisahkan segmentasi lalu lintas jaringan, dan mengatur alokasi prioritas bandwidth internet (QoS).",
    actions: [
      "Melakukan audit fisik: re-crimping kabel LAN Cat6 yang rapuh, pemasangan Modular Patch Panel 24-Port, dan kabel manajemen vertikal/horizontal.",
      "Melabeli setiap ujung kabel LAN dan stop kontak wallplate meja kerja sesuai nomor port patch panel (Numbering System).",
      "Mengonfigurasi MikroTik CCR1009: Membuat VLAN terpisah untuk VLAN 10 (Operasional/Staf), VLAN 20 (Manajemen), VLAN 30 (Kamera CCTV), dan VLAN 40 (Tamu/Guest Portal terisolir).",
      "Menerapkan Simple Queue QoS di MikroTik dengan alokasi bandwidth prioritas untuk protokol meeting online (Zoom/Teams/Google Meet) dan ERP kantor.",
      "Memasang Access Point UniFi U6-Lite dengan seamless roaming antar lantai."
    ],
    results: [
      "Keluhan meeting online putus berkurang 90% secara terukur.",
      "Waktu pencarian kabel bermasalah saat troubleshooting berkurang dari 40 menit menjadi kurang dari 3 menit berkat sistem pelabelan rapi.",
      "Tamu kantor tidak dapat lagi mengakses printer maupun server berkas staf internal berkat isolasi VLAN."
    ],
    tools: ["MikroTik RouterOS", "VLAN 802.1Q", "Patch Panel Cat6", "UniFi Controller", "Wireshark", "Kabel Tester & Crimper"]
  },
  3: {
    title: "Implementasi Helpdesk Ticketing System & Portal Knowledge Base",
    category: "Helpdesk & Service Management",
    date: "Mei 2023",
    role: "IT Support & ITIL Coordinator",
    situation: "Semua laporan kerusakan masuk secara acak melalui pesan WhatsApp pribadi, panggilan telepon, atau colek meja. Banyak keluhan tertunda berhari-hari, tidak ada catatan riwayat perbaikan, dan user sering frustrasi karena lambat ditangani.",
    task: "Membangun sistem tiket helpdesk yang transparan, menetapkan SLA penanganan berdasar prioritas (Critical, High, Medium, Low), serta menyusun panduan mandiri pengguna.",
    actions: [
      "Mengkonfigurasi Jira Service Management dengan portal pengajuan tiket berbasis formulir sederhana bagi karyawan.",
      "Menentukan aturan SLA: Tiket Critical (Server/Jaringan mati) respon < 15 menit; Tiket Medium (Printer/Software) respon < 2 jam.",
      "Membuat 18 modul panduan mandiri bergambar (Knowledge Base) untuk masalah sepele: cara membersihkan spooler printer, reset password mandiri, dan setup VPN staf WFH.",
      "Mengintegrasikan notifikasi tiket ke email dan grup chat pengumuman IT internal."
    ],
    results: [
      "Tingkat kepuasan pengguna (CSAT) melonjak ke angka 98.2%.",
      "Tiket kendala ringan berkurang 35% karena staf dapat membaca artikel panduan mandiri.",
      "Manajemen kini memiliki data bulanan untuk melihat perangkat mana yang sering rusak sebagai acuan penggantian aset."
    ],
    tools: ["Jira Service Management", "ITIL Framework", "Confluence Knowledge Base", "Email Piping Automation"]
  },
  4: {
    title: "Penerapan Strategi Backup 3-2-1 & Pengujian Disaster Recovery",
    category: "Sistem & Keamanan Data",
    date: "Februari 2024",
    role: "IT Support & Backup Specialist",
    situation: "Data departemen Finance dan HR disimpan di harddisk lokal komputer staf tanpa backup terjadwal. Jika komputer terkena ransomware atau harddisk rusak mendadak, data perusahaan berisiko hilang permanen.",
    task: "Menerapkan strategi backup standar industri 3-2-1 (3 salinan data, 2 media berbeda, 1 salinan off-site di cloud) serta melakukan simulasi pemulihan data.",
    actions: [
      "Menyiapkan Synology DiskStation NAS 4-Bay dengan konfigurasi RAID 1 (Disk Mirroring) untuk proteksi kerusakan fisik harddisk.",
      "Memasang Synology Active Backup for Business pada setiap PC staf untuk backup citra disk secara otomatis setiap hari pukul 20:00 WIB.",
      "Mengonfigurasi enkripsi AES-256 dan sinkronisasi harian dari NAS lokal ke Cloud Storage (Wasabi / Google Workspace) untuk salinan off-site.",
      "Melakukan 'Fire Drill' simulasi bencana berkala: memformat 1 PC sampel dan melakukan bare-metal restore langsung dari NAS."
    ],
    results: [
      "Seluruh data penting keuangan dan operasional terlindungi dari ancaman virus/ransomware.",
      "Pemulihan sistem PC lengkap (Bare-Metal Restore) terbukti berhasil dalam waktu 42 menit (RTO < 1 jam) dengan zero data loss.",
      "Memberikan rasa aman bagi manajemen terhadap kepatuhan regulasi data keuangan."
    ],
    tools: ["Synology DiskStation NAS", "RAID 1 Storage", "Active Backup", "Wasabi Cloud", "AES-256 Encryption"]
  },
  5: {
    title: "Instalasi 16 Titik CCTV IP PoE & Monitoring Remote via WireGuard VPN",
    category: "Jaringan & Keamanan Fisik (IoT)",
    date: "Oktober 2023",
    role: "IT Technician & Installer",
    situation: "Kamera analog lama di area gudang logistik dan pintu masuk sering buram, kabel terkelupas, serta pimpinan kantor tidak bisa memantau rekaman dari luar tanpa membuka port forwarding yang berisiko disusupi hacker.",
    task: "Mengganti sistem kamera dengan 16 unit CCTV IP 4K PoE, memasang NVR berkapasitas 8TB, serta menyediakan akses pemantauan remote yang aman.",
    actions: [
      "Penarikan kabel STP Outdoor Cat6 dengan pelindung pipa PVC untuk mencegah gigitan tikus dan paparan cuaca.",
      "Pemasangan switch PoE Gigabit dengan power budget 250W untuk menghidupkan kamera tanpa butuh adaptor listrik tambahan di plafon.",
      "Konfigurasi NVR Hikvision / Dahua dengan kompresi hemat bandwidth H.265+ dan deteksi gerak (Motion Detection).",
      "Membuat tunnel VPN WireGuard di router kantor sehingga staf keamanan dan direksi dapat membuka live feed via smartphone secara aman tanpa mengekspos port kamera ke publik."
    ],
    results: [
      "Kualitas gambar jernih 4K bahkan dalam kondisi malam hari (Infrared & ColorVu).",
      "Rekaman tersimpan aman selama 35 hari berkat efisiensi kompresi video H.265+.",
      "Keamanan siber terjamin 100% tanpa adanya port publik yang terbuka di router."
    ],
    tools: ["IP Camera 4K PoE", "Switch PoE Managed", "NVR H.265+", "WireGuard VPN", "Kabel STP Outdoor Cat6"]
  },
  6: {
    title: "Program Pemeliharaan Preventif & Penyelamatan Aset Workstation",
    category: "Hardware & Preventive Maintenance",
    date: "Januari 2024",
    role: "IT Hardware Specialist",
    situation: "Perusahaan berniat membuang 40 unit laptop dan PC lama berumur 3-4 tahun karena karyawan mengeluh lambat, panas menyengat, dan sering freeze saat membuka Excel berukuran besar.",
    task: "Melakukan audit teknis untuk menyelamatkan aset yang masih layak dan mengoptimalkan performanya dengan anggaran minim.",
    actions: [
      "Membongkar seluruh unit, membersihkan sirkulasi fan/heatsink dari gumpalan debu tebal, dan mengganti pasta prosesor kering dengan thermal paste performa tinggi.",
      "Mengganti harddisk mekanik (HDD) lama dengan SSD NVMe M.2 / SATA SSD 512GB.",
      "Melakukan upgrade RAM dari 4GB single-channel menjadi 16GB dual-channel.",
      "Melakukan fresh install Windows 11 teroptimasi serta menonaktifkan startup program yang tidak perlu."
    ],
    results: [
      "Waktu booting Windows turun drastis dari 2 menit 10 detik menjadi hanya 12 detik.",
      "Suhu prosesor saat bekerja berat turun rata-rata 18°C dan tidak ada lagi fenomena freeze/throttling.",
      "Menghemat anggaran pengadaan unit baru perusahaan sekitar Rp 240.000.000,- untuk 40 unit komputer."
    ],
    tools: ["Thermal Paste Arctic MX-4", "SSD NVMe Upgrade", "MemTest86 Diagnostic", "CrystalDiskInfo", "Air Duster"]
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  window.openProjectModal = function(id) {
    const data = projectData[id];
    if (!data) return;

    modalTitle.textContent = data.title;
    
    let actionsList = data.actions.map(act => `<li>${act}</li>`).join('');
    let resultsList = data.results.map(res => `<li><strong>${res}</strong></li>`).join('');
    let toolsTags = data.tools.map(t => `<span class="mini-tag">${t}</span>`).join(' ');

    modalContent.innerHTML = `
      <div style="margin-bottom: 16px;">
        <span class="role-badge">${data.category}</span>
        <span style="font-size: 0.85rem; color: var(--text-dim); margin-left: 10px;">📅 ${data.date} • Peran: <strong>${data.role}</strong></span>
      </div>

      <div class="modal-section">
        <h4>1. Latar Belakang & Situasi (Situation)</h4>
        <p>${data.situation}</p>
      </div>

      <div class="modal-section">
        <h4>2. Sasaran & Tugas (Task)</h4>
        <p>${data.task}</p>
      </div>

      <div class="modal-section">
        <h4>3. Tindakan & Langkah Teknis (Action)</h4>
        <ul style="padding-left: 20px; list-style-type: disc;">
          ${actionsList}
        </ul>
      </div>

      <div class="modal-section">
        <h4>4. Hasil Nyata & Dampak (Result)</h4>
        <ul style="padding-left: 20px; list-style-type: disc; color: var(--success);">
          ${resultsList}
        </ul>
      </div>

      <div class="modal-section" style="margin-bottom: 0;">
        <h4>Peralatan & Teknologi Digunakan:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
          ${toolsTags}
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ================= 5. INTERACTIVE IT DIAGNOSTIC SIMULATOR ================= */
function initSimulator() {
  // Tab switching
  const simTabBtns = document.querySelectorAll('.sim-tab-btn');
  const simTabContents = document.querySelectorAll('.sim-tab-content');

  simTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      simTabBtns.forEach(b => b.classList.remove('active'));
      simTabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // Tab 1: Ping Simulator
  const pingBtn = document.getElementById('btn-run-ping');
  const pingTargetInput = document.getElementById('ping-target');
  const pingOutput = document.getElementById('ping-output');

  window.setPingTarget = function(val) {
    const cleanVal = val.split(' ')[0];
    if (pingTargetInput) {
      pingTargetInput.value = cleanVal;
    }
  };

  if (pingBtn && pingOutput) {
    pingBtn.addEventListener('click', runPingSimulation);
  }

  function runPingSimulation() {
    const rawTarget = pingTargetInput.value.trim() || '8.8.8.8';
    const target = rawTarget.split(' ')[0];

    pingBtn.disabled = true;
    pingBtn.textContent = "Menguji...";
    pingOutput.textContent = `salman@workstation:~$ ping -c 4 ${target}\n`;
    pingOutput.textContent += `PING ${target} (${target}): 56 data bytes\n`;

    let seq = 1;
    const interval = setInterval(() => {
      let timeMs = 15;
      let ttl = 117;

      if (target.startsWith('192.168.1.1')) {
        timeMs = (Math.random() * 1.5 + 0.8).toFixed(2);
        ttl = 64;
      } else if (target.startsWith('192.168.1.250')) {
        timeMs = (Math.random() * 3 + 2).toFixed(2);
        ttl = 64;
      } else if (target.startsWith('10.0.0.50')) {
        timeMs = (Math.random() * 2 + 1).toFixed(2);
        ttl = 128;
      } else {
        timeMs = (Math.random() * 10 + 12).toFixed(2);
        ttl = 117;
      }

      pingOutput.textContent += `64 bytes from ${target}: icmp_seq=${seq} ttl=${ttl} time=${timeMs} ms\n`;
      pingOutput.scrollTop = pingOutput.scrollHeight;

      seq++;
      if (seq > 4) {
        clearInterval(interval);
        pingOutput.textContent += `\n--- ${target} ping statistics ---\n`;
        pingOutput.textContent += `4 packets transmitted, 4 packets received, 0.0% packet loss\n`;
        pingOutput.textContent += `Status Diagnostik: [✔ SEHAT] Latensi normal, Gateway & DNS terhubung lancar.\n`;
        pingBtn.disabled = false;
        pingBtn.textContent = "Jalankan Ping Test";
        pingOutput.scrollTop = pingOutput.scrollHeight;
      }
    }, 450);
  }

  // Tab 2: Subnet Calculator
  const calcBtn = document.getElementById('btn-calc-subnet');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateSubnet);
    calculateSubnet(); // Jalankan sekali saat init
  }

  function calculateSubnet() {
    const ipInput = document.getElementById('subnet-ip').value.trim() || '192.168.10.0';
    const cidr = parseInt(document.getElementById('subnet-cidr').value, 10);

    const masks = {
      24: { mask: "255.255.255.0", hosts: 254, blockSize: 256, rec: "Cocok untuk seluruh lantai kantor atau divisi besar." },
      25: { mask: "255.255.255.128", hosts: 126, blockSize: 128, rec: "Membagi 1 jaringan jadi 2 departemen seimbang." },
      26: { mask: "255.255.255.192", hosts: 62, blockSize: 64, rec: "Segmentasi divisi Keuangan / HR / Ruang Rapat." },
      27: { mask: "255.255.255.224", hosts: 30, blockSize: 32, rec: "Segmentasi Staf Server Lokal / Tim IT Khusus." },
      28: { mask: "255.255.255.240", hosts: 14, blockSize: 16, rec: "Subnet Printer Jaringan & Scanner Terpusat." },
      29: { mask: "255.255.255.248", hosts: 6, blockSize: 8, rec: "Blok IP Publik ISP atau Server DMZ." },
      30: { mask: "255.255.255.252", hosts: 2, blockSize: 4, rec: "Koneksi Point-to-Point antar Router MikroTik." }
    };

    const info = masks[cidr] || masks[24];
    const parts = ipInput.split('.').map(p => parseInt(p, 10) || 0);
    const lastOctet = parts[3] || 0;
    const blockStart = Math.floor(lastOctet / info.blockSize) * info.blockSize;
    const blockEnd = blockStart + info.blockSize - 1;

    const baseNetwork = `${parts[0]}.${parts[1]}.${parts[2]}`;
    const networkID = `${baseNetwork}.${blockStart}`;
    const broadcastIP = `${baseNetwork}.${blockEnd}`;
    const firstHost = `${baseNetwork}.${blockStart + 1}`;
    const lastHost = `${baseNetwork}.${blockEnd - 1}`;

    document.getElementById('sub-mask').textContent = info.mask;
    document.getElementById('sub-net').textContent = networkID;
    document.getElementById('sub-range').textContent = `${firstHost} - ${lastHost}`;
    document.getElementById('sub-bcast').textContent = broadcastIP;
    document.getElementById('sub-hosts').textContent = `${info.hosts} Perangkat Aktif`;
    document.getElementById('sub-usage').textContent = info.rec;
  }

  // Tab 3: Troubleshooting Guide
  const troubleSelect = document.getElementById('trouble-scenario');
  const troubleBtn = document.getElementById('btn-show-trouble');
  const troubleGuideBox = document.getElementById('trouble-guide');

  const troubleshootingGuides = {
    net_drop: {
      title: "Kendala: PC Karyawan 'No Internet Access' (Tanda Seru Kuning)",
      steps: [
        { title: "Verifikasi Fisik (Layer 1):", text: "Periksa lampu indikator LED port LAN di belakang PC. Pastikan kabel RJ45 terkunci bunyi 'klik' dan tidak tertekuk." },
        { title: "Pemeriksaan IP via CMD (Layer 3):", text: "Buka Command Prompt, jalankan `ipconfig /all`. Jika IP beralamat `169.254.x.x` (APIPA), berarti PC gagal meminta IP ke DHCP Server." },
        { title: "Penyegaran Konfigurasi Jaringan:", text: "Jalankan perintah `ipconfig /release` lalu `ipconfig /renew` dan `ipconfig /flushdns`." },
        { title: "Pengujian Ping Bertingkat:", text: "Ping Loopback `127.0.0.1` (uji NIC) ➔ Ping Gateway `192.168.1.1` (uji Switch/Router) ➔ Ping DNS `8.8.8.8` (uji internet publik)." },
        { title: "Solusi Akhir:", text: "Jika tetap gagal, reset network stack dengan `netsh winsock reset` lalu restart PC." }
      ]
    },
    printer_offline: {
      title: "Kendala: Printer Jaringan Mendadak 'Offline / Error Printing'",
      steps: [
        { title: "Cek Status Fisik & IP Printer:", text: "Pastikan printer menyala, kertas tidak paper jam, tinta ready, dan catat IP statis di layar printer (misal 192.168.1.250)." },
        { title: "Tes Ping ke IP Printer:", text: "Ping IP printer dari komputer teknisi. Jika reply aman, kendala ada pada spooler atau port driver." },
        { title: "Restart Print Spooler Service:", text: "Buka `services.msc` ➔ cari 'Print Spooler' ➔ klik Restart. Atau via CMD: `net stop spooler` & `net start spooler`." },
        { title: "Bersihkan Antrian Cetak yang Macet:", text: "Hapus berkas tersangkut di folder: `C:\\Windows\\System32\\spool\\PRINTERS`." },
        { title: "Konfigurasi Standard TCP/IP Port:", text: "Pastikan pengaturan port di printer properties mengarah ke IP statis yang benar, bukan port WSD yang sering berganti." }
      ]
    },
    pc_slow: {
      title: "Kendala: Laptop/PC Sangat Lambat & Disk Usage 100%",
      steps: [
        { title: "Identifikasi via Task Manager:", text: "Tekan `Ctrl + Shift + Esc` ➔ periksa kolom CPU, Memory, dan Disk. Cari proses background yang memakan resource abnormal." },
        { title: "Pemeriksaan Kesehatan Storage (HDD/SSD):", text: "Gunakan CrystalDiskInfo untuk melihat atribut S.M.A.R.T. Jika status 'Caution / Bad Sector', segera lakukan backup data darurat!" },
        { title: "Bersihkan Cache & Startup Bloatware:", text: "Buka Run `temp` dan `%temp%`, hapus file sampah. Matikan aplikasi startup yang tidak krusial di tab Startup Task Manager." },
        { title: "Cek Integritas Sistem File:", text: "Jalankan CMD as Administrator: `sfc /scannow` dan `dism /online /cleanup-image /restorehealth`." },
        { title: "Rekomendasi Upgrade:", text: "Jika sistem masih memakai HDD mekanik, sarankan manajemen untuk upgrade ke SSD SATA/NVMe dan minimal RAM 8GB/16GB." }
      ]
    },
    bsod: {
      title: "Kendala: Komputer Mengalami Blue Screen (BSOD) Berulang",
      steps: [
        { title: "Catat Stop Code Error:", text: "Contoh: `CRITICAL_PROCESS_DIED`, `MEMORY_MANAGEMENT`, `IRQL_NOT_LESS_OR_EQUAL`." },
        { title: "Analisis Berkas Dump (Minidump):", text: "Buka berkas di `C:\\Windows\\Minidump` menggunakan tool BlueScreenView untuk mengetahui file driver penyebab (misal driver grafis/Wi-Fi)." },
        { title: "Uji Kesehatan Memory RAM:", text: "Jalankan Windows Memory Diagnostic (`mdsched.exe`) atau boot via MemTest86 untuk memastikan stik RAM tidak korup." },
        { title: "Cek Suhu & Pasta Pendingin:", text: "Periksa apakah heatsink fan berputar normal. Suhu CPU di atas 90°C dapat memicu shutdown/BSOD darurat." },
        { title: "Rollback Driver / System Restore:", text: "Jika BSOD terjadi setelah update Windows, masuk ke Safe Mode dan lakukan Rollback Driver atau restore point." }
      ]
    },
    ransomware: {
      title: "Kendala: Dugaan Terinfeksi Ransomware / Berkas Menjadi Ekstensi Aneh",
      steps: [
        { title: "LANGKAH 1 (KRUSIAL) - Cabut Kabel LAN & Wi-Fi:", text: "SEGERA putus sambungan jaringan detik itu juga untuk mencegah penyebaran lateral ke komputer lain dan file server kantor!" },
        { title: "Dokumentasikan Catatan Tebusan (Ransom Note):", text: "Ambil foto layar untuk identifikasi varian enkripsi (misal LockBit, Phobos)." },
        { title: "Isolasi Akun Active Directory:", text: "Nonaktifkan (Disable) user account di Active Directory agar tidak menularkan akses ke shared network drive." },
        { title: "Pembersihan & Wipe Total:", text: "Lakukan format bersih (Clean Format) pada seluruh partisi storage komputer yang terinfeksi." },
        { title: "Restore dari Backup Terisolasi:", text: "Pulihkan data karyawan hanya dari backup NAS/Cloud yang terbukti bersih sebelum tanggal insiden." }
      ]
    }
  };

  function renderTroubleGuide() {
    const val = troubleSelect.value;
    const guide = troubleshootingGuides[val];
    if (!guide || !troubleGuideBox) return;

    let html = `<h4 style="font-size:1.05rem; color:var(--primary); margin-bottom:14px; font-weight:700;">${guide.title}</h4>`;
    guide.steps.forEach((step, idx) => {
      html += `
        <div class="t-step">
          <div class="t-step-num">${idx + 1}</div>
          <div class="t-step-content">
            <strong>${step.title}</strong>
            <span>${step.text}</span>
          </div>
        </div>
      `;
    });

    troubleGuideBox.innerHTML = html;
  }

  if (troubleBtn && troubleSelect) {
    troubleBtn.addEventListener('click', renderTroubleGuide);
    troubleSelect.addEventListener('change', renderTroubleGuide);
    renderTroubleGuide(); // Jalankan default
  }
}

/* ================= 6. CONTACT FORM SIMULATOR ================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) return;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sedang Mengirim...</span>`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Pesan Terkirim!</span>`;

      feedback.classList.remove('hidden');
      feedback.className = "form-feedback success";
      feedback.innerHTML = `
        <strong>Terima kasih, ${name}!</strong><br>
        Pesan Anda terkait "<em>${subject}</em>" telah dicatat. Saya akan segera membalas ke email <u>${email}</u>.<br>
        <span style="font-size:0.8rem; display:inline-block; margin-top:6px;">Butuh respon kilat? Anda juga dapat langsung mengklik tombol WhatsApp di bagian atas.</span>
      `;

      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = `
          <span>Kirim Pesan Sekarang</span>
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }, 4000);
    }, 800);
  });
}

/* ================= 7. GALERI FOTO & LIGHTBOX CONTROLLER ================= */
const galleryPhotos = [
  {
    title: "Perakitan & Upgrade NVMe SSD Workstation",
    category: "Hardware & PC",
    badgeClass: "hw",
    location: "Workstation Lab / On-site",
    tag: "Preventive Maintenance",
    desc: "Dokumentasi pergantian drive lama ke SSD M.2 NVMe berkecepatan tinggi, pembersihan sirkulasi kipas, dan repasting thermal paste pendingin prosesor guna mengatasi suhu throttling."
  },
  {
    title: "Restrukturisasi Wiring Rack Server & Patch Panel",
    category: "Jaringan & Server",
    badgeClass: "net",
    location: "Server Room Lt. 2",
    tag: "Cable Management",
    desc: "Dokumentasi penataan kabel UTP Cat6 dengan numbering patch panel, pemisahan kabel power vs data, dan perapihan switch gigabit agar memudahkan identifikasi port bermasalah."
  },
  {
    title: "Konfigurasi MikroTik Bandwidth Management & VLAN",
    category: "Jaringan & Server",
    badgeClass: "net",
    location: "Network Control Room",
    tag: "MikroTik RouterOS",
    desc: "Tangkapan layar konfigurasi Simple Queue QoS bandwidth internet dan segmentasi VLAN antar departemen untuk mencegah lag pada sesi video meeting manajemen."
  },
  {
    title: "Konfigurasi Network Printer & Print Server",
    category: "Perangkat Kantor",
    badgeClass: "dev",
    location: "Operational Office",
    tag: "Network Peripherals",
    desc: "Pemasangan printer jaringan multifungsi, penetapan IP statis, pembersihan spooler cetak yang tersangkut, dan mapping printer share ke seluruh workstation karyawan."
  },
  {
    title: "Instalasi Kamera CCTV IP PoE & Penarikan Kabel STP",
    category: "Keamanan & IoT",
    badgeClass: "dev",
    location: "Area Gudang & Lobi",
    tag: "CCTV Surveillance",
    desc: "Penarikan kabel shielded twisted pair (STP), pemasangan bracket outdoor kamera 4K PoE, dan integrasi stream video terenkripsi melalui VPN WireGuard."
  },
  {
    title: "Rollout & Kloning Massal Windows 11 Workstation",
    category: "Hardware & OS",
    badgeClass: "hw",
    location: "Deployment Bench",
    tag: "OS Rollout & BitLocker",
    desc: "Proses kloning massal golden image Windows 11 terstandarisasi menggunakan Clonezilla, aktivasi BitLocker, dan auto-join Active Directory tanpa instalasi manual satu per satu."
  }
];

let currentLightboxIndex = 0;

function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  // Filter Galeri
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCat = btn.getAttribute('data-gallery-filter');

      galleryCards.forEach(card => {
        const itemCat = card.getAttribute('data-gallery-cat');
        if (filterCat === 'all' || itemCat === filterCat) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal Controls
  const lightbox = document.getElementById('gallery-lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  window.openLightbox = function(index) {
    currentLightboxIndex = index;
    renderLightboxItem();
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  function renderLightboxItem() {
    const data = galleryPhotos[currentLightboxIndex];
    if (!data) return;

    // Ambil visual dari card bersangkutan
    const card = galleryCards[currentLightboxIndex];
    const thumbWrap = card ? card.querySelector('.gallery-img-canvas') : null;
    const mediaWrap = document.getElementById('lightbox-media');

    if (thumbWrap && mediaWrap) {
      mediaWrap.innerHTML = thumbWrap.innerHTML;
    }

    const badge = document.getElementById('lightbox-badge');
    badge.textContent = data.category;
    badge.className = `gallery-badge ${data.badgeClass}`;

    document.getElementById('lightbox-counter').textContent = `Foto ${currentLightboxIndex + 1} dari ${galleryPhotos.length}`;
    document.getElementById('lightbox-title').textContent = data.title;
    document.getElementById('lightbox-desc').textContent = data.desc;
    document.getElementById('lightbox-loc').textContent = `📍 ${data.location}`;
    document.getElementById('lightbox-tag').textContent = `🏷️ ${data.tag}`;
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
      renderLightboxItem();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
      renderLightboxItem();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
        renderLightboxItem();
      }
      if (e.key === 'ArrowRight') {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
        renderLightboxItem();
      }
    }
  });
}
