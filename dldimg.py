from bs4 import BeautifulSoup
import os
import requests

# Create the directory if it does not exist
if not os.path.exists('_site/assets/img/'):
    os.makedirs('_site/assets/img/')

html_doc = """
                       <div class="ShuffleMe"><img src="imgs/CPS_09.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_20.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_21.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_22.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_23.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_26.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_28.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_31.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_38.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_39.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_40.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_41.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_47.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_51.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_52.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_01_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_02_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_05_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_06_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_07_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_09_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_archiviste_11_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_Contact_10_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_Contact_16_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_esker_20.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_esker_21.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_02_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_03_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_05_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_07_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_08_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_14_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/CPS_flotsam_2021_16_lo.webp"></div>
            <div class="ShuffleMe"><img src="imgs/NBF-21.webp"></div>
            <div class="ShuffleMe"><img src="imgs/NBF-24.webp"></div>
            <div class="ShuffleMe"><img src="imgs/NBF-38.webp"></div>
            <div class="ShuffleMe"><img src="imgs/NBF-41.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_10.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_13.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_14.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_15.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_29.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_30.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_32.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_33.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_36.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_42.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_43.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_45.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_48.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_49.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_50.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_archiviste_04_lo.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_ATSOA_PL_2018_16_lo.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_Contact_15_lo.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_esker_22.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_esker_23.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_flotsam_2021_04_lo.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_flotsam_2021_09_lo.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/CPS_flotsam_2021_10_lo.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/CPS_flotsam_2021_13_lo.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/NBF-33.webp"></div>
              <div class="ShuffleMe imgSmall"><img src="imgs/NBF-35.webp"></div>
              <div class="ShuffleMe imgSmll"><img src="imgs/NBF-40.webp"></div>
              <div class="ShuffleMe imgMid"><img src="imgs/CPS_03_2015.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_06_2015.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_07_2015.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_18.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_24.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_25.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_27.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_34.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_35.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_37.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_44.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_46.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_archiviste_08_lo.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_Contact_07_lo.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_Contact_17_lo.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_esker_01.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_esker_03.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_flotsam_2021_01_lo.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_flotsam_2021_06_lo.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_flotsam_2021_11_lo.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/CPS_flotsam_2021_12_lo.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/CPS_flotsam_2021_15_lo.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF-13.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/NBF-25.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF-26.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/NBF-37.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF-39.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF-42.webp"></div>
          <div class="ShuffleMe imgMida"><img src="imgs/NBF-46.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF-47.webp"></div>
          <div class="ShuffleMe imgMid"><img src="imgs/NBF.webp"></div>
           """

soup = BeautifulSoup(html_doc, 'html.parser')

for div in soup.find_all('div', {'class':'ShuffleMe'}):
    img = div.find('img')
    if img is not None:
        img_url = "https://www.celia-perrin-sidarous.com/" + img.get('src')
        os.system(f'wget -P _site/assets/img/ {img_url}')
