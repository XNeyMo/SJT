<div align='center'>
  <img src='https://github.com/XNeyMo/SJT/blob/main/assets/SAIJITAN.png' alt='Logo' />
</div>

---

This project revolutionizes the way university students plan their academic schedules. It addresses a common concern among students: <b>uncertainty about whether the chosen schedule is truly optimal</b>. This innovative web platform eliminates this uncertainty by leveraging advanced algorithms to analyze all possible schedule combinations. This ensures that you do not receive just any schedule, but the most efficient and effective one adapted to your preferences and academic requirements.

<b>Have you ever wondered if your current schedule could be better optimized?</b> With this platform, those worries become a thing of the past. By seamlessly integrating an easy-to-use interface design with a powerful search algorithm, you'll be able to effortlessly customize your course load and preferred schedules. <b>The result?</b> A schedule that not only meets your academic needs but also maximizes your time and minimizes overlaps or unnecessary spaces.

Say goodbye to the hassle of manually comparing schedules or second-guessing your options. This solution provides clarity and confidence, ensuring that each student can make informed decisions about their academic journey. Transform the way you plan and manage your college schedule with <b>SAIJITAN</b>.

## :scroll: Table of Contents

1. :grey_question: [How to Use ?](#how-to-use)
2. :desktop_computer: [Technical Information](#technical-information)
3. :copyright: [License](#license)
4. :wave: [Author](#author)

## <a name="how-to-use"> :grey_question: How to Use ?</a>

To start generating your university schedule with SAIJITAN, the process is direct and efficient. Once you access [SAIJITAN](https://saijitan.netlify.app) through your web browser, there is no registration or login required. Simply look for the <b>"Use It"</b> button in the top right corner and click to get started.

Within SAIJITAN's intuitive interface, you will enter information about the subjects you plan to take during the semester. For each subject option, specify the days of the week it has, as well as their time slots. Additionally, if you have multiple options for the same subject (for example, different sections or groups), you can indicate that too.

Once you have entered all the relevant details, press the <b>“Calculate Schedule”</b> button. At this point, our Rust-optimized backend will process all possible schedule combinations based on your preferences. The goal is to provide you with the most efficient and convenient match, minimizing your time at university and ensuring that your schedule fits perfectly with your academic and personal needs.

After a few seconds, SAIJITAN will present you the result with the best possible schedule according to the data entered. You will be able to clearly see which is the best combination of classes, thus optimizing your daily and weekly schedule effectively.

In short, with SAIJITAN, we simplify the academic planning process by eliminating the manual work and uncertainty associated with selecting the perfect schedule. Discover how this platform can transform your university experience and maximize your time significantly!

## <a name="technical-information"> :desktop_computer: Technical Information</a>

#### Technologies

<div align='center'>
  <img src='https://img.shields.io/badge/Astro_Build-080b1d?style=for-the-badge&logo=astro&logoColor=F1570B' alt='Astro Build' />
  <img src='https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='Astro Build' />
  <img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' alt='Astro Build' />
  <img src='https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=f74b00' alt='Astro Build' />
</div>

#### Project Structure

```
SAIJITAN/
├── assets/
│   └── Saijitan.png/
├── backend/
│   ├── src/
│   │   └── main.rs
│   ├── Cargo.lock
│   └── Cargo.toml
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── email.svg
│   │   │   ├── github.svg
│   │   │   ├── logo.svg
│   │   │   ├── schedule.svg
│   │   │   ├── telegram.svg
│   │   │   └── time.svg
│   │   ├── components/
│   │   │   ├── Feature.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Form.jsx
│   │   │   └── Header.astro
│   │   ├── layouts/
│   │   │   └── Layout.astro
│   │   ├── pages/
│   │   │   ├── index.astro
│   │   │   └── schedule.astro
│   │   └── env.d.ts
│   ├── astro.config.mjs
│   ├── package-lock.json
│   ├── package.json
│   ├── tailwind.config.mjs
│   └── tsconfig.json
├── .gitignore
├── LICENSE
└── README.md
```

## <a name="license"> :copyright: License</a>

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## <a name="author"> :wave: Author</a>

1. :frowning_man: Neyan Montes
   - GitHub: [XNeyMo](https://github.com/XNeyMo)
   - LinkedIn: [Neyan Montes](https://www.linkedin.com/in/neyanmontes/)
   - UpWork: [Neyan Montes](https://www.upwork.com/freelancers/~016725aa35a6808ac8)
   - Telegram: [XNeyMo](https://t.me/xneymo)
   - Email: [Neyan Montes](mailto:xneymodev@gmail.com)
