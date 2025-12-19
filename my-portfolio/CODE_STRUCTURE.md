# Portfolio Code Structure 📁

Portfolio ni dah di-refactor supaya senang untuk maintain dan edit. Semua code dah diasingkan ikut function dan section masing-masing.

## 📂 Folder Structure

```
my-portfolio/
├── app/
│   ├── page.js              # ✏️ Main landing page (import semua sections)
│   ├── layout.tsx           # Layout wrapper
│   └── globals.css          # 🎨 All CSS styles
│
├── components/
│   ├── Navbar.jsx           # ✏️ Navigation bar component
│   └── sections/            # 📦 Semua page sections
│       ├── HeroSection.jsx       # Hero section (nama, title, CTA)
│       ├── AboutIntro.jsx        # Intro section sebelum roadmap
│       ├── LifeRoadmap.jsx       # Horizontal scroll roadmap
│       ├── SkillsSection.jsx     # Skills display
│       ├── ProjectsPreview.jsx   # Projects grid
│       └── ContactCTA.jsx        # Contact call-to-action
│
├── data/
│   ├── lifeRoadmap.js       # 📝 Life roadmap data (edit untuk update roadmap)
│   └── skills.js            # 📝 Skills data (edit untuk update skills)
│
├── utils/
│   └── animations.js        # 🎬 GSAP animation setup functions
│
└── projects.js              # 📝 Projects data (root folder)
```

---

## 🎯 Nak Edit Apa? Guide Cepat

### 1. **Tukar Nama / Title / Role**
📍 File: `components/sections/HeroSection.jsx`
- Edit line `hero-greeting`, `hero-title`, `hero-subtitle`

### 2. **Update Life Roadmap**
📍 File: `data/lifeRoadmap.js`
- Add/edit/remove items dalam array
- Format:
  ```javascript
  {
      year: '2023',
      title: 'Your Title',
      description: 'Your story',
      icon: '🚀'  // Copy emoji dari https://emojipedia.org
  }
  ```

### 3. **Update Skills**
📍 File: `data/skills.js`
- Add/edit/remove skills
- Format sama macam roadmap (ada icon, title, description)

### 4. **Add/Edit Projects**
📍 File: `projects.js` (root folder)
- Add/edit/remove project items

### 5. **Tukar About Intro Text**
📍 File: `components/sections/AboutIntro.jsx`
- Edit text dalam `<h2>` dan `<p>` tags

### 6. **Tukar Contact CTA**
📍 File: `components/sections/ContactCTA.jsx`
- Edit heading, description, atau link

### 7. **Adjust Animations**
📍 File: `utils/animations.js`
- Tukar `duration` untuk animation speed
- Tukar `ease` untuk animation style
- Tukar `delay` untuk when animation starts

### 8. **Update CSS / Colors**
📍 File: `app/globals.css`
- Search for class names yang nak edit
- Tukar colors, sizes, spacing, etc.

---

## 🎨 CSS Classes Guide

### Main Sections
- `.hero-section` - Hero section styles
- `.about-intro` - About intro styles
- `.horizontal-scroll-container` - Roadmap container
- `.skills-section` - Skills section
- `.projects-preview` - Projects grid
- `.contact-cta` - Contact section

### Specific Elements
- `.roadmap-item` - Individual roadmap cards
- `.skill-card` - Individual skill cards
- `.project-card` - Individual project cards

---

## 🎬 Animation Functions

Dalam `utils/animations.js`, ada function untuk setiap animation:

- `setupHeroAnimations()` - Hero section fade in
- `setupAboutIntroAnimation()` - About intro fade in
- `setupHorizontalScroll()` - Horizontal roadmap scroll
- `setupSkillsAnimations()` - Skills slide from left/right
- `setupProjectCardsAnimations()` - Projects slide with rotation
- `setupNavbarScrollEffect()` - Navbar background change on scroll
- `setupHeroParallax()` - Hero background parallax effect

---

## 🚀 Quick Start Guide

1. **Nak tukar content?**
   - Pergi ke `components/sections/` dan edit file yang nak tukar

2. **Nak tukar data?**
   - Pergi ke `data/` folder dan edit JSON/JS files

3. **Nak adjust animations?**
   - Pergi ke `utils/animations.js` dan tukar values

4. **Nak styling baru?**
   - Pergi ke `app/globals.css` dan update CSS

---

## 💡 Tips

- **Comments ada dalam setiap file** - Baca comments untuk understand better
- **Start from data files** - Paling senang untuk edit content
- **CSS organized by sections** - Search nama section untuk jumpa styles
- **Test after each change** - Run `npm run dev` dan tengok changes

---

## 📝 Common Edits

### Add New Roadmap Item
```javascript
// data/lifeRoadmap.js
{
    year: '2024',
    title: 'New Achievement',
    description: 'What you achieved',
    icon: '🎯'
}
```

### Add New Skill
```javascript
// data/skills.js
{
    icon: '💡',
    title: 'New Skill',
    description: 'What you can do'
}
```

### Change Colors
```css
/* app/globals.css */
/* Search for color values and change them */
color: antiquewhite;  /* Change to your color */
background-color: rgb(63, 37, 37);  /* Change to your color */
```

---

Sekarang code dah organized dan senang nak maintain! 🎉
