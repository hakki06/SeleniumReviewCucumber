$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/fhctripkayit.feature");
formatter.feature({
  "name": "Fhctrip Kayit",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@fhctrip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "fhctrip websitesine gider",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici fhctrip kayit sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici username \"\u003cusername\u003e\" girer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici email \"\u003cemail\u003e\" girer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanicifullname  \"\u003cfullname\u003e\" girer",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "email",
        "fullname"
      ]
    },
    {
      "cells": [
        "hasan",
        "hasan4444@yahoo.com",
        "hasan var"
      ]
    },
    {
      "cells": [
        "halil",
        "halil4444@yahoo.com",
        "halil dur"
      ]
    },
    {
      "cells": [
        "hakki",
        "hakki4444@yahoo.com",
        "hakki cok"
      ]
    }
  ]
});
formatter.scenario({
  "name": "fhctrip websitesine gider",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fhctrip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici fhctrip kayit sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_fhctrip_kayit_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username \"hasan\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici email \"hasan4444@yahoo.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanicifullname  \"hasan var\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanicifullname_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "fhctrip websitesine gider",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fhctrip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici fhctrip kayit sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_fhctrip_kayit_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username \"halil\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici email \"halil4444@yahoo.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanicifullname  \"halil dur\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanicifullname_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "fhctrip websitesine gider",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fhctrip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici fhctrip kayit sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_fhctrip_kayit_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici username \"hakki\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_username_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici email \"hakki4444@yahoo.com\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanici_email_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanicifullname  \"hakki cok\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FhcTripStepDefinitions.kullanicifullname_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});