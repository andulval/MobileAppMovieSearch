# Zadanie rekrutacyjne - React Native
Wykonaj prostą aplikację mobilną w React Native łączącą się z API The Movie DB
(https://developers.themoviedb.org/).

## 🚀 Functionalities

● można wyszukać dowolny film,
● filmy pasujące do wyszukiwania widać na liście filmów,
● na liście filmów widać następujące informacje o filmach:
○ okładka,
○ tytuł,
○ popularność,
○ liczba głosów,
● można zobaczyć szczegóły wybranego filmu:
○ gatunek filmu (np. komedia, dramat),
○ opis filmu,
○ kraj produkcji,
Zadanie powinno być umieszczone na publicznym repozytorium git, np. GitHub lub
BitBucket.
Spis wymaganych technologii przy pracy z zadaniem:
● react-native
● react-navigation
● typescript

## 🚀 Technologies Used:

>react-native

>react-navigation

>typescript

>Redux RTK

>RTK Query

>react-native-paper

>ESLint, Prettier

## 🖼️ Screenshots
>HomePage
Ekran powitalny
![home](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369200/github%20screenshots/flow2code/c0_z7zgse.png)

>Strona główna
Przy pierwszym uruchomieniu i bez wprowadzania tesktu wyszukania domyślnie zostaje wyswietlona lista aktualnie najbardziej popularnych produkcji
![Shop page](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369122/github%20screenshots/flow2code/c1_qtyvuy.png)

->Wyszukiwanie
Przy wyszukiwaniu natychmiastowo uruchamiane są requesty do TMDB API, która zwraca listę która jest na bieżąco wyświetlana 
![Mini cart ](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369080/github%20screenshots/flow2code/c3_potjpx.png)

->Brak filmów
Jeśli w bazie danych nie ma filmów zawierających podana frazę pojawia się odpowiedni komunikat 
![Single Category page](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691368959/github%20screenshots/flow2code/c4_tttgoq.png)

->Login & Register page
![login](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587617/github%20screenshots/crwn-clothing/crwn7_sign_in_x46jpj.png)

->Cart page
![Cart](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587631/github%20screenshots/crwn-clothing/crwn4_xerf2g.png)

->Payment
![Payment](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587635/github%20screenshots/crwn-clothing/crwn5_hmbbp4.png)

->Payment successful
![Payment](https://res.cloudinary.com/ddlzbo6ut/image/upload/v1684587617/github%20screenshots/crwn-clothing/crwn6_b6st5q.png)

## 💻 Getting started

### Requirements
-[npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/andulval/ReactNativeRecruitmentTask.git

$ cd ReactNativeRecruitmentTask

```
# After you fork and clone:

## Install dependencies
In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Set your firebase config

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

<img width="1261" alt="Screen Shot 2022-03-11 at 8 51 22 PM" src="https://user-images.githubusercontent.com/10578605/157999158-10e921cc-9ee5-46f6-a0c5-1ae5686f54f3.png">

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Run the web app
$ npm run start
```
# Test the code using app
$ npm run lint
```
