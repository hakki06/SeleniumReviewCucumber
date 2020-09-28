@fhctrip
  Feature:Fhctrip Kayit
    Scenario Outline: fhctrip websitesine gider
      Given kullanici fhctrip kayit sayfasina gider
      And kullanici username "<username>" girer
      And  kullanici email "<email>" girer
      And  kullanicifullname  "<fullname>" girer
      Examples:
        | username | email | fullname |
      |hasan     |hasan4444@yahoo.com|hasan var|
        |halil     |halil4444@yahoo.com|halil dur|
        |hakki     |hakki4444@yahoo.com|hakki cok|


