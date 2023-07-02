---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

Latest list of publications can be found on my [Google Scholar](https://scholar.google.com/citations?user=g1Kz9DIAAAAJ&hl=en&oi=ao).

**Increasing the Accessibility of Peripheral Artery Disease Screening with Deep Learning** ([Paper](https://link.springer.com/chapter/10.1007/978-3-031-17721-7_1))
Adrit Rao, Oliver Aalami
2022 MICCAI International Workshop on Applications of Medical Artificial Intelligence (AMAI)

**Accessible artificial intelligence for ophthalmologists** ([Paper](https://www.nature.com/articles/s41433-021-01891-6))
Adrit Rao, Harvey A Fishman
2022 Nature Eye Journal

**Studying the Effects of Self-Attention for Medical Image Analysis** ([Paper](https://openaccess.thecvf.com/content/ICCV2021W/CVAMD/papers/Rao_Studying_the_Effects_of_Self-Attention_for_Medical_Image_Analysis_ICCVW_2021_paper.pdf))
Adrit Rao, Jongchan Park, Sanghyun Woo, Joon-Young Lee, Oliver Aalami
2021 IEEE International Conference on Computer Vision (ICCV)

**Development of the Next Generation Hand-Held Doppler with Waveform Phasicity Predictive Capabilities Using Deep Learning** ([Paper](https://link.springer.com/chapter/10.1007/978-3-030-90874-4_6))
Adrit Rao, Akshay Chaudhari, Oliver Aalami
2021 MICCAI International Workshop on Clinical Image-Based Procedures (CLIP)

**Waveform Phasicity Prediction from Arterial Sounds through Spectrogram Analysis using Convolutional Neural Networks for Limb Perfusion Assessment** ([Paper](https://arxiv.org/pdf/2104.09748.pdf))
Adrit Rao, Kevin Battenfield, Oliver Aalami
2021 IEEE International Midwest Symposium on Circuits and Systems (MWSCAS)

