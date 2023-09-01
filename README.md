# React Native
Movie Search is a mobile application that connects to a movie DB to search for any movie that matches your query. The application has the ability to add a list of favorites.
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
->HomePage<br>
Ekran powitalny<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691373706/github%20screenshots/flow2code/homePage_o2dwdv.png" width="300">

->Strona główna<br>
Przy pierwszym uruchomieniu i bez wprowadzania tekstu wyszukania następuje domyślne wyswietlonie listy najbardziej popularnych produkcji. Przy wszystkich requestach do Api wyświetlany jest ekran ładowania, sygnalizujący pobieranie informacji z serwera.
><br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369122/github%20screenshots/flow2code/c1_qtyvuy.png" width="300">
<br>
->Wyszukiwanie<br>
Przy wyszukiwaniu natychmiastowo uruchamiane są requesty do TMDB API, która zwraca listę filmów spełniających wymagania. Użytkownik na bierząco widzi efekt wyszukiwania<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369080/github%20screenshots/flow2code/c3_potjpx.png" width="300">
<br>
->Brak filmów<br>
Jeśli w bazie danych nie ma filmów zawierających podana frazę pojawia się odpowiedni komunikat<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691368959/github%20screenshots/flow2code/c4_tttgoq.png" width="300">
<br>
->Szczegóły filmu<br>
Po kliknięciu w kafelek danego filmu, użytkownik przekierowywany jest do strony z szczegółowymi informacjami 
<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369035/github%20screenshots/flow2code/c7_b9us4s.png" width="300">
<br>
->Dodawanie do ulubionych<br>
Użytkownik może dodać dany film do swojej listy Ulubionych, poprzez klikniecie ikonki serca w dolnej części widoku. Pojawia się odpowiedni komunikat sygnalizujący poprawne dodanie filmu do kolekcji ulubionych.<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369076/github%20screenshots/flow2code/c6_am1col.png" width="300">
<br>
->Lista ulubionych filmów<br>
Użytkownik może przejść do swojej listy Ulubionych filmów poprzez klikniecie ikonki serca w prawej-górnej części ekranu (Strona wyszukiwania filmów)<br>
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369122/github%20screenshots/flow2code/c1_qtyvuy.png" width="300">
Widok listy Ulubionych:
<img src="https://res.cloudinary.com/ddlzbo6ut/image/upload/v1691369127/github%20screenshots/flow2code/c8_ekk0k8.png" width="300">

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
