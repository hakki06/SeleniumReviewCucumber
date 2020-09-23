@examples
Feature: Birden Cok Veri
  Scenario Outline: TC04_google arama testi
    Given kullanici google sayfasina gider
    And kullanici "<kelimeler>" arar
    Then kullici sayfa basliginda "<kelimeler>" kontrol eder

    Examples:Test verileri
      |kelimeler        |basliklar|
    |techproedication|techproeducatin|
    |selenium        |iskender       |
    |webdriver|saltuk                |
