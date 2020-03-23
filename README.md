![](https://i.ibb.co/TvcGSNx/github.png)

<a href="https://wirvsvirushackathon.org/">
  <img src="https://i.ibb.co/ZzG24xB/Logo-Projekt-01.png" width="300px" height="auto">
</a>

## Demo
Android:
[Android-APK Version-1.0.0](https://drive.google.com/open?id=1yHNAtayV3Q0zx_YLJMP8LQunQYg8Rd7J)
oder von [Github Releases V-1.0.0](https://github.com/tgrassl/Covid19-Social-Contact-Tracker/releases/tag/1.0.0)

Demo für iOS folgt.

## Ziel
Jetzt ist mein Covid-19 Test positiv … aber wen habe ich die letzten 14 Tage genau getroffen? 
Der Social Contact Tracker erlaubt das Tracken von Aktivitäten und die Benachrichtigung von direkten Kontakten bei Krankheitseintritt. 

## Hintergrund
Wie kann eine betroffene Person (positiv getestet oder Verdachtsfall) die Kontakte der letzten 14 Tage informieren? Beispiel: Ich bin letzte Woche mit einem Bus von A nach B gefahren. Ich weiß nicht mal mehr um wieviel Uhr. Oder: Wann habe ich mich mit X oder Y am letzten Dienstag getroffen?

**Die App wurde innerhalb von 48h für den [WirVsVirusHackathon](https://wirvsvirushackathon.org/) von mir designed und entwickelt.**

Die Einreichung dafür ist auf [DevPost](https://devpost.com/software/social-contact-tracking-corona-tagebuch).

## Funktionalität 
Der Nutzer kann seine Aktivitäten und direkt getroffenen Kontakte in der App tracken und hat so eine Art Tagebuch für soziale Interaktionen. Falls nun eine Krankheit festgestellt wird können ein paar Krankheitsrelevante Daten erfasst werden und auf Wunsch werden alle aktiven Kontakte mit einer automatisch generierten Nachricht per SMS benachrichtigt.
Außerdem hat der Nutzer die Möglichkeit sich eine tägliche Benachrichtigung senden zu lassen, damit er nicht vergisst seine Aktivitäten zu erfassen.

### Beispiel einer Hinweis-SMS
```
Hinweis:
Ich habe seit dem 14.03.2020 Symptome der Krankheit Covid-19.
Ich war bereits beim Arzt.
Bitte achte darauf ob du eventuell auch Symptome feststellst 
und versuche niemanden durch Unachtsamkeit zu infizieren.

Diese Nachricht wurde automatisch vom Social Contact Tracker erstellt.
Mehr Infos darüber erhältst du hier: https://devpost.com/software/social-contact-tracking-corona-tagebuch
```

## Tech Stack
- [Angular 9](http://angular.io/)
- [Ionic](https://ionicframework.com/)
- [NGXS](https://www.ngxs.io/)

## Lizenz
Code veröffentlicht unter [GNU Lizenz](https://github.com/tgrassl/Covid19-Social-Contact-Tracker/blob/master/LICENSE).
