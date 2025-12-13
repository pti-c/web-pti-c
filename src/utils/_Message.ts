export const MsgPositron = (step: number) => {
  /** handle message to user */
  let message = "";

  if (step === 1) {
    message =
      "Kamu udah siap untuk mulai? animasinya bakal jalan sekitar 3-5 menit 🙌🀄 ";
  } else if (step === 2) {
    message =
      "Kamu tau ngga sih? POSITRON adalah Program orientasi bagi mahasiswa baru Teknik Elektro dan Informatika untuk mengenal lingkungan kampus, membangun kekompakan dan kekeluargaan, serta membentuk civitas akademika yang berkarakter dan berbudi pekerti baik...🤨📝💡";
  } else if (step === 3) {
    message = "Sekarang, yukk!! ikuti cerita neo-c di Positron-2025...🥳🎈✨.";
  } else if (step === 4) {
    message =
      "Sebelum itu, kita kenalan dulu yuk sama para mentor neo-c di Positon-2025..🤝🙌";
  } else if (step === 5) {
    message =
      "Kenalin, AISHA RISKY FEBRILA, dia tuh mentor kita yang paling cool dan pekerja keras loh...😎🔥";
  } else if (step === 6) {
    message =
      "Kenalin, ANDIENIE DESTYA KRISWAHYUNI, dia dikenal sangat ceria loh...🌻, di prodi pti siapa sih yang engga kenal dia...☀️🐝";
  } else if (step === 7) {
    message =
      "Kenalin, IVAN PRAMUDITA HANGGARA, selain mentor, dia juga asisten praktikum di neo-c loh gais🤗, biasa beliau ini emang cinta bgt sama neo-c😏";
  } else if (step === 8) {
    message =
      "Kenalin, ALFIAN IRVAN ARDIANTO, dia ini mentor kita yg jail tapi baik hati loh...😈❤️ kalau sama beliau kita kaya love hate relationship";
  } else if (step === 9) {
    message =
      "Waktu positron berlangsung, kami juga dipimpin sama dewan komunal lohh... biar komunikasi antara maba dan mentor berjalan dengan lancar...🌟👑";
  } else if (step === 10) {
    message =
      "Kenalin, MUHAMMAD ZAKY ZHALIFUNNAS, dia adalah perwakilan dewan komunal prodi pendidikan teknik informatika lebih tepatnya dari neo-c...😎✨⚜️";
  } else if (step === 11) {
    message =
      "Selama positron berlangsung, kami juga harus pakai dresscode harian loh..👕👔";
  } else if (step === 12) {
    message =
      "Kalau ngga taat aturan, kami diingetin sama dewan komunal terus ditegur juga sama kakak mentor😡🙄 ngga lupa pelanggarannya juga di catat sama kakak mentor📕🖊️";
  } else if (step === 13) {
    message =
      "Tau ngga sih? kegiatan yang pertama kali kami laksanakan adalah Forum Maba, yaitu kegiatan dalam rangka menyambut mahasiswa baru. Melalui Forum Maba, mahasiswa baru diajak memahami identitasnya sebagai bagian dari civitas akademika..🧐🔍";
  } else if (step === 14) {
    message = "Ini dokumentasi kami waktu forum maba..🥳🙌";
  } else if (step === 15) {
    message =
      "Kegiatan kami yang kedua adalah ARUS 📚, yaitu kegiatan pembinaan yang mengajarkan berbagai nilai penting. Melalui ARUS, kami diajarkan arti kedisiplinan dalam mengatur waktu dan tanggung jawab 📏⏰, pentingnya kekompakan 🤝, serta nilai kebersamaan agar tercipta lingkungan yang solid dan saling mendukung 💪✨.";
  } else if (step === 16) {
    message = "Ini dokumentasi kami waktu ARUS..🙂🙌";
  } else if (step === 17) {
    message =
      "Kegiatan kami yang ketiga adalah LDK (Latihan Dasar Kepemimpinan) 🏕️, yaitu kegiatan pelatihan untuk mengasah kemampuan kepemimpinan dan keterampilan mahasiswa baru. Melalui LDK, kami dilatih untuk membangun kepercayaan diri, meningkatkan rasa tanggung jawab, serta mengembangkan kemampuan bekerja sama dalam tim ...🤝✨👑";
  } else if (step === 18) {
    message = "Ini dokumentasi kami waktu LDK..🙂🙌";
  } else if (step === 19) {
    message =
      "Kegiatan kami yang keempat adalah IOH (Introduction of Himpunan) 🎉, yaitu kegiatan yang bertujuan untuk mengenalkan mahasiswa baru kepada berbagai organisasi yang ada di lingkungan Departemen Teknik Elektro dan Informatika. Melalui kegiatan ini, mahasiswa baru diberikan gambaran mengenai fungsi, peran, serta program kerja masing-masing bidang di dalam himpunan 🌟🔥.";
  } else if (step === 20) {
    message = "Ini dokumentasi kami waktu IOH..🥳🙌";
  } else if (step === 21) {
    message =
      "Kegiatan kami yang kelima adalah ARUS 2, yang merupakan forum strategis untuk menentukan arah dan masa depan angkatan kami ke depannya. Pada kegiatan ini, kami membahas berbagai hal penting yang berkaitan dengan keberlanjutan angkatan...👥✨";
  } else if (step === 22) {
    message = "Ini dokumentasi kami waktu ARUS 2..🙂🙌";
  } else if (step === 23) {
    message =
      "Kegiatan kami yang keenam adalah NAKO, yaitu acara peresmian mahasiswa baru menjadi mahasiswa sah di DTEI sekaligus penutupan rangkaian ospek departemen. Kegiatan ini bertujuan memberikan pengalaman berkesan, mengasah skill dan bakat mahasiswa baru, serta menumbuhkan semangat kerja sama, kebersamaan, dan solidaritas angkatan sehingga tercipta rasa UNITY 🤝✨.";
  } else if (step === 24) {
    message = "Ini dokumentasi kami waktu Nako..🥳🙌";
  } else if (step === 25) {
    message =
      "Setelah ospek departemen selesai, ada seven segment loh!! Seven segment adalah orang yang bertanggungjawab mengompakkan dan menyatukan mahasiswa di Departemen Elektro dan Informatika 🌟👑";
  } else if (step === 26) {
    message =
      "kenalin, THERESA NATHALIE DAVNY WOWILING, dia salah satu seven segmen dari neo-c!! ✨🤩";
  } else if (step === 27) {
    message =
      "Terima kasih sudah meluangkan waktu untuk lihat animasi ini dari awal sampai akhir. Semoga bisa menghibur dan menginspirasi teman-teman semua! 🥳🙌";
  } else {
    message = "";
  }

  return message;
};
