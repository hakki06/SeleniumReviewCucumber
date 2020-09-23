Feature: Parametreli Arama

  @webdriverArama
  Scenario: TC03_kullanici googleda arama yapar
    Given kullanici google sayfasina gider
    And kullanici webdriver kelimesi arar "webDriver"
    Then klullanici sayfa basliginda webdriver kontrol eder "webDriver"