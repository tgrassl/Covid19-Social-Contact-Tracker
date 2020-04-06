![](https://i.ibb.co/TvcGSNx/github.png)

<a href="https://wirvsvirushackathon.org/">
  <img src="https://i.ibb.co/ZzG24xB/Logo-Projekt-01.png" width="300px" height="auto">
</a>

## Demo
Android:
[Android APK](https://drive.google.com/open?id=1yHNAtayV3Q0zx_YLJMP8LQunQYg8Rd7J)
or from [Github Releases](https://github.com/tgrassl/Covid19-Social-Contact-Tracker/releases/tag/1.0.1)

Demo for iOS follows.

## Target
Now my Covid-19 test is positive... but who exactly have I been seeing the last 14 days? 
The Social Contact Tracker allows you to track activities and to notify direct contacts when illness occurs. 

## Background
How can an affected person (tested positive or suspected) inform the contacts of the last 14 days? Example: I took a bus from A to B last week. I don't even know at what time. Or: When did I meet with X or Y last Tuesday?

**The app was designed and developed by me within 48h for the [WirVsVirusHackathon](https://wirvsvirushackathon.org/).

The submission for it is on [DevPost](https://devpost.com/software/social-contact-tracking-corona-tagebuch).

## Functionality 
The user can track his activities and directly met contacts in the app and thus has a kind of diary for social interactions. If an illness is detected, some disease-related data can be entered and if desired, all active contacts can be notified by SMS with an automatically generated message.
Furthermore, the user has the possibility to get a daily notification so that he does not forget to record his activities.

### Notification
<img src="https://i.ibb.co/M9QrPd0/notify.png" width="500px" height="auto">

### Example of a hint SMS
```
Hint:
I have had symptoms of Covid-19 since March 14, 2020.
I have already been to the doctor.
Please pay attention if you notice any symptoms 
and try not to infect anyone through carelessness.

This message was automatically created by the Social Contact Tracker.
You can get more information about it here: https://devpost.com/software/social-contact-tracking-corona-tagebuch
```

## Tech stack
- [Angular 9](http://angular.io/)
- [Ionic](https://ionicframework.com/)
- [NGXS](https://www.ngxs.io/)

## License
Code published under [GNU License](https://github.com/tgrassl/Covid19-Social-Contact-Tracker/blob/master/LICENSE).
