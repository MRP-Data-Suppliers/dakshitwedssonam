# Eternal Bloom — दाक्षित एवं सोनम

A simple, mobile-first wedding invitation site. It uses static artwork, has no RSVP form, no opening animation, and no CSS-drawn wedding illustrations. No build tools or JavaScript packages are required.

## Preview locally

Open index.html in a browser. All artwork is stored in the assets folder. The mobile menu, date countdown, telephone links, and village map search are the only interactive elements.

## Invitation information

The five-page wedding invitation PDF is the source for all names, dates, ceremonies, sender names, contacts, and location.

- Couple: चि. दाक्षित (हरिओम) एवं सौ. कां. सोनम (दृष्टि).
- Venue: ग्राम भेरुपुरा, तहसील सतवास, जिला देवास (म.प्र.).
- 30 नवम्बर 2026, सोमवार: माता पूजन, दोपहर 3 बजे; गणेश पूजन, संध्या 7 बजे. अगहन कृष्ण 7.
- 1 दिसम्बर 2026, मंगलवार: मण्डपछाया, प्रातः 7 बजे; हल्दी-मेहँदी. अगहन कृष्ण 8. The card does not give a time for हल्दी-मेहँदी.
- 2 दिसम्बर 2026, बुधवार: शुभलग्न. अगहन कृष्ण 9. The card does not give a time.
- 3 दिसम्बर 2026, गुरुवार: पेहरावनी एवं मामेरा, दोपहर 3 बजे; आशीर्वाद समारोह एवं प्रीतिभोज, “सुहानी शाम से ढलती रात तक”. अगहन कृष्ण 10.
- Baraat: 2 दिसम्बर 2026, बुधवार, दोपहर 1 बजे, श्रीमान बाईजीसा सा. श्री नरेन्द्रजी डोड, लवरास वालों के यहाँ से.
- प्रेषक (page 1): नानूराम पुवार, श्रीराम पुवार, मोहनसिंह पुवार (पूर्व ज.पं. सदस्य), सुरेशचन्द्र पुवार.
- Contact: 8435749728, 9617876361.

## Artwork and credits

- assets/invitation-background.png: generated floral parchment background.
- assets/mandap-generated.png: generated mandap illustration.
- assets/ganesha-pngtree.png: user-supplied PNGTree image. Its free license requires attribution and limits use to personal/private, non-commercial contexts. Credit is linked in the website footer.
- assets/floral-arch.png: user-supplied Vecteezy image. The free license requires attribution; the required web credit is linked in the website footer.
- assets/elephant-decorated.png: user-supplied transparent elephant image, mirrored to form a pair. The original source page was not supplied.
- assets/paper-texture.jpg: extra paper texture; the page uses the generated background instead.

## Deploy on Vercel

1. Put the contents of this folder in a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Select **Other** as the framework preset. Leave Build Command and Install Command empty. Set Output Directory to the current folder (dot).
4. Deploy. Vercel will provide a free Vercel address.

The same static folder can be deployed on Netlify or another static host.
